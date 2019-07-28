import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import RadioGroup from '../../../commons/RadioGroup';
import RadioItem from '../../../commons/RadioItem';
import { inputchange } from '../../../actions/actionCreators'

/**
 * Contains all the static texts of the component.
 * Help to integrate translations.
 */
import { styles } from '../styles/default'

/**
 * Contient tous les textes statiques du composant.
 * Permet d'ouvrir la porte à des traductions.
 */
import resources from '../resources/checkweather'


export default () => {
    
    const degreeName = 'degree';
    const { degreeItems, reducer } = resources;
    const degree = useSelector(state => state[reducer][degreeName]);
    const dispatch = useDispatch();

    return (
        <div style={styles.checkWeatherBloc}>
            <RadioGroup
                name="checkWeather"
                value={degree}
                handleChange={(event) => dispatch(inputchange(event.target.value, reducer, degreeName))}
                row
            >
                {( degreeItems || [] ).map(degreeItem => <RadioItem key={degreeItem.value} value={degreeItem.value} label={degreeItem.label} />)}
            </RadioGroup>
        </div>
    )
}