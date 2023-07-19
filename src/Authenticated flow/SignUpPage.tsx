import React, { FC, memo, useState } from 'react';
import 'index.css';
import Header from 'Common/Header';
import Radio from 'shared-resources/components/Radio/Radio';
import { Formik } from 'formik';
import FormikInput from 'shared-resources/components/Input/FormikInput';
import Button from 'shared-resources/components/Button/Button';

type SignUpPageProps = {};

const SignUpPage: FC<SignUpPageProps> = () => {
  const [radio, setRadio] = useState<string | null>('');
  const [loading, setloading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  return (
    <div className='flex items-center justify-center  '>
      <div className=' w-[70%]  flex flex-col items-center'>
        <Header />
        <div className='h-[500px] flex items-center justify-center'>
          {(!signedUp && (
            <Formik
              initialValues={{ Name: '', Email: '', phoneNumber: '' }}
              onSubmit={(vals) => {
                console.log(vals);
              }}
            >
              <div>
                <h1 className='label'>Name</h1>
                <FormikInput name='Name' className='input   text-2xl ' />
                <h1 className='label '>Email Address</h1>
                <FormikInput name='Email' className='input text-2xl ' />
                <h1 className='label '>Mobile Number</h1>
                <FormikInput name='phoneNumber' className='input   text-2xl ' />
                <h1 className='label'>Gender</h1>
                <Radio
                  name='gender'
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
                <div className='flex space-x-3 items-end'>
                  <Button
                    type='submit'
                    className='rounded-lg w-32 text-white text-2xl mt-10'
                    onClick={() => {
                      setloading(true);
                      setTimeout(() => {
                        setSignedUp(true);
                      }, 2000);
                    }}
                  >
                    {(loading && 'Please wait..') || 'Sign Up'}
                  </Button>
                  {!loading && (
                    <a href='www.youtube.com' className='text-xl underline'>
                      Already have an account?
                    </a>
                  )}
                </div>
              </div>
            </Formik>
          )) || (
            <div className='gray text-2xl text-gray-800 p-8'>
              Thank you! Your submission has been recieved!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(SignUpPage);
