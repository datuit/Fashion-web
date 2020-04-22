/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
// import { FormattedMessage } from 'react-intl';
// import { gql, from } from 'apollo-boost';
// import { useQuery, use } from '@apollo/react-hooks';
// import Axios from 'axios';

import messages from './messages';

export default function HomePage() {
  // const { loading, error, data } = useQuery(query);
  // const [username, setusername] = useState('');
  // const [password, setpassword] = useState('');
  // const [usernames, setusernames] = useState('');
  // const [passwords, setpasswords] = useState('');
  // const submit = e => {
  //   e.preventDefault();
  //   Axios({
  //     method: 'POST',
  //     url: 'api/user/signup',
  //     data: {
  //       username,
  //       password,
  //     },
  //   });
  // };
  // const submit1 = e => {
  //   e.preventDefault();
  //   Axios({
  //     method: 'POST',
  //     url: 'api/user/signin',
  //     data: {
  //       usernames,
  //       passwords,
  //     },
  //   });
  // };
  // if (loading) return <h1>Loading.....</h1>;
  return (
    <React.Fragment>
      <ion-icon name="heart" />
    </React.Fragment>
  );
}

// const query = gql`
//   {
//     hello
//   }
// `;
