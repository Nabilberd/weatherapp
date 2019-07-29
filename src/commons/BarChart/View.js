import React from 'react';
import { Chart, Series, Tooltip, Title, ValueAxis, Label, CommonSeriesSettings, Legend } from 'devextreme-react/chart';

import styles from '../style';

export default ({ formatToolip, verticalAlignment, horizontalAlignment, globalTitle, titleAxeY, argumentFields, customizeText, customizeTooltip, dataSource }) => (

    <Chart style={styles.chartBloc} dataSource={dataSource}>
        <Title text={globalTitle} />

        <CommonSeriesSettings
            argumentField={argumentFields.argX}
            type={'bar'}
            ignoreEmptyPoints={true}
            sizeField={6}
            barPadding={0.2}
        />

        <Series valueField={argumentFields.argMinTemp.value} name={argumentFields.argMinTemp.name} color={styles.colorMinTemp} />
        <Series valueField={argumentFields.argMaxTemp.value} name={argumentFields.argMaxTemp.name} color={styles.colorMaxTemp} />

        <ValueAxis>
            <Title font={styles.fontTitle} text={titleAxeY} />
            <Label horizontalAlignment customizeText={customizeText} font={styles.fontLabel} />
        </ValueAxis>
        <Legend font={styles.fontLegend} verticalAlignment={verticalAlignment} horizontalAlignment={horizontalAlignment} />
        <Tooltip font={styles.fontLabel} enabled={true} format={formatToolip} customizeTooltip={customizeTooltip} />
    </Chart>
)