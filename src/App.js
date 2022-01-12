import React from 'react'
import  {Router}  from '@reach/router'
import Home from './page/Home/Home';
import Header from './component/Header/Header';
import Cart from './page/Cart/Cart';
import { UseContextProvider } from './Context/UseContext';
import Section from './component/Section/Section';
import Search from './component/Search/Search';
import Detail from './page/Detail/Detail';

function App() {
    return (
      <div> 
          <UseContextProvider>
            <Header /> 
              <Router>
                  <Home path='/' />
                  <Cart path='/Cart' />
                  <Detail path='/Detail/:id' />
              </Router>
              <Section />
          </UseContextProvider>
      </div>
    );
}

export default App;
