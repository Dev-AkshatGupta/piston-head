import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Home",
    description: "This is my home page",
    active: true,
  },
  {
    _id: uuid(),
    categoryName: "American Classics",
    description:
      "This is american classic cars which have been  manufactured there is early times now they are not manufactured.",
    active: false,
  },
  {
    _id: uuid(),
    categoryName: "Car Reviews",
    description:
      "Thi section talks about the car reviews in which cars are reviewed on the basis of design and the economy and the performance ",
    active: false,
  },
  {
    _id: uuid(),
    categoryName: "Custom",
    description:
      "This section talks about the custom cars where they have been customized as per the customers preference ",
    active: false,
  },
  {
    _id: uuid(),
    categoryName: "Repairs",
    description:
      "In this section how we can repair thins=gs at our own been taught.",
    active: false,
  },
  {
    _id: uuid(),
    categoryName: "Bikes",
    description: "This section is all about amazing bikes",
    active: false,
  },
];
