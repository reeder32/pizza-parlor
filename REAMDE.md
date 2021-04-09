# Pizza Parlor

#### A project for ordering your favorite pizza.

Check out page [here](https://github.com/reeder32/pizza-parlor.git)

#### By Nick Reeder

## Technologies Used

* HTML
* CSS
* Git
* Bootstrap
* JQuery
* Javascript

## Setup/Installation Requirements

1. Clone git repository [Click here](https://github.com/reeder32/pizza-parlor.git)
2. Find _index.html_ file
3. _Open with your favorite browser_ by double clicking, or right-click -> open with...



## License

[MIT License](https://opensource.org/licenses/MIT)
&copy; 2021 Nick Reeder

## Contact Information

[email me](mailto:nickreeder32@gmail.com)

### Other projects

#### iOS work
*[Moody Weather](https://apps.apple.com/us/app/moody-weather/id1506337317)
*[Find My Mailbox](https://apps.apple.com/us/app/find-my-mailbox/id1530700085)


### Tests

Describe: addTopping()
Test: "This should add a topping to the pizza's toppings array"
Code: let pizza = Pizza();
      pizza.addTopping("pepperoni")
Expected Output: Pizza({toppings: ["pepperoni"], size: undefined})

Describe addSize()
Test: "It should add value to size property" 
Code: let pizza = Pizza();
      pizza.addSize("medium")
Expected Output: Pizza({toppings: [], size: 'medium'})

Describe: getPriceForSize()
Test: "It should return a price based on what size was chosen"
Code: let pizza = Pizza()
      pizza.getPriceForSize("medium")
Expected Output: 15

Describe: getPriceForToppings()
Test: "It should return the length of the toppings array + 1 (for cheese)"
Code: let pizza = Pizza()
      pizza.addTopping("pepperoni")
      pizza.addTopping("olives")
      pizza.getPriceForToppings()
Expected Output: 3

Describe: showSummary()
Test: "It should hide the order form, calculate the price, and show the summary"
Code: showSummary()
Expected Output: update UI with correct price
 



