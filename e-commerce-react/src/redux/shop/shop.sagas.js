import { call, put, takeLatest } from "redux-saga/effects";
import {
  db,
  convertCollectionsSnapshotToMap,
} from "../../utils/firebase.utils";
import { shopActions } from "./shop.slice";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = db.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(shopActions.fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(shopActions.fetchCollectionsFailure(error.message));
  }

  // dispatch(shopActions.fetchCollectionsStart());

  // collectionRef
  //   .get()
  //   .then((snapShot) => {
  //     const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
  //     dispatch(shopActions.fetchCollectionsSuccess(collectionsMap));
  //   })
  //   .catch((error) =>
  //     dispatch(shopActions.fetchCollectionsFailure(error.message))
  //   );
}

export function* fetchCollectionsStart() {
  yield takeLatest(shopActions.fetchCollectionsStart, fetchCollectionsAsync);
}
