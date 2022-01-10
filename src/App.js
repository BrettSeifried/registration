import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './Views/SignIn';
import Auth from './Views/Auth';
import { useState } from 'react';
import { getUser, logout } from './services/users.js';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <main className="container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>home page</p>
            {currentUser && (
              <>
                <h1> Signed in! Congrats Brettford, you did it!</h1>
                <button onClick={logoutUser}>LogOut!</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
