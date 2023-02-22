import React, { useState, ChangeEvent } from 'react';
import styles from './PostModal.module.scss';
import TextField from '@mui/material/TextField';
import { Note } from '../../../../../types/types';

type Props = {
  post: Note;
  onUpdatePost: (updatedPost: Note, id: number) => void;
  onDeletePost: (id: number) => void;
  handleClose: () => void;
  id: number;
};

const PostModal = ({
  post,
  handleClose,
  onDeletePost,
  onUpdatePost,
  id
}: Props) => {
  const [note, setNote] = useState<Note>(post);

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev) => ({
      author: prev.author,
      date: prev.date,
      content: e.target.value
    }));
  };

  const formattedDate = new Date(note.date).toLocaleDateString('en-GB');

  const onDeleteButtonClick = () => {
    onDeletePost(id);
    handleClose();
  };
  const onUpdateButtonClick = () => {
    onUpdatePost(note, id);
    handleClose();
  };

  return (
    <>
      <TextField disabled label="Date creation" defaultValue={formattedDate} />
      <div>What would you like to say ?</div>
      <textarea
        required
        className={styles.textArea}
        onChange={handleChangeContent}
        value={note.content}
      />
      <div className={styles.controls}>
        <button onClick={() => handleClose()}>Close</button>
        <button onClick={onDeleteButtonClick}>Delete</button>
        <button disabled={!note.content} onClick={onUpdateButtonClick}>Update</button>
      </div>
    </>
  );
};

export default PostModal;
