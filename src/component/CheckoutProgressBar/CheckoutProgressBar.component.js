// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";

import './CheckoutProgressBar.style';



export class CheckoutProgressBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1
    };
  }

  handleNextStep = () => {
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  handlePreviousStep = () => {
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  render() {
    const { currentStep } = this.state;
    return (
      <div>
        <div className="progress-bar">
          <div className={`progress-bar-step ${currentStep === 1 ? 'active' : ''}`}>Step 1</div>
          <div className={`progress-bar-step ${currentStep === 2 ? 'active' : ''}`}>Step 2</div>
          </div>
        <div className="checkout-content">
          {currentStep === 1 && (
            <div>
              {/* Step 1 content goes here */}
              <button onClick={this.handleNextStep}>Next</button>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              {/* Step 2 content goes here */}
              <button onClick={this.handlePreviousStep}>Previous</button>
              <button>Submit</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CheckoutProgressBar;
