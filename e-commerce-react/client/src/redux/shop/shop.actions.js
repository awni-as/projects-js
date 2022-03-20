// import { shopActions } from "./shop.slice";

// import {
//   db,
//   convertCollectionsSnapshotToMap,
// } from "../../utils/firebase.utils";

// export const fetchCollectionsStartAsync = () => {
//   return (dispatch) => {
//     const collectionRef = db.collection("collections");
//     dispatch(shopActions.fetchCollectionsStart());

//     collectionRef
//       .get()
//       .then((snapShot) => {
//         const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
//         dispatch(shopActions.fetchCollectionsSuccess(collectionsMap));
//       })
//       .catch((error) =>
//         dispatch(shopActions.fetchCollectionsFailure(error.message))
//       );
//   };
// };
