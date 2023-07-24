import Header from 'Common/Header';
import React, { FC, memo, useState } from 'react';

type ProfileSettingsProps = {};
type TextBoxProps = {
  text: string;
  bgcolor?: 'white' | 'slate';
  setState: (s: string) => void;
};
const TextBox: FC<TextBoxProps> = ({ text, bgcolor, setState }) => (
  // eslint-disable-next-line
  <div
    // eslint-disable-next-line
    onClick={() => {
      // eslint-disable-next-line
      setState(text);
      // eslint-disable-next-line
    }}
    className={`flex items-center justify-center p-6 mt-4 hover:bg-white hover:text-slate-700  ${
      bgcolor === 'white'
        ? 'bg-white text-slate-700'
        : 'bg-slate-700 text-white'
    }`}
  >
    <h1 className='text-2xl'>{text}</h1>
  </div>
);

const ProfileSettings: FC<ProfileSettingsProps> = () => {
  const [state, setState] = useState<string>('');
  console.log(state);

  return (
    <div className='pt-12 px-12 h-full bg-gray-200'>
      <Header />
      <div className='flex justify-between'>
        <div className='h-[800px] w-[500px] rounded-2xl bg-slate-700'>
          <div className='flex  items-center space-x-3 justify-center p-14  rounded-t-2xl'>
            <div className='bg-white w-16 h-16 rounded-3xl' />
            <h1 className='text-3xl text-white'>John Doe</h1>
          </div>
          <TextBox text='Profile Settings' setState={setState} />
          <TextBox text='Posts' setState={setState} />
          <TextBox text='Skills' setState={setState} />
          <TextBox text='People you learn from' setState={setState} />
          <TextBox text='People who learn from you' setState={setState} />
        </div>
        <div className='h-[800px] w-3/4 rounded-2xl bg-slate-700' />
      </div>
    </div>
  );
};
export default memo(ProfileSettings);
