import {create} from 'zustand';

type Store = {
  catX: number;
  catY: number;
  destX?: number;
  destY?: number;
  direction?: number;
  distance?: number;
  actions: {
    move: (element: HTMLElement) => void;
    updateDest: (destX: number, destY: number) => void;
  };
};

export const useStore = create<Store>((set, get) => {
  return {
    catX: 0,
    catY: 0,
    destX: undefined,
    destY: undefined,
    direction: undefined,
    distance: undefined,
    actions: {
      move: (element) => {
        const {catX, catY, destX, destY} = get();

        if (destX != null && destY != null) {
          const {radians, degrees, distance} = getDirections(
            element,
            destX,
            destY,
          );

          if (distance <= 20) {
            // Close enough
            return set({distance: 0});
          }

          const stepSize = 20;
          const newX = catX + stepSize * Math.cos(radians);
          const newY = catY + stepSize * Math.sin(radians);
          set({catX: newX, catY: newY, direction: degrees, distance});
        }
      },
      updateDest: (destX, destY) => {
        set({destX, destY});
      },
    },
  };
});

function getDirections(element: HTMLElement, destX: number, destY: number) {
  // Get the position and dimensions of the element
  const rect = element.getBoundingClientRect();

  // Calculate the center of the element
  const elementCenterX = rect.left + rect.width / 2;
  const elementCenterY = rect.top + rect.height / 2;

  // Calculate the differences
  const dx = destX - elementCenterX;
  const dy = destY - elementCenterY;

  const radians = Math.atan2(dy, dx);
  const degrees = radians * (180 / Math.PI);
  const distance = Math.sqrt(dx * dx + dy * dy);

  return {
    radians,
    degrees,
    distance,
  };
}
