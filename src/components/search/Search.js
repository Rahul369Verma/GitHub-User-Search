import React from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const Search = ({submitUser}) => {

  const [search, setSearch] = useState("")

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }
  const submitFrom = (e) => {
    e.preventDefault();
    submitUser(search)
  }

  return (
    <div className='d-flex justify-content-center mt-4'>
      <form onSubmit={submitFrom}>
        <Input autoFocus value={search} onChange={changeSearch} style={{ width: "12rem" }} size="large" placeholder="Search User" prefix={<SearchOutlined />} />
        <Button type="primary" htmlType="submit" style={{ marginLeft: "1rem" }} size="large">
          Search
        </Button>
      </form>
    </div>
  );
};
