const obj2 = obj.map((inner) => 
  inner.reduce((current, { key, value }) => {
    current[key] = value;
    return current
  }, {});
);

console.log(obj2)