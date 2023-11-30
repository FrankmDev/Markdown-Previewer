/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Markdown from "react-markdown";
import Editor from "./Editor";
import Preview from "./Preview";

function App() {
  return (
    <main>
      <h1 className="heading">Markdown Previewer</h1>
      <section id="container">
        <Editor />
        <Preview></Preview>
      </section>
    </main>
  );
}

export default App;
