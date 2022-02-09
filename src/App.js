import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Search } from './components/search/Search';
import { Table } from './components/table/Table';
import { useState } from 'react';

const App = () => {

  const [user, setUser] = useState("")

  const submitUser = (value) => {
    setUser(value)
  }

  return (
    <div className=''>
      <Navbar />
      <Search submitUser={submitUser} />
      <Table user={user} />
    </div>
  )
}

export default App;
