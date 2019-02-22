import {pairCons, cdr, car} from "./pair";

const makePoint = (a, b) => pairCons(a, b);

const getX = (point) => car(point);

const getY = (point) => cdr(point);

const pointToString = (point) => {
    const x = getX(point);
    const y = getY(point);
    return `x : ${x}, y : ${y}`;
};

export {makePoint, getX, getY, pointToString};
