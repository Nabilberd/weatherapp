import React from 'react';
import { showPopup } from '../utils/commons';

export default (props) => {
    showPopup(
        props.title ? props.title : 'Oups! A problem has occurred.',
        props.subTitle ? props.subTitle : 'Please try again later.',
        props.actions
    );
    return <div></div>;

}
