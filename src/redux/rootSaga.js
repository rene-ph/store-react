import { call } from "redux-saga/effects";

import cartSaga from "./sagas/cart.saga";

export default function* root() {
  yield call(cartSaga);
}