let invoice = {
    name: "Alan",
    age: 23,
    products: {
        product0: ["Mouse", 29.90],
        product1: ["Teclado mecânico", 129.90],
        product2: ["Monitor", 899.99]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`);
    console.log(`A idade é ${invoice.age}`);
    console.log(`---------------------------`);
    console.log(`- O produto é ${invoice.products}`);
}
