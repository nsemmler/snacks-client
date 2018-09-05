import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import NavComponent from './components/shared/Navbar'
import Home from './containers/Home'
import Snacks from './containers/Snacks'
import Snack from './containers/Snack'
import AddSnack from './containers/AddSnack'
import EditSnack from './containers/EditSnack'
import Footer from './components/shared/Footer'

export class App extends Component {

  render() {
    return (<div>
      <BrowserRouter>
        <div>
          <NavComponent/>
          <Route exact="exact" path="/" component={Home}/>
          <Route path="/snack/:id" component={Snack}/>
          <Route exact="exact" path="/snacks" component={Snacks}/>
          <Route exact="exact" path="/snacks/new" component={AddSnack}/>
          <Route path="/snacks/:id/edit" component={EditSnack}/>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>);
  }
}

export default App
