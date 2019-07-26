import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../commons/Text';
import Button from '../commons/ButtonStep';
import Spinner from '../commons/Spinner';

storiesOf('Story Component', module)
 
  .add('Text ', () => (
    <>
      <Text
        align="center"
        color="textPrimary"
        display="inline"
        gutterBottom
        variant="h4"
      >
        Loading
      </Text>
    </>
  ))

  .add('Button ', () => (
    <>
      <Button variant="outlinedsize" size="small" isLeft />
        
      <Button variant="outlinedsize" size="small" />
    </>
  ))

  .add('Spinner ', () => (
    <Spinner> Loading </Spinner>
  ))