import React, { FC, memo, useState } from 'react';
import 'index.css';
import Header from 'Common/Header';
import Radio from 'shared-resources/components/Radio/Radio';
import { Form, Formik } from 'formik';
import FormikInput from 'shared-resources/components/Input/FormikInput';
import Button from 'shared-resources/components/Button/Button';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

type SignUpPageProps = {
  isLogin?: boolean;
};

const SignUpPage: FC<SignUpPageProps> = () => {
  const [radio, setRadio] = useState<string | null>('');
  const [loading, setloading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const SignupSchema = Yup.object().shape({
    Name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    Email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().required('Required'),
  });

  return (
    <div className='flex items-center justify-center  '>
      <div className=' w-[70%]  mt-32  flex flex-col items-center'>
        <Header />
        <div className='h-[500px] flex items-center justify-center'>
          {(!signedUp && (
            <Formik
              initialValues={{ Name: '', Email: '', phoneNumber: '' }}
              validateOnChange={false}
              onSubmit={(vals) => {
                console.log(vals);
                setloading(true);
                setTimeout(() => {
                  setSignedUp(true);
                }, 2000);
              }}
              validationSchema={SignupSchema}
            >
              <div>
                <Form>
                  <h1 className='label'>Name</h1>
                  <FormikInput
                    disabled={loading}
                    name='Name'
                    className='input  text-2xl '
                  />
                  <h1 className='label '>Email Address</h1>
                  <FormikInput
                    disabled={loading}
                    name='Email'
                    className='input text-2xl '
                  />
                  <h1 className='label '>Mobile Number</h1>
                  <FormikInput
                    disabled={loading}
                    name='phoneNumber'
                    className='input   text-2xl '
                  />
                  <h1 className='label'>Gender</h1>
                  <Radio
                    disabled={loading}
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
                  <div className='flex space-x-3 items-end '>
                    <Button
                      type='submit'
                      className='rounded-lg w-32 py-2 text-white text-2xl mt-10'
                    >
                      {(loading && 'Please wait..') || 'Sign Up'}
                    </Button>

                    <Link
                      to='/signin'
                      className={`text-xl underline mb-2 ${
                        loading
                          ? 'text-gray-400 pointer-events-none cursor-not-allowed'
                          : ''
                      }`}
                    >
                      Already have an account?
                    </Link>
                  </div>
                </Form>
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
