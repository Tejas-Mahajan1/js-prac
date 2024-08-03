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

const transformedObj = obj.map((subArray) =>
  subArray.reduce((currentA, { key, value }) => {
    currentA[key] = value;
    return currentA;
  },{})
);

console.log(transformedObj);

/* [
  {
    name: "Aman",
    age: 23
  },
  {
    name: "Ram",
    age: 25
  },{
    name: "Kishan",
    age: 30
  }
 ]
 
 */
