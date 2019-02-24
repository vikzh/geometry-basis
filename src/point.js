import { pairCons, cdr, car } from './pair';

const makePoint = (a, b) => pairCons(a, b);

const getX = point => car(point);

const getY = point => cdr(point);

const pointToString = (point) => {
  const x = getX(point);
  const y = getY(point);
  return `x : ${x}, y : ${y}`;
};

export const quadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  } if (x < 0 && y > 0) {
    return 2;
  } if (x < 0 && y < 0) {
    return 3;
  } if (x > 0 && y < 0) {
    return 4;
  }

  return null;
};

export {
  makePoint, getX, getY, pointToString,
};
