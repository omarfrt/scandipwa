// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";

import './CheckoutProgressBar.style';



export class CheckoutProgressBar extends PureComponent {
    constructor(props) {
        super(props);
      }
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        
        return (
            <div class="stepper-wrapper">
            <div class="stepper-item completed">
              <div class="step-counter">1</div>
              <div class="step-name">First</div>
            </div>
            <div class="stepper-item active">
              <div class="step-counter">2</div>
              <div class="step-name">Second</div>
            </div>
            <div class="stepper-item active">
              
            </div>
            
          </div>
        );
    }
}

export default CheckoutProgressBar;
