function objectProjection(source, prototype) {
  const projected = {};
  for (const key in prototype) {
    if (source.hasOwnProperty(key)) {
      if (typeof prototype[key] === 'object' && prototype[key] !== null) {
        projected[key] = objectProjection(source[key], prototype[key]);
      } else {
        projected[key] = source[key];
      }
    }
  }
  return projected;
}

const src = {
  prop11: {
    prop21: 21,
    prop22: {
      prop31: 31,
      prop32: 32,
    },
  },
  prop12: 12,
};

const proto = {
  prop11: {
    prop22: null,
  },
  prop12: null
};

console.log(objectProjection(src, proto));