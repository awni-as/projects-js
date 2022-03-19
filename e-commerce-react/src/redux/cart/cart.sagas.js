import { all, call, takeLatest, put } from "redux-saga/effects";

import { userActions } from "../user/user.slice";
import { cartActions } from "./cart.slice";

export function* clearCartOnSignOut() {
  yield put(cartActions.clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(userActions.signOutSuccess, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
