import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";
import WeatherInfo from "../components/WeatherInfo";

import data from '../../../services/weather.mocked';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe("Feature Weather Card Information", () => {
    test("Display three cards with weather information ", async () => {

        const degree = "C";
        const cityName = "München";
        const { container, asFragment } = render(
            <WeatherInfo weatherData={data} degree={degree} cityName={cityName} />
        );
        expect(asFragment()).toMatchSnapshot()
    });
});