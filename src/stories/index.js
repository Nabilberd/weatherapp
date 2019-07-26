import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../commons/Text';
import Button from '../commons/ButtonStep';
import Spinner from '../commons/Spinner';
import RadioGroup from '../commons/RadioGroup';
import RadioItem from '../commons/RadioItem';
import GridGroup from '../commons/GridGroup';
import GridItem from '../commons/GridItem';

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

  .add('Radio Group with two items', () => (
    <RadioGroup row>
      <RadioItem value="C" label="Celcius" />
      <RadioItem value="F" label="Fahrenheit" />
    </RadioGroup>
  ))

  .add('Grid Group', () => (
    <GridGroup>
      {[0, 1, 2].map(value => (
        <GridItem kye={value} item>
           A+{value} 
        </GridItem>
      ))}

    </GridGroup>
  ))