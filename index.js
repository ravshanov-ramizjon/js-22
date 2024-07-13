let companies = [
    {
        id: 1,
        name: "Jaxa nosfrush",
        tax: 12,
        expenses: [30, 200, 1400]
    },
    {
        id: 2,
        name: "Konstantin mashennik",
        tax: 18,
        expenses: [400, 600, 800]
    },
    {
        id: 3,
        name: "Kama restorator",
        tax: 12,
        expenses: [200, 20, 400]
    },
]

// показать общую сумму всех расходов

let total = 0;

for (let i = 0; i < companies.length; i++) {
    for (let k = 0; k < companies[i].expenses.length; k++) {
        total += companies[i].expenses[k];
    }
}

console.log("Общая сумма всех расходов:", total, '$');