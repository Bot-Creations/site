import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import JoinPage from './pages/JoinPage';
import NotFound from './pages/NotFound';

import { Switch, Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path='/join' component={JoinPage} />
        <Route path='*' component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;