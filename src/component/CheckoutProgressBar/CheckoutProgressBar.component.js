// import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './CheckoutProgressBar.style';
import ProgressBar from 'Component/ProgressBar';
import ProgressBarContainer from 'Component/ProgressBarContainer';



  
export class CheckoutProgressBar extends PureComponent {
 


  render() {
    return (
      <>
      <ProgressBarContainer>
        <ProgressBar percentage={100} progressNumber={1}/>
        <ProgressBar percentage={20} progressNumber={2}/>
      </ProgressBarContainer>
      </>
       
    );
  }
}

export default CheckoutProgressBar;
