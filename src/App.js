import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <main className="container">
      <h1> testing page </h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>home page</p>
            <AuthForm />
          </Route>
          <Route path="/auth">
            <p> auth page</p>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
