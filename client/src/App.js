import "./App.css";
import NavBar from "./components/Navbar";
import UserList from "./components/UserList";
import Description from "./components/Description";
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {
  return (

    
  <div className="App">
  <BrowserRouter>
       <Route path='/:page' component={NavBar} />
        <Route exact path='/' component={NavBar} />
        <Route exact path='/' component={UserList} />
        <Route exact path='/userlist' component={UserList} />
       

       <Route exact path="/Description/:id" component={Description} />
   </BrowserRouter>
    </div>
  );
}




export default App;