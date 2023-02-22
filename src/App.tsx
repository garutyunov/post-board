import React, { useState } from 'react';
import PostsMenu from './components/PostsMenu';
import Title from './components/Title';
import styles from './App.module.scss';
import Auth from './components/Auth';
import isAuthorized from "./utils/isAuthorized";

function App() {
  const [isAuth, setIsAuthorized] = useState<boolean>(isAuthorized());

  return (
    <div className={styles.main}>
      {isAuth ? (
        <>
          <Title />
          <PostsMenu />
        </>
      ) : (
        <Auth setIsAuthorized={setIsAuthorized}/>
      )}
    </div>
  );
}

export default App;
