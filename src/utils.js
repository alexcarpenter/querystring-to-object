export const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);
export const fromPairs = x =>
  x.reduce((y, z) => {
    y[z[0]] = z[1];
    return y;
  }, {});
export const map = x => y => y.map(x);
export const split = x => y => y.split(x);
export const tail = x => x.slice(1);
