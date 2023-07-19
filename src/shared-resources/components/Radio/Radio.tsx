import React, { FC, FocusEvent } from 'react';
// types
import { RadioItem } from 'shared-resources/types/Radio.type';

export interface RadioProps {
  options: RadioItem[];
  onChange: (selected: string | null) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  selected?: string | null;
  name?: string;
  disabled?: boolean;
}

const Radio: FC<RadioProps> = ({
  options,
  name,
  onChange,
  selected,
  onBlur,
  onFocus,
  disabled,
}) => (
  <div className='flex gap-x-4 mt-2 w-full'>
    {options.map((item) => (
      <div key={item.value} className='flex items-center justify-between'>
        <input
          disabled={disabled}
          id={item.value}
          name={name}
          type='radio'
          onBlur={onBlur}
          onFocus={onFocus}
          checked={selected === item.value}
          onChange={(e) => onChange(e.target.checked ? item.value : null)}
          className='w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-600 '
        />
        <label
          htmlFor={item.value}
          className='block ml-3 text-xl font-medium leading-6 text-gray-900'
        >
          {item.label}
        </label>
      </div>
    ))}
  </div>
);

export default Radio;
