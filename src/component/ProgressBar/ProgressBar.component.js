// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";


import './ProgressBar.style';
const Track = styled.div`
  width: 100%;
  height: 8px;
  background-color: #ccc;
  border-radius: 8px;
  
`;
const Thumb= styled.div`
width: ${props => props.percentage}%;
height: 100%;
background-color:var(--primary-base-color);
border-radius: 8px;
transition: width 0.3s ease-in-out;
`;

  const ProgressStepContainer =styled.div`
  width: 100%;
display: flex;
flex-flow: row nowrap;
gap: 2px;
align-items:center
  `;
  
export class ProgressBar extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <ProgressStepContainer>
            <Track>
            <Thumb percentage={this.props.percentage} />
          </Track>
            </ProgressStepContainer>
           
        );
    }
}

export default ProgressBar;
