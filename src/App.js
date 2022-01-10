import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <main className="container">
      <h1> testing page </h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <p>home page</p>
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
