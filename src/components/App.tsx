import {useEffect, useRef} from 'react';
import {useThrottledCallback} from 'use-debounce';
import {useStore} from '../store';
import Cat from './Cat';

export default function App() {
  const catRef = useRef<HTMLDivElement>(null);
  const actions = useStore((state) => state.actions);
  const catX = useStore((state) => state.catX);
  const catY = useStore((state) => state.catY);

  const handleMouseMove = useThrottledCallback((event: MouseEvent) => {
    actions.updateDest(event.clientX, event.clientY);
  }, 100);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (catRef.current) {
        actions.move(catRef.current);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <Cat
      elementRef={catRef}
      style={{position: 'absolute', top: catY, left: catX}}
    />
  );
}
