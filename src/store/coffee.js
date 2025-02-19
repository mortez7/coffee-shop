import { v4 as uuidv4 } from "uuid";

const coffee = {
  state: {
    coffee: [
      // {
      //   id: uuidv4(),
      //   image: "coffee-1.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   country: "Brazil",
      //   price: "10.73",
      // },
      // {
      //   id: uuidv4(),
      //   image: "coffee-2.jpg",
      //   name: "Presto Coffee Beans 1kg",
      //   country: "Brazil",
      //   price: "15.99",
      // },
      // {
      //   id: uuidv4(),
      //   image: "coffee-3.jpg",
      //   name: "AROMISTICO Coffee 1kg",
      //   country: "Brazil",
      //   price: "6.99",
      // },
      // {
      //   id: uuidv4(),
      //   image: "coffee-1.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   country: "Brazil",
      //   price: "10.73",
      // },
      // {
      //   id: uuidv4(),
      //   image: "coffee-2.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   country: "Brazil",
      //   price: "10.73",
      // },
      // {
      //   id: uuidv4(),
      //   image: "coffee-3.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   country: "Brazil",
      //   price: "10.73",
      // },
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
  },
  getters: {
    getCoffeeCards(state) {
      return state.coffee;
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === id);
      };
    },
  },
};

export default coffee;
