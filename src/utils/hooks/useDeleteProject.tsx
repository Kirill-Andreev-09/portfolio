import { useCallback } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { Firestore, doc, deleteDoc } from "firebase/firestore";

export const useDeleteProject = (db: Firestore, collectionKey: string) => {
  const deleteProject = useCallback(
    async (id: string) => {
      try {
        await deleteDoc(doc(db, collectionKey, id));
        console.log(`Project with ID ${id} deleted successfully`);
      } catch (error) {
        console.error(`Error deleting project: ${error}`);
      }
    },
    [db, collectionKey]
  );

  return deleteProject;
};

export default useDeleteProject;
