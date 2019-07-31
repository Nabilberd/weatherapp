import React from 'react';
import { Chart, Series, Tooltip, Title, ValueAxis, Label, CommonSeriesSettings, Legend } from 'devextreme-react/chart';

import styles from '../style';

export default ({ formatToolip, verticalAlignment, horizontalAlignment, globalTitle, titleAxeY, argumentFields, customizeText, customizeTooltip, dataSource }) => (

    <Chart style={styles.chartBloc} dataSource={dataSource}>
        <Title text={globalTitle} font={styles.fontGlobalTitle} />

        <CommonSeriesSettings
            argumentField={argumentFields.argX}
            type={'bar'}
            ignoreEmptyPoints={true}
            sizeField={4}
            barPadding={0.2}
        />

        <Series valueField={argumentFields.argMinTemp.value} name={argumentFields.argMinTemp.name} color={styles.colorMinTempChart} />
        <Series valueField={argumentFields.argMaxTemp.value} name={argumentFields.argMaxTemp.name} color={styles.colorMaxTempChart} />

        <ValueAxis>
            <Title font={styles.fontTitleAxe} text={titleAxeY} />
            <Label horizontalAlignment customizeText={customizeText} font={styles.fontTitleAxeX} />
        </ValueAxis>
        <Legend font={styles.fontTitle} verticalAlignment={verticalAlignment} horizontalAlignment={horizontalAlignment} />
        <Tooltip font={styles.fontTitle} enabled={true} format={formatToolip} customizeTooltip={customizeTooltip} />
    </Chart>
)