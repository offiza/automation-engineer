function findTotal(sales) {
  const orderedSales = sales.map((sale) => {
    const { amount, quantity } = sale;
    return { ...sale, Total: amount * quantity };
  }).sort((a, b) => b.Total - a.Total);

  return orderedSales;
}

const sales = [
  {
    amount: 5000,
    quantity: 30,
  },
  {
    amount: 2000,
    quantity: 20,
  },
  {
    amount: 2000,
    quantity: 10,
  },
  {
    amount: 3000,
    quantity: 40,
  },
  {
    amount: 4000,
    quantity: 10,
  },
  {
    amount: 1000,
    quantity: 40,
  },
]

console.log(findTotal(sales));
console.log(sales);