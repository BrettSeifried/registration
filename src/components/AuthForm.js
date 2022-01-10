import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword, handleSubmit }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-email">
        <label>E-mail</label>
        <input
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
      </div>
      <div className="input-password">
        <label>Password</label>
        <input
          placeholder="password"
          type="text"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <div>
          <button onClick={handleSubmit}>Log-in</button>
        </div>
      </div>
    </form>
  );
}
