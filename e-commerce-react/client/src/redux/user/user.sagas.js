import { put, takeLatest, all, call } from "redux-saga/effects";

import { userActions } from "./user.slice";

import {
  createUserDocumentFromAuth,
  getCurrentUser,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalData
    );
    yield put(
      userActions.signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    );
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActions.googleSignInStart, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActions.emailSignInStart, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActions.checkUserSession, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(userActions.signOutSuccess());
  } catch (error) {
    yield put(userActions.signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(userActions.signOutStart, signOut);
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(
      userActions.signUpSuccess({ user, additionalData: { displayName } })
    );
  } catch (error) {
    yield put(userActions.signUpFailure(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(userActions.signUpStart, signUp);
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield call(getSnapshotFromUserAuth, user, additionalData);
}
export function* onSignUpSuccess() {
  yield takeLatest(userActions.signUpSuccess, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
