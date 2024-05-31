import React from 'react';
import { Editor, EditorState, RichUtils, DraftHandleValue } from 'draft-js';
import 'draft-js/dist/Draft.css';

interface EditorComponentProps {
  setContent: React.Dispatch<React.SetStateAction<string>>;
  content: string;
}

const EditorComponent: React.FC<EditorComponentProps> = ({ setContent, content }) => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const handleChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    setContent(newEditorState.getCurrentContent().getPlainText());
  };

  const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleChange(newState);
      return 'handled';
    }
    
    return 'not-handled';
  };

  const toggleInlineStyle = (style: string) => {
    handleChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <div>
      <button onClick={() => toggleInlineStyle('BOLD')}>Bold</button>
      <button onClick={() => toggleInlineStyle('ITALIC')}>Italic</button>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
};

export default EditorComponent;
