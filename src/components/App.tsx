import {useRef} from 'react';
import Cat from './Cat';

export default function App() {
  const catRef = useRef<HTMLDivElement>(null);
  return <Cat action="sleeping" elementRef={catRef} />;
}
