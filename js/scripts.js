function Pizza() {
  this.toppings = [];
  this.size = undefined;
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}


// let pizza = new Pizza();
// pizza.addTopping("pepperoni")
// console.log(pizza);
