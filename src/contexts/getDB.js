// FIREBASE
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2lpFzKdz2CJOKzw_1hxHdYdRZ-w3NzU4",
  authDomain: "ecoemerge-a4312.firebaseapp.com",
  projectId: "ecoemerge-a4312",
  storageBucket: "ecoemerge-a4312.appspot.com",
  messagingSenderId: "94372861119",
  appId: "1:94372861119:web:fe88e6e376222eccf4a20a",
  measurementId: "G-2E4H8YWHQK",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getArticle(id) {
  try {
    const docRef = doc(db, "Articles", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (err) {
    console.error(err);
    return null;
  }
  // docSnap.data() will be undefined in this case
}

export { getArticle };
