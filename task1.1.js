Date.prototype.daysTo = function(otherDate) {
  const oneDay = 24 * 60 * 60 * 1000; 
  // after we find difference between date we have to divide it on oneDay to gett all days
  const diffDays = Math.round(Math.abs((this - otherDate) / oneDay));
  // Math.abs returns natural value | Math.round returns value of nearest integer 
  return diffDays;
}

let d1 = new Date();
let d2 = new Date(2023, 2, 13);

// Remember that the way to set date on 8 line only to show difference of dates.
// The problem of this way is that (2023, 2, 13) will be 2023-03-12

console.log(d1.daysTo(d2));
