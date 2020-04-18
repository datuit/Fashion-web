/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { gql, from } from 'apollo-boost';
import { useQuery, use } from '@apollo/react-hooks';
import Axios from 'axios';

import messages from './messages';

export default function HomePage() {
  const { loading, error, data } = useQuery(query);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const submit = e => {
    e.preventDefault();
    Axios({
      method: 'POST',
      url: 'api/user/signup',
      data: {
        username,
        password,
      },
    });
  };
  if (loading) return <h1>Loading.....</h1>;
  return (
    <div>
      <form onSubmit={submit}>
        username :{' '}
        <input
          type="text"
          value={username}
          onChange={e => setusername(e.target.value)}
        />
        <br />
        pass{' '}
        <input
          type="password"
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <input type="submit" defaultValue="submit" />
      </form>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <h2>{data.hello}c</h2>
    </div>
  );
}

const query = gql`
  {
    hello
  }
`;
