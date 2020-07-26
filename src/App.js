import React from 'react';
import './App.css';
import Navbar from './Navbar'
import Options from './Options'
import Numbers from './Numbers'
import LatestSales from './LatestSales'
import UsersByDevice from './UsersByDevice'

function App() {
  return (<div className='cont'>

   <Navbar />
   <Options /> 
   <Numbers />
   <LatestSales />
   <UsersByDevice />

  </div>
  );
}

export default App;
