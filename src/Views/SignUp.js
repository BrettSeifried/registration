import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { signUpUser } from '../services/users';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(email, password);
      console.log(response);
    } catch {
      setErrorMessage('Sign in failed, Try again.');
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
