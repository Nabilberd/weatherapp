import React from 'react';
import { showPopup } from '../utils/commons';

export default ({ handleClick }) => {

    return showPopup(
        'Oups! A problem has occurred.',
        'Please try again later.',
        [{ label: 'Retry', onClick: handleClick }]);

}
