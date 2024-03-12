import { set as setA, setB as setAB } from "a";
import { set as setB } from "b";

console.log(`check a.lodash.set === b.lodash.set`)
console.log(setA === setB);

console.log(`check a.b.lodash.set === b.lodash.set`)
console.log(setAB === setB);
