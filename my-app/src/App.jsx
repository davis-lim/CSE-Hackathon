import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  
  const Nav = () => {

    return (
      <div className='navDiv'>
        {/* <img className='logo' src={logo} alt='logo' style={{height: '50px', width: '50px', margin: '15px'}} ></img> */}
          {/* <span><a href='/home'>{homeText}</a></span> &nbsp; 
          <span><a href='/operations'>{operationText}</a></span> &nbsp; 
          <span><a href='/memory'>{memoryText}</a></span> &nbsp; 
          <span><a href='/space'>{space}</a></span> */}
      </div>
    )
  }

  const BtmNav = () => {
    return (
      <div style={{width: 'calc(100vw - 100px)', backgroundColor: '#999999', height: '50px'}}>&nbsp;</div>
    )
  }

  return (
    <>
      <Nav></Nav>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/operations' element={<Operations/>}/>
          <Route path='/memory' element={<Memory/>}/>
          <Route path='/space' element={<Space/>}/> */}
        </Routes>
      </BrowserRouter>
      <BtmNav></BtmNav>
    </>
  );
}

export default App;