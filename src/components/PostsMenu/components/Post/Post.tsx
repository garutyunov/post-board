import React, { useState } from 'react';
import { Note } from '../../../../types/types';
import styles from './Post.module.scss';
import Modal from '@mui/material/Modal';
import CustomModal from '../../../CustoModal';
import PostModal from './components/PostModal';

type Props = {
  post: Note;
  onUpdatePost: (updatedPost: Note, id: number) => void;
  onDeletePost: (id: number) => void;
  id: number;
};

const Post = ({ post, onUpdatePost, onDeletePost, id }: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <fieldset className={styles.post} onClick={handleOpen}>
        <legend>{post.author}</legend>
        <div className={styles.content}>{post.content}</div>
      </fieldset>
      <Modal open={open} onClose={handleClose}>
        <>
          <CustomModal title={`A note from ${post.author}`}>
            <PostModal
              post={post}
              handleClose={handleClose}
              onUpdatePost={onUpdatePost}
              onDeletePost={onDeletePost}
              id={id}
            />
          </CustomModal>
        </>
      </Modal>
    </>
  );
};

export default Post;
