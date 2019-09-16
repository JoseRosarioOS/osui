import React from 'react';
import classnames from 'classnames';
//import { KIND, SIZE } from './ButtonsVariations';

import "./Buttons.scss";

export const KIND = {
    default: 'btn',
    primary: 'btn btn-primary'
};

export const SIZE = {
    small: 'btn-small',
    large: 'btn-large',
    default: ''
};

export const Button = ({ KIND, SIZE, TEXT, DISABLED }) => (
    <button disabled={DISABLED} className={classnames(KIND, SIZE)}  > {TEXT} </button>
);

export default Button;

//export const Button  {
//    render() {
//        return (
//            <button disabled={DISABLED} className={classnames(KIND, SIZE)}  > {TEXT} </button>
//        )
//    }
//}
//export default Button