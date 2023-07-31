import React, { FC, memo, useState } from 'react';
import 'index.css';
import Header from 'Common/Header';
import { Form, Formik } from 'formik';
import FormikInput from 'shared-resources/components/Input/FormikInput';
import Button from 'shared-resources/components/Button/Button';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

type LoginPageProps = {};

const LoginPage: FC<LoginPageProps> = () => {
  const [loading, setloading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const signInSchema = Yup.object().shape({
    userName: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div className='flex items-center justify-center  '>
      <div className=' w-[70%]  mt-32  flex flex-col items-center'>
        <Header />
        <div className='h-[500px] flex items-center justify-center'>
          {(!loggedIn && (
            <Formik
              initialValues={{ Name: '', Email: '', phoneNumber: '' }}
              validateOnChange={false}
              onSubmit={(vals) => {
                console.log(vals);
                setloading(true);
                setTimeout(() => {
                  setLoggedIn(true);
                }, 2000);
              }}
              validationSchema={signInSchema}
            >
              <div>
                <Form>
                  <h1 className='label'>UserName or Email</h1>
                  <FormikInput
                    disabled={loading}
                    name='userName'
                    className='input  text-2xl '
                    placeholder='enter username or email'
                  />
                  <h1 className='label '>password</h1>
                  <FormikInput
                    disabled={loading}
                    name='password'
                    className='input text-2xl '
                    placeholder='enter password'
                  />

                  <div className='flex space-x-3 items-end '>
                    <Button
                      type='submit'
                      className='rounded-lg w-32 py-2 text-white text-2xl mt-10'
                    >
                      {(loading && 'Please wait..') || 'Sign In'}
                    </Button>

                    <Link
                      to='/signup'
                      className={`text-xl underline mb-2 ${
                        loading
                          ? 'text-gray-400 pointer-events-none cursor-not-allowed'
                          : ''
                      }`}
                    >
                      Don&apos;t have an account?
                    </Link>
                  </div>
                </Form>
              </div>
            </Formik>
          )) || (
            <div className='gray text-2xl text-gray-800 p-8'>
              Thank you! You have been loggedIn!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default memo(LoginPage);
