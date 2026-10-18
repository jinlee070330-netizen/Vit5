import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "dark" ? "#222222" : "#f5f5f5",
    color: theme === "dark" ? "#ffffff" : "#333333",
    padding: "20px",
    minHeight: "100vh",
  };

  return (
    <div style={style}>
      <h1>Welcome!</h1>
      <p>
        This app uses React Router to move between pages and React Context to
        share a light/dark theme. Head to the Counter page to try it out.
      </p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Home;
