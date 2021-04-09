function Pizza() {
  this.toppings = [];
  this.size = undefined;
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
}

let pizza = new Pizza();
// pizza.addTopping("pepperoni")
pizza.addSize("medium");
console.log(pizza);
