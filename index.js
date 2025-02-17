const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//PIZZAS CON ID IMPAR
console.log('Pizzas con id impar:');
pizzas.filter(pizza => pizza.id % 2 !== 0).forEach(pizza => console.log(pizza));

//PIZZAS CON VALOR MENOR A $600
const hayPizzaMenos600 = pizzas.some(pizza => pizza.precio < 600);
console.log('¿Hay alguna pizza que valga menos de $600? ', hayPizzaMenos600);

//NOMBRES Y PRECIOS
console.log('Nombre y precio de cada pizza:');
pizzas.forEach(pizza => console.log(`${pizza.nombre}: $${pizza.precio}`));


//PIZZAS Y SUS INGREDIENTES
console.log('Ingredientes de cada pizza:');
pizzas.forEach(pizza => {
  console.log(`Ingredientes para ${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => console.log(`- ${ingrediente}`));
});

