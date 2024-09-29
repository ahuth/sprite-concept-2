import clsx from 'clsx';
import type {RefObject} from 'react';
import styles from './Cat.module.css';

type Props = {
  /**
   * Which direction the cat is moving, in degrees.
   * - Undefined === sleeping
   * - Null === sitting
   */
  direction?: number | null;
  elementRef?: RefObject<HTMLDivElement>;
};

export default function Cat({direction, elementRef}: Props) {
  const action = getActionFromDirection(direction);
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

function getActionFromDirection(direction?: number | null) {
  if (direction === undefined) {
    return 'sleeping';
  }
  if (direction === null) {
    return 'sitting';
  }
  if (direction >= 337.5 || direction < 22.5) {
    return 'runningRight';
  }
  if (direction >= 22.5 && direction < 67.5) {
    return 'runningDownAndRight';
  }
  if (direction >= 67.5 && direction < 112.5) {
    return 'runningDown';
  }
  if (direction >= 112.5 && direction < 157.5) {
    return 'runningDownAndLeft';
  }
  if (direction >= 157.5 && direction < 202.5) {
    return 'runningLeft';
  }
  if (direction >= 202.5 && direction < 247.5) {
    return 'runningUpAndLeft';
  }
  if (direction >= 247.5 && direction < 292.5) {
    return 'runningUp';
  }
  if (direction >= 292.5 && direction < 337.5) {
    return 'runningUpAndRight';
  }
  return 'sleeping';
}
