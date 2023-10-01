import "./App.css"
import Router from "./routes";
import { useFirebaseApp } from "reactfire";

export default function App() {
  const firebase = useFirebaseApp();
  return (
      <>
          <Router/>
      </>
  )
}
