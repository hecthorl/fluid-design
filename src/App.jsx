import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './router/MainRouter';

const App = () => {
   return (
      <Router>
         <MainRouter />
      </Router>
   );
};

export default App;
