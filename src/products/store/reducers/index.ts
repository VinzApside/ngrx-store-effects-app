import { ActionReducerMap } from "@ngrx/store";
import * as fromPizza from "./pizzas.reducer";

export interface ProductState {
  pizzas: fromPizza.PizzaState;
}

export const reducers: ActionReducerMap<ProductState> = {
  pizzas: fromPizza.reducer
};
