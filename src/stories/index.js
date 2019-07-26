import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../commons/text';

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