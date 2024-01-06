import * as cardModule from "./modules/cards.js";
cardModule.displayCards();
cardModule.filterByCategory();

import * as cartModule from "./modules/cart.js";
cartModule.updateTotalInCart();

import * as counterModule from "./modules/counter.js";
counterModule.incrementCount();
counterModule.decrementCount();
counterModule.updateLocalStorage();
counterModule.getCountFromLocalStorage();
counterModule.removeItemFromLocalStorage();

import * as favoritesModule from "./modules/favorites.js";
favoritesModule.addFavorites();

import * as modalModule from "./modules/modal.js";

import * as navBarModule from "./modules/navBarFilters.js";
