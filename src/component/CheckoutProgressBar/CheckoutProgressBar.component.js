// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";

import './CheckoutProgressBar.style';

const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #222;
  border-radius: 8px;
  box-shadow: inset 0 0 5px #000;
`;
const Thumb= styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color: #F26323;
border-radius: 8px;
transition: width 0.3s ease-in-out;
`;
const Progress= styled.div`
  z-index: 5;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border-radius: 100%;
  background: ${props=>props.percentage=== 100? "#F26323":"#ccc"};
  `;
  const ProgressBar = styled.div`
  width: 100%;
display: flex;
flex-flow: row nowrap;
gap: 2px;
  `

export class CheckoutProgressBar extends PureComponent {
  clamp(min,value,max){
    //math.max gives the largest num between 0 and given value
    //while math.min givs the smallest between 100 and the given value
      return Math.min(Math.max(min,value),max);
  }    

  render() {
    return (
      <ProgressBar>
      <Track>
        <Thumb percentage={this.clamp(0, this.props.percentage, 100 ) } />
      </Track>
        <Progress percentage={this.clamp(0, this.props.percentage, 100 )}>1</Progress>
        <Track>
        <Thumb percentage={this.clamp(0, this.props.percentage, 100 ) } />
      </Track>
      <Progress percentage={this.clamp(0, this.props.percentage, 100 )}>2</Progress>
        <Track>
        <Thumb percentage={this.clamp(0, this.props.percentage, 100 ) } />
      </Track>
     
      </ProgressBar>
    );
  }
}

export default CheckoutProgressBar;
