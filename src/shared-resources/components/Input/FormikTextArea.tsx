import React, { FC, memo } from 'react';
import { useField } from 'formik';
import TextArea, { TextAreaProps } from './TextArea';

interface FormikTextAreaProps
  extends Omit<TextAreaProps, 'onChange' | 'value' | 'error'> {
  name: string;
}

const FormikTextArea: FC<FormikTextAreaProps> = (props) => {
  const { name } = props;
  const [, meta, helpers] = useField(name);
  const { value, error } = meta;
  const { setValue } = helpers;
  return (
    <TextArea
      error={error}
      value={value}
      onChange={(e): void => setValue(e.target.value)}
      {...props}
    />
  );
};
export default memo(FormikTextArea);
