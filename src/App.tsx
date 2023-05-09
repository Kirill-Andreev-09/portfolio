import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { MainRoutes } from "./containers/routes";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles, firebaseConfig, lightTheme } from "./config";
import { FirebaseContext } from "./utils";
import { useEffect, useState } from "react";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const App = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const admin = localStorage.getItem("isAdmin");
    if (admin) {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    setIsLoading(false);
  }, []);

  return (
    <>
      {!isLoading && (
        <FirebaseContext.Provider value={{ db, isAdmin, setIsAdmin }}>
          <ThemeProvider theme={lightTheme}>
            <MainRoutes />
            <GlobalStyles />
          </ThemeProvider>
        </FirebaseContext.Provider>
      )}
    </>
  );
};

export default App;
