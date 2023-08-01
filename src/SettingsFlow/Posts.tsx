import React, { FC, memo, useState } from 'react';
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from 'react-icons/bs';
import PostCard from './comps/PostCard';

const posts = [
  {
    postId: '1',
    skill: 'Coding',
    title: 'The 3 rules of coding are as follows',
    imageUrl:
      'https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/5%20Best%20Coding%20Programs%20for%20Aspiring%20Programmers1650304687858345.jpg',
    description:
      'Coding tells a machine which actions to perform and how to complete tasks. Programming languages provide the rules for building websites, apps, and other computer-based technologies. Each programming language helps humans accurately communicate with machines.',
  },
  {
    postId: '2',
    skill: 'Dancing',
    title: 'The 3 rules of Dancing are as follows',
    imageUrl:
      'https://www.hercircle.in/hcm/Engage/D/EDC85C2A-6E76-4F78-8157-B8E8A470BF7E.JPG',
    description:
      'A series of steps and movements which you do to music  lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '3',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '4',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '5',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '6',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '7',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '8',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '9',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
  {
    postId: '10',
    skill: 'Singing',
    title: 'How to sing in 5 easy steps?',
    imageUrl:
      'https://schoolofrock.imgix.net/img/news-article-hero@2x/how-to-warm-up-your-singing-voice-1559238633.jpg',
    description:
      'The production of musical tones by means of the human voice. In its physical aspect, singing has a well-defined technique that depends on the use of the lungs, which act as an air supply, or bellows; on the larynx, which acts as a reed or vibrator...',
  },
];

type PostsProps = {};

const Posts: FC<PostsProps> = () => {
  const [id, setId] = useState(2);
  const handleRightClickScroll = () => {
    const newId = id + 2;
    if (newId > 9) {
      return;
    }
    setId(newId);

    const element = document.getElementById(newId.toString());

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleLeftClickScroll = () => {
    let newId = id - 2;
    if (newId > 0) {
      setId(newId);
    } else if (id - 1 > 0) {
      newId = id - 1;
      setId(newId);
    } else {
      return;
    }
    const element = document.getElementById(newId.toString());

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='overflow-hidden'>
      <h1 className=' text-slate-700 custom-font3 font-bold '>Posts</h1>

      <BsFillArrowLeftCircleFill
        className='fixed left-[620px] top-[55%]'
        size={42}
        onClick={() => {
          handleLeftClickScroll();
        }}
      />

      <div className='flex space-x-10 w-[999999px] mt-10'>
        {posts.map((post) => (
          <PostCard
            Skill={post.skill}
            description={post.description}
            imageUrl={post.imageUrl}
            title={post.title}
            key={post.postId}
            id={post.postId}
          />
        ))}
        <BsFillArrowRightCircleFill
          className='fixed right-20 top-[55%]'
          size={42}
          onClick={() => {
            handleRightClickScroll();
          }}
        />
      </div>
    </div>
  );
};
export default memo(Posts);
