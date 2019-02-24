import {
  pairCons, car, cdr,
} from './pair';
import {
  makePoint, getX, getY, pointToString,
} from './point';

const makeSegment = (point1, point2) => pairCons(point1, point2);

const startSegment = segment => car(segment);

const endSegment = segment => cdr(segment);

const segmentToString = segment => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

const midpointSegment = (segment) => {
  const startPoint = startSegment(segment);
  const endPoint = endSegment(segment);
  const x = (getX(startPoint) + getX(endPoint)) / 2;
  const y = (getY(startPoint) + getY(endPoint)) / 2;

  return makePoint(x, y);
};

export {
  makeSegment, startSegment, endSegment, segmentToString, midpointSegment,
};
