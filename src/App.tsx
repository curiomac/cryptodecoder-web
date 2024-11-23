import Layout from "./components/Layout";
import "./app.css";
import { useEffect } from "react";

function App() {
  const documentDimensions = () => {
    const doc = document.documentElement;
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    doc.style.setProperty("--doc-width", `${docWidth}px`);
    doc.style.setProperty("--doc-height", `${docHeight}px`);
    return
  };
  window.addEventListener("resize", documentDimensions);
  useEffect(() => {
    documentDimensions()
  }, [])
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
