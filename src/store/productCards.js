import { v4 as uuidv4 } from "uuid";

const productCards = {
  state: {
    bestsellers: [
      {
        id: uuidv4(),
        image: "coffee-1.jpg",
        text: "Solimo Coffee Beans 2kg",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        text: "Presto Coffee Beans 1kg",
        price: "15.99$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        text: "AROMISTICO Coffee 1kg",
        price: "6.99$",
      },
    ],
    coffee: [
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: "15.99$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: "6.99$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
    ],
    goods: [
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: "15.99$",
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: "6.99$",
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
      {
        id: uuidv4(),
        image: "good-1.jpg",
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: "10.73$",
      },
    ],
  },
  getters: {
    getBestsellersCards(state) {
      return state.bestsellers;
    },
    getCoffeeCards(state) {
      return state.coffee;
    },
    getGoodsCards(state) {
      return state.goods;
    },
  },
};

export default productCards;
