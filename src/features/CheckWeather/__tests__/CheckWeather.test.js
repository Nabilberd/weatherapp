import React from 'react'
import {Provider} from 'react-redux';
import {render, cleanup, waitForElement, getByText} from 'react-testing-library'
import 'jest-dom/extend-expect'

// ------------------------------------------------------------------
import store from '../../../store';
import CheckWeather from '../components/CheckWeather';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe("Feature Check Weather", () => {
  test("Display radio group with two option Celcius and Fahrenheit", async () => {
    const {container, asFragment} = render(<Provider store={store}> <CheckWeather /> </Provider>);
    expect(asFragment()).toMatchSnapshot()
  });
});
