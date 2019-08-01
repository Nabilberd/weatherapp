import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect';

// ------------------------------------------------------------------
import store from '../../../store';
import CheckWeather from '../components/CheckWeather';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe("Feature Check Weather", () => {
  test("Display radio group with two option Fahrenheit checked ( default value )", async () => {

    const { getByLabelText, asFragment } = render(<Provider store={store}> <CheckWeather /> </Provider>);
    const radioF = getByLabelText('Fahrenheit')
    const radioC = getByLabelText('Celcius')
    expect(radioF).toHaveProperty('checked', true);
    expect(radioC).toHaveProperty('checked', false);
    expect(asFragment()).toMatchSnapshot();
    
  });
});
