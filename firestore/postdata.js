import { app } from "../auth/FirebaseConfig";
import { getFireStore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

async function postdata({ data }) {
  const db = getFireStore(app);
  const docRef = await addDoc(collection(db, "users"), data)
    .then(() => console.log("Posted"))
    .catch((e) => console.log(e));
}
