/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Markdown>This is *italic* text and **bold** text...</Markdown>
    </>
  );
}

export default App;
