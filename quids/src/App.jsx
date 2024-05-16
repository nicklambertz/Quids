import React, { Component } from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import Quiz_Main from './components/quiz_main';

class App extends Component {
    state = {  } 
    render() { 
        return <React.Fragment>
                <div className='header-container'>
                    <Header/>
                </div>
                <div className='quiz-main'>
                    <Quiz_Main/>
                </div>
                <div className='navbar-container'>
                    <Navbar/>
                </div>
        </React.Fragment>;
    }
}
 
export default App;