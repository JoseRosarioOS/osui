import React, { Component } from 'react'
import classnames from 'classnames';
//import { KIND, SIZE } from './ButtonsVariations';

import "./Buttons.scss";

const KIND = {
  default: 'btn',
  primary: 'btn btn-primary'
};

const SIZE = {
  small: 'btn-small',
  large: 'btn-large'
};

class Buttons extends Component {
    render() {
        return ( 
            <div>
                
                <div className="margin-top-m">
                    <button className={classnames(KIND.primary)} > Add Task </button>  
                    <button className={classnames(KIND.default)} > Add Task </button>
                </div>
                <div>
                    <button className={classnames(KIND.primary, SIZE.small)} > Add Task </button>
                    <button className={classnames(KIND.default , SIZE.small)} > Add Task </button>
                </div>
            </div> 
        )
    }
}
export default Buttons


