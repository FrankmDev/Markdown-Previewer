/* eslint-disable react/prop-types */
import "./preview.css";
import Markdown from "react-markdown";
const Preview = ({ text }) => {
  return (
    <section id="preview">
      <Markdown>{text}</Markdown>
    </section>
  );
};

export default Preview;
