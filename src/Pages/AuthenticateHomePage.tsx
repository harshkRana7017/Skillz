import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';

type AuthenticateHomePageProps = {};

const AuthenticateHomePage: FC<AuthenticateHomePageProps> = () => (
  <div>
    <Link to='/signin'>signin</Link>
    <Link to='/signup'>signup</Link>
  </div>
);
export default memo(AuthenticateHomePage);
