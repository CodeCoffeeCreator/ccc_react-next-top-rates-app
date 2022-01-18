import { useState } from 'react';
import { HeaderTag, Button, Paragraph, Tag, Rating } from '../components';

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <HeaderTag tag='h1'>Some texts</HeaderTag>
      <Button appearance='primary' arrow='right'>
        Button
      </Button>
      <Button appearance='ghost' arrow='down'>
        Button
      </Button>
      <Paragraph size='l'>Big paragraph</Paragraph>
      <Paragraph>Medium paragraph</Paragraph>
      <Paragraph size='s'>Small paragraph</Paragraph>
      <Tag size='s'>Ghost</Tag>
      <Tag size='m' color='red'>
        Red
      </Tag>
      <Tag size='s' color='green'>
        Green
      </Tag>
      <Tag size='m' color='primary'>
        Primary
      </Tag>
      <Tag size='s' color='grey'>
        Grey
      </Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
    </>
  );
}
