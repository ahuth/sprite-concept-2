import clsx from 'clsx';
import styles from './Cat.module.css';

type Props = {
  action: 'sleeping';
};

export default function Cat({action}: Props) {
  return (
    <div
      className={clsx(
        "h-8 w-8 bg-[url('/oneko-classic.gif')]",
        action === 'sleeping' && styles.sleeping,
      )}
    />
  );
}
