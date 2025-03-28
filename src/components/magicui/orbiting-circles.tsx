import { cn } from "@/lib/utils";
import React, { memo, useMemo } from "react";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

const OrbitingCircles = memo(({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  speed = 1,
  ...props
}: OrbitingCirclesProps) => {
  const calculatedDuration = duration / speed;
  
  // Memoize the children array and count to prevent recalculation
  const childrenArray = useMemo(() => React.Children.toArray(children), [children]);
  const childrenCount = childrenArray.length;

  // Memoize the SVG path to prevent recreation on each render
  const pathElement = useMemo(() => (
    path && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="pointer-events-none absolute inset-0 size-full"
      >
        <circle
          className="stroke-black/10 stroke-1 dark:stroke-white/10"
          cx="50%"
          cy="50%"
          r={radius}
          fill="none"
        />
      </svg>
    )
  ), [path, radius]);

  // Memoize the orbiting elements
  const orbitingElements = useMemo(() => 
    childrenArray.map((child, index) => {
      const angle = (360 / childrenCount) * index;
      return (
        <div
          key={index}
          style={
            {
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
            } as React.CSSProperties
          }
          className={cn(
            `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
            { "[animation-direction:reverse]": reverse },
            className,
          )}
          {...props}
        >
          {child}
        </div>
      );
    }), [childrenArray, childrenCount, calculatedDuration, radius, reverse, className, props]);

  return (
    <>
      {pathElement}
      {orbitingElements}
    </>
  );
});

OrbitingCircles.displayName = 'OrbitingCircles';

export { OrbitingCircles };

