// const s1 = new String ("Tejas")
// console.log(s1[0])

const obj = [
  [
    { key: "name", value: "Aman" },
    { key: "age", value: 23 },
  ],
  [
    { key: "name", value: "Ram" },
    { key: "age", value: 25 },
  ],
  [
    { key: "name", value: "Kishan" },
    { key: "age", value: 30 },
  ],
];

const obj2 = obj.map((inner) =>
  inner.reduce((currentA, { key, value }) => {
    currentA[key] = value;
    return currentA;
  },{})
);



console.log(obj2);
