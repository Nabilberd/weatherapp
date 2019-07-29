import React from "react";
import { render, cleanup, fireEvent, getByText } from "react-testing-library";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BarChart from "../../../commons/BarChart";
import WeatherChart from "../components/WeatherChart";
import data from '../../../services/weather.mocked';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup)

describe("Feature Chart Weather", () => {
    test("Display Bar Chart with all information ", async () => {

        Enzyme.configure({ adapter: new Adapter() })
        
        const degree = "C";

        const wrapper = Enzyme.shallow(<WeatherChart degree={degree} weatherData={data} />);

        expect(wrapper.find(BarChart));
    });
});