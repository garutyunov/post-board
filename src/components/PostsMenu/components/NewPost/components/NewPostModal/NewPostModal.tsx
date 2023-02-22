import React, { useState, ChangeEvent } from 'react';
import styles from './NewPostModal.module.scss';
import { Note } from '../../../../../../types/types';

type Props = {
  onAddPost: (newPost: Note) => void;
  handleClose: () => void;
};

const NewPostModal = ({ onAddPost, handleClose }: Props) => {
  const [author, setAuthor] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleChangeAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };
  const onPostClick = () => {
    onAddPost({
      author,
      content,
      date: new Date()
    });
    handleClose();
  };

  return (
    <>
      <div>Author name</div>
      <input required className={styles.authorInput} onChange={handleChangeAuthor} />
      <div>What would you like to say ?</div>
      <textarea required className={styles.textArea} onChange={handleChangeContent} />
      <div className={styles.controls}>
        <button onClick={() => handleClose()}>Cancel</button>
        <button disabled={!author || !content} onClick={onPostClick}>Post</button>
      </div>
    </>
  );
};

export default NewPostModal;
