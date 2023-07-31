import React, { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared-resources/components/Button/Button';

type AuthenticateHomePageProps = {};

const AuthenticateHomePage: FC<AuthenticateHomePageProps> = () => (
  <div className='flex flex-col mt-96 min-w-32 max-w-sm mx-auto text-white gap-10 text-2xl '>
    <Link to='/signin'>
      <Button>signin</Button>
    </Link>
    <Link to='/signup'>
      <Button>signup</Button>
    </Link>
    <Link to='/profileSettings'>
      <Button>profile settings</Button>
    </Link>
  </div>
);
export default memo(AuthenticateHomePage);
