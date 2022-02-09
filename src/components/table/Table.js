import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'antd';
import { ForkOutlined, StarOutlined } from '@ant-design/icons';


export const Table = ({ user }) => {

  const { Meta } = Card;
  const [userData, setUserData] = useState(null)
  const [userRepos, setUserRepos] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        const res = await axios.get(`https://api.github.com/users/${user}/repos`)
        setUserRepos(res.data)
        setUserData(response.data)
        setError(null)
      } catch (err) {
        if (err.response.data.message) {
          setUserRepos(null)
          setUserData(null)
          setError(err.response.data.message)
        }
      }
    }
    if (user) {
      getUser()
    } else {
      setUserRepos(null)
      setUserData(null)
      setError(null)
    }
  }, [user])

  return (
    <div className='mt-4 d-flex'>
      {(userData && userRepos) &&
        <>
          <div style={{ width: "30%", marginLeft: '1.5%' }}>
            <Card
              hoverable
              cover={<img style={{ height: "60vh", width: "100%" }} alt="avatar" src={userData?.avatar_url} />}
            >
              <Meta title={userData?.name} description={userData?.login} />
              <p className='mt-1'>{userData.bio}</p>
            </Card>
          </div>
          <div style={{ marginLeft: "2rem", width: "65%" }}>
            <h2>Repositories</h2>
            {userRepos.map((repo, i) => {
              return (
                <Card key={i} title={repo?.name} style={{ width: "100%", marginBottom: "1rem" }}>
                  <p>{repo?.description}</p>
                  <p><ForkOutlined /> {repo?.forks}</p>
                  <p><StarOutlined /> {repo?.watchers}</p>
                </Card>
              )
            })}
          </div>
        </>
      }
      {error && <h2>{error}</h2>}
    </div>
  );
};
