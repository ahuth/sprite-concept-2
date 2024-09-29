import clsx from 'clsx';

type Props = {
  action: 'sleeping';
};

export default function Cat({action}: Props) {
  return (
    <div
      className={clsx(
        "h-8 w-8 bg-[url('/oneko-classic.gif')]",
        action === 'sleeping' && 'bg-[-64px_0]',
      )}
    />
  );
}
