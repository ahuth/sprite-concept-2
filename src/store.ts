import {create} from 'zustand';

type Store = {
  direction?: number | null;
  disposition:
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
  actions: {
    updateDest: (element: HTMLElement, destX: number, destY: number) => void;
  };
};

export const useStore = create<Store>((set) => {
  return {
    direction: undefined,
    disposition: 'sleeping',
    actions: {
      updateDest: (element, destX, destY) => {
        // Get the position and dimensions of the element
        const rect = element.getBoundingClientRect();

        // Calculate the center of the element
        const elementCenterX = rect.left + rect.width / 2;
        const elementCenterY = rect.top + rect.height / 2;

        // Calculate the differences
        const dx = destX - elementCenterX;
        const dy = destY - elementCenterY;

        // Calculate the angle in radians
        const angleRadians = Math.atan2(dy, dx);

        // Convert to degrees
        const angleDegrees = angleRadians * (180 / Math.PI);

        set({
          direction: angleDegrees,
          disposition: getDisposition(angleDegrees),
        });
      },
    },
  };
});

function getDisposition(direction?: number | null) {
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
