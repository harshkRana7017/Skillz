import React, { FC, memo } from 'react';

type HeaderProps = {};

const Header: FC<HeaderProps> = () => (
  <div className='w-full '>
    <h1 className=' font-bold text-slate-700 custom-font'>Skillz</h1>
    <h2 className='h-20 custom-font2 font-bold text-[20px] mt-1'>
      Connecting Skills, Empowering Growth
    </h2>
  </div>
);
export default memo(Header);
