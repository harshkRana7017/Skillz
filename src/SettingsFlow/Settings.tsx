import React, { FC, memo, useState } from 'react';
import 'index.css';
import { Form, Formik } from 'formik';
import FormikInput from 'shared-resources/components/Input/FormikInput';
import FormikSelectMenu from 'shared-resources/components/Select/FormikSelect';
import Button from 'shared-resources/components/Button/Button';
import FormikTextArea from 'shared-resources/components/Input/FormikTextArea';
import * as Yup from 'yup';

type SettingsProps = {};
const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  language: 'English',
  aboutMe: '',
};
const items = [
  { value: 'English', label: 'English' },
  { value: 'Hindi', label: 'Hindi' },
];

const updateSettingsSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email().required('Email is required Field'),
  language: Yup.string().required('Please choose a language'),
  aboutMe: Yup.string().required('about me is required'),
});

const Settings: FC<SettingsProps> = () => {
  const [loading, setloading] = useState(false);
  const [updated, setUpdated] = useState(false);
  return (
    <div>
      <h1 className=' text-slate-700 custom-font3 font-bold'>
        Profile Settings
      </h1>
      {(!updated && (
        <Formik
          initialValues={initialValues}
          validationSchema={updateSettingsSchema}
          onSubmit={(vals) => {
            console.log(vals);
            setloading(true);
            setTimeout(() => {
              setUpdated(true);
            }, 2000);
          }}
        >
          {({ errors }) => (
            <div>
              <Form>
                <div className='flex justify-between mt-8'>
                  <div className='w-96'>
                    <h1 className='label'>First Name</h1>
                    <FormikInput
                      name='firstName'
                      className='mt-3 input  text-xl '
                    />
                  </div>
                  <div className='w-96'>
                    <h1 className='label'>Last Name</h1>
                    <FormikInput
                      name='lastName'
                      className='mt-3 input  text-xl'
                    />
                  </div>
                  <div className='w-96'>
                    <h1 className='label'>Email</h1>
                    <FormikInput name='email' className='mt-3 input  text-xl' />
                  </div>
                </div>
                <div className='mt-10 flex space-x-48'>
                  <div className='w-96'>
                    <h1 className='label mb-3'>Language</h1>
                    <FormikSelectMenu
                      items={items}
                      name='language'
                      placeholder='Language'
                    />
                  </div>
                  <div className='w-96'>
                    <h1 className='label mb-3'>About me</h1>
                    <FormikTextArea
                      name='aboutMe'
                      className='w-[700px] h-[250px] text-2xl p-2 rounded-lg border-2'
                    />
                  </div>
                </div>
                <Button
                  onClick={() => {
                    // setFieldTouched('language', true);
                    // alert('hii');
                  }}
                  disabled={Boolean(Object.values(errors).length)}
                  type='submit'
                  className='text-white text-2xl w-64 mt-12 p-4'
                >
                  {(loading && 'Please wait..') || 'Update Settings'}
                </Button>
              </Form>
            </div>
          )}
        </Formik>
      )) || (
        <div className='gray text-2xl text-gray-800 p-8'>
          Thank you! You Profile settings have been updated!
        </div>
      )}
    </div>
  );
};
export default memo(Settings);
