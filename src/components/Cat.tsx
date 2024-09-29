import clsx from 'clsx';
import type {RefObject} from 'react';
import {useStore} from '../store';
import styles from './Cat.module.css';

type Props = {
  elementRef?: RefObject<HTMLDivElement>;
};

export default function Cat({elementRef}: Props) {
  const disposition = useStore((state) => state.disposition);

  return (
    <div
      className={clsx(
        "h-8 w-8 bg-[url('/oneko-classic.gif')]",
        disposition === 'runningDown' && styles.runningDown,
        disposition === 'runningDownAndLeft' && styles.runningDownAndLeft,
        disposition === 'runningDownAndRight' && styles.runningDownAndRight,
        disposition === 'runningLeft' && styles.runningLeft,
        disposition === 'runningRight' && styles.runningRight,
        disposition === 'runningUp' && styles.runningUp,
        disposition === 'runningUpAndLeft' && styles.runningUpAndLeft,
        disposition === 'runningUpAndRight' && styles.runningUpAndRight,
        disposition === 'sitting' && styles.sitting,
        disposition === 'sleeping' && styles.sleeping,
      )}
      ref={elementRef}
    />
  );
}
