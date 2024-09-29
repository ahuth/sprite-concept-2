import clsx from 'clsx';
import type {RefObject} from 'react';
import styles from './Cat.module.css';

type Props = {
  action:
    | 'runningDown'
    | 'runningDownAndLeft'
    | 'runningDownAndRight'
    | 'runningLeft'
    | 'runningRight'
    | 'runningUp'
    | 'runningUpAndLeft'
    | 'runningUpAndRight'
    | 'sitting'
    | 'sleeping';
  elementRef?: RefObject<HTMLDivElement>;
};

export default function Cat({action, elementRef}: Props) {
  return (
    <div
      className={clsx(
        "h-8 w-8 bg-[url('/oneko-classic.gif')]",
        action === 'runningDown' && styles.runningDown,
        action === 'runningDownAndLeft' && styles.runningDownAndLeft,
        action === 'runningDownAndRight' && styles.runningDownAndRight,
        action === 'runningLeft' && styles.runningLeft,
        action === 'runningRight' && styles.runningRight,
        action === 'runningUp' && styles.runningUp,
        action === 'runningUpAndLeft' && styles.runningUpAndLeft,
        action === 'runningUpAndRight' && styles.runningUpAndRight,
        action === 'sitting' && styles.sitting,
        action === 'sleeping' && styles.sleeping,
      )}
      ref={elementRef}
    />
  );
}
