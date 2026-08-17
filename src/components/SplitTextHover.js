"use client";

import { Children, Fragment, isValidElement, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const rollTransition = {
  duration: 0.4,
  ease: [0.25, 1, 0.5, 1],
};

const WORD_STAGGER = 0.05;

/**
 * Pointer hover state for parent buttons/links driving rolling text.
 */
export function useRollingHover() {
  const shouldReduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return {
    active: shouldReduceMotion ? false : hovered,
    hoverProps: {
      onPointerEnter: () => setHovered(true),
      onPointerLeave: () => setHovered(false),
    },
  };
}

/**
 * Single clipped text roller: outgoing down, incoming up from above.
 */
function RollingUnit({ text, active, delay = 0, transition, className = "" }) {
  return (
    <span
      className={`relative inline-block overflow-hidden ${className}`.trim()}
    >
      <motion.span
        className="block"
        animate={{ y: active ? "100%" : "0%" }}
        transition={{ ...transition, delay }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute inset-0 block"
        aria-hidden="true"
        animate={{ y: active ? "0%" : "-100%" }}
        transition={{ ...transition, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

/**
 * Split React children into lines (by <br />) then words (by whitespace).
 */
function parseLines(children) {
  const nodes = Children.toArray(children);
  const lines = [];
  let current = "";

  const flush = () => {
    const words = current.trim().split(/\s+/).filter(Boolean);
    if (words.length) lines.push(words);
    current = "";
  };

  nodes.forEach((node) => {
    if (typeof node === "string" || typeof node === "number") {
      current += String(node);
      return;
    }

    if (isValidElement(node) && node.type === "br") {
      flush();
      return;
    }

    if (isValidElement(node) && typeof node.props?.children !== "undefined") {
      current += Children.toArray(node.props.children).join("");
    }
  });

  flush();
  return lines;
}

function getTextContent(children) {
  return Children.toArray(children)
    .map((child) =>
      typeof child === "string" || typeof child === "number" ? String(child) : ""
    )
    .join("");
}

/**
 * Motion rolling-text hover.
 * Default: each word rolls with stagger. `unit`: entire label rolls as one block.
 * Pass `active` when hover is handled by a parent button/link.
 */
export default function SplitTextHover({
  children,
  className = "",
  unit = false,
  active: controlledActive,
}) {
  const shouldReduceMotion = useReducedMotion();
  const [internalHovered, setInternalHovered] = useState(false);
  const isControlled = controlledActive !== undefined;

  const active = shouldReduceMotion
    ? false
    : isControlled
      ? controlledActive
      : internalHovered;

  const transition = shouldReduceMotion ? { duration: 0 } : rollTransition;

  const pointerProps = isControlled
    ? {}
    : {
        onPointerEnter: () => setInternalHovered(true),
        onPointerLeave: () => setInternalHovered(false),
      };

  if (unit) {
    return (
      <span className={`inline-block ${className}`.trim()} {...pointerProps}>
        <RollingUnit
          text={getTextContent(children)}
          active={active}
          transition={transition}
        />
      </span>
    );
  }

  const lines = parseLines(children);

  return (
    <span
      className={`inline-block ${className}`.trim()}
      {...pointerProps}
    >
      {lines.map((words, lineIndex) => {
        const indexOffset = lines
          .slice(0, lineIndex)
          .reduce((sum, line) => sum + line.length, 0);

        return (
          <Fragment key={`line-${lineIndex}`}>
            {lineIndex > 0 ? <br /> : null}
            {words.map((word, i) => {
              const delay = shouldReduceMotion
                ? 0
                : (indexOffset + i) * WORD_STAGGER;

              return (
                <Fragment key={`${lineIndex}-${i}-${word}`}>
                  {i > 0 ? " " : null}
                  <RollingUnit
                    text={word}
                    active={active}
                    delay={delay}
                    transition={transition}
                  />
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </span>
  );
}
