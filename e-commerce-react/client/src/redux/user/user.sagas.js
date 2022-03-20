import { put, takeLatest, all, call } from "redux-saga/effects";

import { userActions } from "./user.slice";

import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from "../../utils/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
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
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(userActions.signInFailure(error));
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
    yield put(userActions.signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userActions.emailSignInStart, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(userActions.signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userActions.checkUserSession, isUserAuthenticated);
}

export function* signOut() {
  try {
    yield auth.signOut();
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
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
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
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* onSignUpSuccess() {
  yield takeLatest(userActions.signUpSuccess, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    // call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
