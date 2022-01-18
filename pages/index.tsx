import { HeaderTag, Button, Paragraph } from '../components';

export default function Home(): JSX.Element {
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
    </>
  );
}
