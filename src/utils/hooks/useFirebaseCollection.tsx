import { useState, useEffect } from "react";
import { Firestore, collection, onSnapshot } from "firebase/firestore";

export const useFirebaseCollection = (db: Firestore, collectionKey: string) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const collectionRef = collection(db, collectionKey);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collectionRef,
      (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          const payload = doc.data();
          return { id: doc.id, ...payload };
        });

        setData(data);
        setLoading(false);
      },
      (error) => {
        console.error(error);
        setLoading(false);
      }
    );

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  return { data, loading };
};
