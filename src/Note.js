import { useState } from "react";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";

const Note = ({
  id,
  note,
  date,
  changeEditStatus,
  edit,
  currNoteId,
  saveNote,
  disabled,
}) => {
  const [currNote, setCurrNote] = useState(note);
  const editNote = (e) => {
    if (currNoteId !== id) {
      changeEditStatus(id);
    }
    setCurrNote(e.target.value);
  };

  const save = () => {
    saveNote(id, currNote);
  };

  const isCurrNote = currNoteId === id;

  return (
    <div className="col-3 note" key={id}>
      <Form>
        <Form.Group>
          <FormControl
            defaultValue={note}
            onChange={editNote}
            as="textarea"
            rows={5}
            disabled={disabled}
          />
          <InputGroup.Append>
            {edit && isCurrNote && (
              <Button className="save-btn" onClick={save}>
                Save
              </Button>
            )}
          </InputGroup.Append>
        </Form.Group>
      </Form>
      <div className="date">{date.toLocaleString()}</div>
    </div>
  );
};

export default Note;