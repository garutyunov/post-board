import React from 'react';
import styles from './CustomModal.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const CustomModal = ({ title, children }: Props) => (
  <div className={styles.modal}>
    <div className={styles.title}>{title}</div>
    <div className={styles.content}> {children}</div>
  </div>
);

export default CustomModal;
