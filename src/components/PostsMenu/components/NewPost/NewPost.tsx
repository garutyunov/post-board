import React, { useState } from 'react';
import styles from './NewPost.module.scss';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import NewPostModal from './components/NewPostModal';
import CustomModal from '../../../CustoModal';
import { Note } from '../../../../types/types';

type Props = {
  onAddPost: (newPost: Note) => void;
};

const NewPost = ({ onAddPost }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <fieldset className={styles.newPost} onClick={handleOpen}>
        <legend>Add new note...</legend>
        <div className={styles.addPost}>
          <AddIcon />
        </div>
      </fieldset>
      <Modal open={open} onClose={handleClose}>
        <>
          <CustomModal title="Post a new note">
            <NewPostModal onAddPost={onAddPost} handleClose={handleClose}/>
          </CustomModal>
        </>
      </Modal>
    </>
  );
};

export default NewPost;
