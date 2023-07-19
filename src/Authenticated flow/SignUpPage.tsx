import React, { FC, memo, useState } from 'react';
import 'index.css';
import Header from 'Common/Header';
import Radio from 'shared-resources/components/Radio/Radio';

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = () => {
  const [radio, setRadio] = useState<string | null>('');
  return (
    <div className='flex items-center justify-center h-[600px] '>
      <div className=' w-[70%] flex flex-col items-center'>
        <Header />
        <div>
          <form>
            <h1 className='label'>Name</h1>
            <input className='input   text-2xl ' />
            <h1 className='label '>Email Address</h1>
            <input className='input text-2xl ' />
            <h1 className='label '>Mobile Number</h1>
            <input className='input   text-2xl ' />
            <h1 className='label'>Gender</h1>
            <Radio
              selected={radio}
              options={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Custom', value: 'custom' },
              ]}
              onChange={(val) => {
                setRadio(val);
              }}
            />
            <button className='rounded-lg bg-slate-700 h-12  w-36 text-white text-2xl'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default memo(SignUpPage);
