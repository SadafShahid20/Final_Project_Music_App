import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Popular", value: "Popular" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Classical", value: "Classical" },
];

export const filterByLanguage = [
  { id: 1, name: "Urdu", value: "Urdu" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "French", value: "French" },
  { id: 4, name: "Hindi", value: "hindi" },
];

export const deleteAnObject = (referenceUrl) => {
    const deleteRef = ref(storage, referenceUrl);
    deleteObject(deleteRef)
      .then(() => {
        return true;
      })
      .catch((error) => {
        return false;
      });
  };