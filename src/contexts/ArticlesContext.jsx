import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { useContext } from "react";

// FIREBASE
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC2lpFzKdz2CJOKzw_1hxHdYdRZ-w3NzU4",
  authDomain: "ecoemerge-a4312.firebaseapp.com",
  projectId: "ecoemerge-a4312",
  storageBucket: "ecoemerge-a4312.appspot.com",
  messagingSenderId: "94372861119",
  appId: "1:94372861119:web:fe88e6e376222eccf4a20a",
  measurementId: "G-2E4H8YWHQK",
};

// Context
const ArticlesContext = createContext();

const initialState = {
  articles: null,
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "articles/loaded":
      return { ...state, articles: action.payload, isLoading: false };
    case "loading":
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

const ArticlesProvider = function ({ children }) {
  const [{ articles, isLoading }, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchArticles() {
      dispatch({ type: "loading" });

      try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const data = await getDocs(collection(db, "Articles"));
        const articlesArray = [];
        data.forEach((doc) => {
          articlesArray.push(doc.data());
        });
        dispatch({ type: "articles/loaded", payload: articlesArray });
      } catch {
        dispatch({ type: "rejected", payload: "Error loading data" });
      }
    }
    fetchArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, isLoading }}>
      {console.log(articles)}
      {children}
    </ArticlesContext.Provider>
  );
};

function useArticles() {
  const context = useContext(ArticlesContext);
  if (context === undefined)
    throw new Error("ArticlesContext was used outside the ArticlesProvider");
  return context;
}

export { useArticles, ArticlesProvider };
