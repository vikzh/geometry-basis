const pairCons = (a, b) => method => method(a, b);

const car = pair => pair(a => a);

const cdr = pair => pair((a, b) => b);

export { pairCons, car, cdr };
