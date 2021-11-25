import React from 'react'
import  {Router}  from '@reach/router'
import Home from './page/Home/Home';
import Header from './component/Header/Header';
import Cart from './page/Cart/Cart';
import { UseContextProvider } from './Context/UseContext';
import Section from './component/Section/Section';

function App() {
    return (
      <div> 
        <UseContextProvider>
          <Header />
            <Router>
                <Home path='/' />
                <Cart path='/Cart' />
            </Router>
            <Section />
         </UseContextProvider>
      </div>
    );
}

export default App;
