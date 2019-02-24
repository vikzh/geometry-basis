import {
  pairCons, car, cdr,
} from './pair';
import {
  makePoint, getX, getY, quadrant,
} from './point';


export const makeRectangle = (point, width, height) => pairCons(point, pairCons(width, height));

export const getStartPoint = rectangle => car(rectangle);
export const getHeight = rectangle => cdr(cdr(rectangle));
export const getWidth = rectangle => car(cdr(rectangle));

export const square = rectangle => getHeight(rectangle) * getWidth(rectangle);
export const perimeter = rectangle => 2 * (getHeight(rectangle) + getWidth(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point2 = makePoint(getX(point1) + getWidth(rectangle), getY(point1) - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
