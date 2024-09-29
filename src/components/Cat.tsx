import clsx from 'clsx';
import styles from './Cat.module.css';

type Props = {
  action: 'sitting' | 'sleeping';
};

export default function Cat({action}: Props) {
  return (
    <div
      className={clsx(
        "h-8 w-8 bg-[url('/oneko-classic.gif')]",
        action === 'sitting' && styles.sitting,
        action === 'sleeping' && styles.sleeping,
      )}
    />
  );
}
