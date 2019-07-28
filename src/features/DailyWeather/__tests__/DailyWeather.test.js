import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";
import DailyWeather from "../components/DailyWeather";

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe("Feature Daily Weather", () => {
    test("Display two arrow button ", async () => {

        const startIndex = 0;
        const weatherDataSize = 10;
        
        const { container, asFragment } = render(
            <DailyWeather
                onClickLeft={() => startIndex - 1}
                onClickRight={() => startIndex + 1}
                displayPrevious={startIndex > 0}
                displayNext={weatherDataSize > startIndex + 3}
            />
        );
        expect(asFragment()).toMatchSnapshot()
    });
});