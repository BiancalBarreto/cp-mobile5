import { database } from "@/firebaseConfig";
import { collection as firestoreCollection } from "firebase/firestore";

const collection = firestoreCollection(database, "unidade");

export { collection };
