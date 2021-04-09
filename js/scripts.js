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
  function showSummary() {
    console.log("Here");
    let summaryText = "Your pizza has: cheese, "
    pizza.toppings.forEach(function (topping, index) {
      console.log(topping);
      if (index === pizza.toppings.length - 1) {
        summaryText = summaryText + topping;
      } else {
        summaryText = summaryText + topping + ", ";
      }
    });
    console.log(summaryText);
    $(".card-title").text(`You ordered a ${pizza.size} pizza!`);
    $(".card-text").text(summaryText);
    $("#charge-button").text(`Pay $${pizza.getPriceForSize() + pizza.getPriceForToppings()}`);
    $("#order-form").slideUp();
    $("#order-summary").fadeIn();
  }
  $("#order-form").submit(function (event) {
    let size = $("input[name='sizeRadios']:checked").val();
    pizza.addSize(size);
    let toppings = $("input[name='toppingRadios']:checked").map(function (index, element) {
      pizza.addTopping(element.value);
    });
    showSummary();
    event.preventDefault();
  })

  $("#start-over").click(function (event) {
    location.reload();
    event.preventDefault();
  })
});
