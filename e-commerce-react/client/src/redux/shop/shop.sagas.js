import { call, put, takeLatest, all } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { shopActions } from "./shop.slice";

export function* fetchCollectionsAsync() {
  try {
    const collectionsArray = yield call(
      getCategoriesAndDocuments,
      "collections"
    );
    // yield put(fetchCategoriesSuccess(categoriesArray));
    // const collectionRef = db.collection("collections");
    // const snapshot = yield collectionRef.get();
    // const collectionsMap = yield call(
    //   convertCollectionsSnapshotToMap,
    //   snapshot
    // );
    yield put(shopActions.fetchCollectionsSuccess(collectionsArray));
  } catch (error) {
    yield put(shopActions.fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopActions.fetchCollectionsStart, fetchCollectionsAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
