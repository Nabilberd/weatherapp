import React from 'react';

import resources from '../resources/weatherChartRessouces';
import BarChart from '../../../commons/BarChart';
import { getUnitName } from '../../../utils/commons';

export default ({ weatherData, degree }) => {

    const { globalTitle, titleAxeY, argumentFields, verticalAlignment, horizontalAlignment, formatToolip } = resources

    const unitName = getUnitName(degree)

    const customizeTooltip = (element) => {
        const value = Math.floor(element.value)
        return { text: `Date : ${element.argumentText}<br>${element.seriesName} : ${value}&#176` + degree };
    }

    const customizeText = (arg) => {
        return `${arg.valueText}&#176` + degree;
    }

    return (
        
        <BarChart
            globalTitle={globalTitle + unitName}
            titleAxeY={titleAxeY + unitName}
            formatToolip={formatToolip}
            verticalAlignment={verticalAlignment}
            horizontalAlignment={horizontalAlignment}
            argumentFields={argumentFields}
            customizeText={customizeText}
            customizeTooltip={customizeTooltip}
            dataSource={weatherData.map(weatherItem => ({ ...weatherItem, date: weatherItem.date.toLocaleDateString() }))}
        />
    )
}