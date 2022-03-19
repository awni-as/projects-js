import { put, takeLatest, all, call } from "redux-saga/effects";

import { userActions } from "./user.slice";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../utils/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(
      userActions.SignInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActions.SignInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(userActions.SignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActions.googleSignInStart, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(userActions.SignInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActions.emailSignInStart, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
