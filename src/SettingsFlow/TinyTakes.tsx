import React, { FC, memo } from 'react';
import video from './video.mp4';
import video2 from './video2.mp4';

const array = [video, video2, video, video2, video, video2];
type TinyTakesProps = {};

const TinyTakes: FC<TinyTakesProps> = () => (
  <div className='overflow-hidden'>
    tiny takes
    <div className='flex  space-x-4'>
      {array.map((v) => (
        <video
          key={v}
          className='h-[579px] w-[326px] bprder-0 rounded-lg'
          controls
        >
          <source src={v} type='video/mp4' />
          <track
            kind='captions'
            src='captions.vtt'
            label='English'
            srcLang='en'
          />
          Your browser does not support video tag
        </video>
      ))}
    </div>
  </div>
);
export default memo(TinyTakes);
