import Header from 'Common/Header';
import React, { FC, memo, useState } from 'react';
import Settings from './Settings';
import Posts from './Posts';

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
    className={`flex items-center justify-center p-6 mt-4 hover:bg-gray-100 hover:text-slate-700  ${
      bgcolor === 'white'
        ? 'bg-white text-slate-700'
        : 'bg-slate-700 text-white'
    }`}
  >
    <div className='text-2xl'>{text}</div>
  </div>
);

const ProfileSettings: FC<ProfileSettingsProps> = () => {
  const [state, setState] = useState<string>('Profile Settings');
  console.log(state);

  return (
    <div className='pt-12 px-12 h-full'>
      <Header />
      <div className='flex justify-between'>
        <div className='h-[800px] w-[500px] rounded-2xl bg-slate-700'>
          <div className='flex  items-center space-x-3 justify-center p-14  rounded-t-2xl'>
            <div className='bg-white w-16 h-16 rounded-3xl' />
            <h1 className='text-3xl text-white'>John Doe</h1>
          </div>
          <TextBox
            text='Profile Settings'
            setState={setState}
            bgcolor={state === 'Profile Settings' ? 'white' : 'slate'}
          />
          <TextBox
            text='Posts'
            setState={setState}
            bgcolor={state === 'Posts' ? 'white' : 'slate'}
          />
          <TextBox
            text='Skills'
            setState={setState}
            bgcolor={state === 'Skills' ? 'white' : 'slate'}
          />
          <TextBox
            text='People you learn from'
            setState={setState}
            bgcolor={state === 'People you learn from' ? 'white' : 'slate'}
          />
          <TextBox
            text='People who learn from you'
            setState={setState}
            bgcolor={state === 'People who learn from you' ? 'white' : 'slate'}
          />
        </div>
        <div className='h-[800px] w-3/4 rounded-2xl bg-gray-100 p-16'>
          {state === 'Profile Settings' && <Settings />}
          {state === 'Posts' && <Posts />}
        </div>
      </div>
    </div>
  );
};
export default memo(ProfileSettings);
