import { app } from "../auth/FirebaseConfig";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export async function postdata({ data }) {
  const db = getFirestore(app);
  console.log(data);
  const docRef = await addDoc(collection(db, "users"), data)
    .then(() => console.log("Posted"))
    .catch((e) => console.log(e));
}
