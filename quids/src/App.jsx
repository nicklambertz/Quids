import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                
                <div className='navbar-container'>
                <Navbar/>
                </div>
        </React.Fragment>;
    }
}
 
export default App;