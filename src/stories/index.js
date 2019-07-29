import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../commons/Text';
import Button from '../commons/ButtonStep';
import Spinner from '../commons/Spinner';
import RadioGroup from '../commons/RadioGroup';
import RadioItem from '../commons/RadioItem';
import GridGroup from '../commons/GridGroup';
import GridItem from '../commons/GridItem';
import Card from '../commons/Card';

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

  .add('Card ', () => (
    <Card raised > TEST </Card>
  ))

  .add('Chart bar exemple ', () => (
    <Chart id={'chart'} dataSource={dataSource}>
        <Series
          valueField={'oranges'}
          argumentField={'day'}
          name={'My oranges'}
          type={'bar'}
          color={'#ffaa66'} />
    </Chart>
  ))