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

Pizza.prototype.getPriceForSize = function () {
  switch (this.size) {
    case "small":
      return 10;
      break;
    case "medium":
      return 15;
      break;
    case "large":
      return 20;
      break;
    default:
      return 0;
  }
}

Pizza.prototype.getPriceForToppings = function () {
  return this.toppings.length + 1;
}


// UI Logic

$(document).ready(function () {
  let pizza = new Pizza();
  $("#order-form").submit(function (event) {
    let size = $("input[name='sizeRadios']:checked").val();

    console.log(size);
    event.preventDefault();
  })
});
