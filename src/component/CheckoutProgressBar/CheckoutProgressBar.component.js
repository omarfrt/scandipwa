// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgressBar.style';
import ProgressBar from 'Component/ProgressBar';
import ProgressBarContainer from 'Component/ProgressBarContainer';
import ProgressNumber from 'Component/ProgressNumber';
import { SHIPPING_STEP, BILLING_STEP, DETAILS_STEP } from '@scandipwa/scandipwa/src/route/Checkout/Checkout.config';


  
export class CheckoutProgressBar extends PureComponent {
 
 
  getStepsProgress  = ()=>{
    const {checkoutStep}= this.props
    if(checkoutStep === DETAILS_STEP) {
    return {shippingProgress: 100, billingProgress: 100, successProgess: 100}
    }
    if(checkoutStep=== BILLING_STEP){
    return {shippingProgress: 100, billingProgress: 100, successProgess: 0}
    }
    
    return {shippingProgress: 100, billingProgress: 0, successProgess: 0}
    }

  render() {
  
    const {shippingProgress,billingProgress,successProgess} = this.getStepsProgress()
    
    return (
      <>
      <ProgressBarContainer>
        <ProgressBar percentage={shippingProgress} />
        <ProgressNumber percentage={shippingProgress} progressNumber={1} progressName={"Checkout"}/>
        <ProgressBar percentage={billingProgress} />
        <ProgressNumber percentage={billingProgress} progressNumber={2} progressName={"Review & Payments"}/>
        <ProgressBar percentage={successProgess} />
      </ProgressBarContainer>
      </>
       
    );
  }
}

export default CheckoutProgressBar;
