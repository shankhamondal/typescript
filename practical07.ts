let discount = 10;
let Laptop = 30000;
let Headphone = 2500;
let Speaker = 1500;

console.log(`flat Discount Rate : ${discount}%`);

console.log(
  `Laptop : ${Laptop}/- ( Discount: - ${(Laptop * discount) / 100}/-) = ${Laptop - (Laptop * discount) / 100}/-`,
);

console.log(
  `Headphone : ${Headphone}/- (Discount: - ${(Headphone * discount) / 100}/-) = ${Headphone - (Headphone * discount) / 100}/-`,
);

console.log(
  `Speaker : ${Speaker}/- (Discount: - ${(Speaker * discount) / 100}/-) = ${Speaker - (Speaker * discount) / 100}/-`,
);
