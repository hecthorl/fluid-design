import { Switch, Route } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import NewsLetter from '../pages/NewsLetter';

const MainRouter = () => {
   return (
      <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/newsletter" component={NewsLetter} />
      </Switch>
   );
};

export default MainRouter;
