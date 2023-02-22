import React, { ChangeEvent, useState } from 'react';
import styles from './Auth.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import saveAuthData from '../../utils/saveAuthData';

type Props = {
  setIsAuthorized: (isAuth: boolean) => void;
};

const Auth = ({ setIsAuthorized }: Props) => {
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onButtonLoginClick = () => {
    saveAuthData(login, password);
    setIsAuthorized(true);
  };

  return (
    <div className={styles.auth}>
      <TextField
        required
        error={!login}
        label="Login"
        variant="standard"
        onChange={onChangeLogin}
      />
      <TextField
        required
        error={!password}
        label="Password"
        type="password"
        variant="standard"
        onChange={onChangePassword}
      />
      <Button
        onClick={onButtonLoginClick}
        disabled={!login || !password}
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};

export default Auth;
