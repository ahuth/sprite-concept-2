import {useEffect, useRef} from 'react';
import {useThrottledCallback} from 'use-debounce';
import {useStore} from '../store';
import Cat from './Cat';

export default function App() {
  const catRef = useRef<HTMLDivElement>(null);
  const actions = useStore((state) => state.actions);

  const handleMouseMove = useThrottledCallback((event: MouseEvent) => {
    if (catRef.current) {
      actions.updateDest(catRef.current, event.clientX, event.clientY);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <Cat elementRef={catRef} />;
}
