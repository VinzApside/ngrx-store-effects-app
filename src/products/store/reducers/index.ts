import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";
import * as fromPizza from "./pizzas.reducer";

export interface ProductState {
  pizzas: fromPizza.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizza.reducer
};

export const getProductsState = createFeatureSelector<ProductState>("products");

//pizza state
export const getPizzasState = createSelector(
  getProductsState,
  (state: ProductState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzasState,
  fromPizza.getPizzasEntities
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);

export const getAllPizzasLoaded = createSelector(
  getPizzasState,
  fromPizza.getPizzasLoaded
);
export const getAllPizzasLoading = createSelector(
  getPizzasState,
  fromPizza.getPizzasLoading
);
