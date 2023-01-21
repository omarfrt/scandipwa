// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";


import './ProgressBar.style';
const Track = styled.div`
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 8px;
  
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
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: ${props=>props.percentage=== 100? "#F26323":"#ccc"};
  `;
  const ProgressStepContainer =styled.div`
  width: 100%;
display: flex;
flex-flow: row nowrap;
gap: 2px;
  `;
  
export class ProgressBar extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <ProgressStepContainer>
        <Progress percentage={ this.props.percentage}>{this.props.progressNumber}</Progress>
            <Track>
            <Thumb percentage={this.props.percentage} />
          </Track>
            </ProgressStepContainer>
           
        );
    }
}

export default ProgressBar;
