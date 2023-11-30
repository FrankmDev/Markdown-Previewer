/* eslint-disable react/prop-types */
import "./editor.css";
const Editor = ({ initialText, onChange }) => {
  return (
    <textarea
      name="editor"
      id="editor"
      cols="50"
      rows="30"
      value={initialText}
      onChange={onChange}
    >
      {initialText}
    </textarea>
  );
};

export default Editor;
