import {create} from 'zustand';

type Store = {
  direction?: number;
  distance?: number;
  actions: {
    updateDest: (element: HTMLElement, destX: number, destY: number) => void;
  };
};

export const useStore = create<Store>((set) => {
  return {
    direction: undefined,
    distance: undefined,
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

        // Get the distance via Pythagoras
        const distance = Math.sqrt(dx * dx + dy * dy);

        set({distance, direction: angleDegrees});
      },
    },
  };
});
