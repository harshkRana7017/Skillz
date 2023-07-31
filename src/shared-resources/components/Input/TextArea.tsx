import React, { FC, memo, ChangeEvent } from 'react';
import InputHelper from '../Inputhelper/InputHelper';

export interface TextAreaProps {
  className?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: any;
  error?: string;
}

const TextArea: FC<TextAreaProps> = ({ className, onChange, value, error }) => (
  <div>
    <textarea className={className} onChange={onChange} value={value} />
    <InputHelper type='error' text={error || ''} />
  </div>
);
export default memo(TextArea);
