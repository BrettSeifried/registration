import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signInUser } from '../services/users';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email, password);
      // console.log(response);
    } catch {
      setErrorMessage('Sign up failed, Try again.');
    }
  };

  return (
    <div>
      <h1> Sign In</h1>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
