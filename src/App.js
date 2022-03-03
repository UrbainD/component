import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import './App.css';

function App() {
  return (
    <div className="App">
      <>
        <ProfilePhoto/>
        <FullName/>
        <Address/>
      </>
    </div>
  );
}

export default App;
