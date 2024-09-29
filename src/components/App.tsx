import {useEffect, useRef, useState} from 'react';
import {useThrottledCallback} from 'use-debounce';
import Cat from './Cat';

export default function App() {
  const catRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState<number>();

  const handleMouseMove = useThrottledCallback((event: MouseEvent) => {
    if (catRef.current) {
      const {angleDegrees} = calculateDirection(
        catRef.current,
        event.clientX,
        event.clientY,
      );
      setDirection(angleDegrees);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return <Cat direction={direction} elementRef={catRef} />;
}

function calculateDirection(
  element: HTMLElement,
  mouseX: number,
  mouseY: number,
) {
  // Get the position and dimensions of the element
  const rect = element.getBoundingClientRect();

  // Calculate the center of the element
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  // Calculate the differences
  const dx = mouseX - elementCenterX;
  const dy = mouseY - elementCenterY;

  // Calculate the angle in radians
  const angleRadians = Math.atan2(dy, dx);

  // Convert to degrees if needed
  const angleDegrees = angleRadians * (180 / Math.PI);

  return {
    angleRadians,
    angleDegrees,
  };
}
