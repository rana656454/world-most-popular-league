import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Header from './components/header/Header';
import Home from './components/home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Leaguedetails from './components/leaguedetails/Leaguedetails';
import Notfound from './components/nofound/Notfound';

function App() {
  return (
    <div className="">
     <Router>
       <Switch>
       <Route exact path="/home">
         <Home></Home>
         </Route>
         <Route exact path={`/leaguedetails/:id`}>
         <Leaguedetails></Leaguedetails>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
         <Route path="*">
         <Notfound></Notfound>
         </Route>

       </Switch>
     </Router>
     
    </div>
  );
}

export default App;
