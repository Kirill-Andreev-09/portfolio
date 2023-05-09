import { Dispatch, SetStateAction, createContext } from "react";
import { Firestore } from "firebase/firestore";

type FirebaseContextType = {
  db: Firestore;
  isAdmin: boolean;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
};

const FirebaseContext = createContext<FirebaseContextType>({
  db: {} as Firestore,
  isAdmin: false,
  setIsAdmin: () => {},
});

export { FirebaseContext };
