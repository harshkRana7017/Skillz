import React, { FC, memo } from 'react';

type PostCardProps = {
  title: string;
  Skill: string;
  description: string;
  imageUrl: string;
  id: string;
};

const PostCard: FC<PostCardProps> = ({
  Skill,
  title,
  description,
  imageUrl,
  id,
}) => (
  <div
    id={id}
    className='h-[600px] w-[420px] bg-white p-10 relative hover:scale-110 transition-all duration-500 overflow-hidden'
  >
    <div className='bg-red-800 absolute top-20 left-6 z-10 px-3 py-2 w-64 text-2xl '>
      {Skill}
    </div>
    <img src={imageUrl} alt='Post description' className='h-52 z-0' />
    <div>
      <h1 className='text-3xl mt-4'>{title}</h1>
      <p className='mt-2'>{description}</p>
    </div>
  </div>
);
export default memo(PostCard);
