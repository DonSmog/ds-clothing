import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.action";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartOnPaymentSuccessful() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onPaymentSuccessful() {
  yield takeLatest(
    UserActionTypes.PAYMENT_SUCCESS,
    clearCartOnPaymentSuccessful
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onPaymentSuccessful)]);
}
