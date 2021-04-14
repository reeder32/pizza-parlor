function Pizza() {
  this.toppings = [];
  this.size = undefined;
  this.price = undefined;
}

Pizza.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.addSize = function (size) {
  this.size = size;
}

function getPriceForSize() {
  switch (this.size) {
    case "small":
      return 10;
    case "medium":
      return 15;
    case "large":
      return 20;
    default:
      return 0;
  }
}

function getPriceForToppings() {
  return this.toppings.length + 1;
}


// UI Logic

$(document).ready(function () {
  let pizza = new Pizza();
  function showSummary() {
    console.log("Here");
    let summaryText = "Your pizza has: cheese"
    pizza.toppings.forEach(function (topping, index) {
      summaryText = summaryText + ", " + topping;
    });
    $(".card-title").text(`You ordered a ${pizza.size} pizza!`);
    $(".card-text").text(summaryText);
    $("#charge-button").text(`Pay $${pizza.price}`);
    $("#order-form").slideUp();
    $("#order-summary").fadeIn();
  }
  $("#order-form").submit(function (event) {
    let size = $("input[name='sizeRadios']:checked").val();
    pizza.addSize(size);
    let toppings = $("input[name='toppingRadios']:checked").map(function (index, element) {
      pizza.addTopping(element.value);
    });
    pizza.price = getPriceForSize() + getPriceForToppings();
    showSummary();
    event.preventDefault();
  })

  $("#start-over").click(function () {
    location.reload();
  });
});
