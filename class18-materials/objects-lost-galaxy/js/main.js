//Create a mouse object that has four properties and three methods
let mouse = {};

mouse.color = "red";
mouse.brand = "Nike";
mouse.size = "small";
mouse.price = 199;

mouse.ColorIt = function () {
  mouse.color = "blue";
};

mouse.ChangeBrand = function () {
  mouse.brand = "Addias";
};

mouse.ChangeSize = function () {
  mouse.ChangeSize = "Medium".trim();
};

mouse.DiscountOnPrice = function () {
  mouse.price = mouse.price * 0.9;
};
