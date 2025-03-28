"use client";

import { motion } from "motion/react";
import { RefObject, useEffect, useId, useState, useMemo, useCallback } from "react";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement | null>;
  fromRef: RefObject<HTMLElement | null>;
  toRef: RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
  sameLevelCurve?: boolean;
  sameLevelThreshold?: number;
  showLight? : boolean
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 50,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
  sameLevelCurve = false,
  sameLevelThreshold = 10,
  showLight = false,
}) => {
  const id = useId();
  const [pathD, setPathD] = useState("");
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });
  const [isInView, setIsInView] = useState(false);

  // Check if the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, 
        rootMargin: "0px 0px -20% 0px", 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [containerRef]);

  // Memoize gradient coordinates
  const gradientCoordinates = useMemo(() => 
    reverse
      ? {
          x1: ["90%", "-10%"],
          x2: ["100%", "0%"],
          y1: ["0%", "0%"],
          y2: ["0%", "0%"],
        }
      : {
          x1: ["10%", "110%"],
          x2: ["0%", "100%"],
          y1: ["0%", "0%"],
          y2: ["0%", "0%"],
        },
    [reverse]
  );

  // Memoize the updatePath function
  const updatePath = useCallback(() => {
    if (containerRef.current && fromRef.current && toRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const rectA = fromRef.current.getBoundingClientRect();
      const rectB = toRef.current.getBoundingClientRect();

      const svgWidth = containerRect.width;
      const svgHeight = containerRect.height;
      setSvgDimensions({ width: svgWidth, height: svgHeight });

      const startX =
        rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
      const startY =
        rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
      const endX =
        rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
      const endY =
        rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

      // Calculate if elements are at roughly the same level
      const isSameLevel = Math.abs(startY - endY) < sameLevelThreshold;
      
      // Calculate the vertical direction (1 = downward, -1 = upward)
      const verticalDirection = startY < endY ? 1 : -1;

      let controlY;
      if (isSameLevel && !sameLevelCurve) {
        // Straight line for same level when sameLevelCurve is false
        controlY = startY;
      } else {
        // Apply curvature based on direction
        const curveMultiplier = isSameLevel ? 0.5 : 1;
        controlY = (startY + endY) / 2 + curvature * verticalDirection * curveMultiplier;
      }

      const d = `M ${startX},${startY} Q ${
        (startX + endX) / 2
      },${controlY} ${endX},${endY}`;
      setPathD(d);
    }
  }, [
    containerRef,
    fromRef,
    toRef,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
    curvature,
    sameLevelCurve,
    sameLevelThreshold,
  ]);

  useEffect(() => {
    // Initialize ResizeObserver and MutationObserver
    const resizeObserver = new ResizeObserver(updatePath);
    const mutationObserver = new MutationObserver(updatePath);

    // Observe the container element and its children
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      mutationObserver.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      // Also observe the from and to elements
      if (fromRef.current) {
        resizeObserver.observe(fromRef.current);
        mutationObserver.observe(fromRef.current, { attributes: true });
      }
      if (toRef.current) {
        resizeObserver.observe(toRef.current);
        mutationObserver.observe(toRef.current, { attributes: true });
      }
    }

    // Call the updatePath initially
    updatePath();

    // Clean up observers on component unmount
    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updatePath,]);

  // Memoize the SVG paths
  const paths = useMemo(() => (
    <>
      {/* Background path for the beam shadow */}
      <path
        d={pathD}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />
      
      {/* Animated gradient path */}
      {showLight && <path
        d={pathD}
        strokeWidth={pathWidth}
        stroke={`url(#${id})`}
        strokeOpacity="1"
        strokeLinecap="round"
      />}
    </>
  ), [pathD, pathColor, pathWidth, pathOpacity, id, showLight]);

  return (
    <svg
      fill="none"
      width={svgDimensions.width}
      height={svgDimensions.height}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",
        className,
      )}
      viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
    >
      {paths}
      
      {/* Gradient definition */}
      {showLight && <defs>
        <motion.linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={isInView ? {
            x1: gradientCoordinates.x1,
            x2: gradientCoordinates.x2,
            y1: gradientCoordinates.y1,
            y2: gradientCoordinates.y2,
          } : {
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          transition={{
            delay,
            duration,
            ease: [0.16, 1, 0.3, 1],
            repeat: isInView ? Infinity : 0,
            repeatDelay: 0,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="10%" stopColor={gradientStartColor} />
          <stop offset="32.5%" stopColor={gradientStopColor} />
          <stop offset="90%" stopColor={gradientStopColor} stopOpacity="0" />
        </motion.linearGradient>
      </defs>}
    </svg>
  );
};