import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const INITIAL_STATE = {
  categories: [],
  selectedMovie: {},
  selectedCategory: {},
};

const store = createStore(() => INITIAL_STATE, composeWithDevTools());

export default store;
