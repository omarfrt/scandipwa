// import PropTypes from 'prop-types';
import { Children, PureComponent } from 'react';
import styled from "styled-components";

import './ProgressBarContainer.style';
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

const ProgressStepContainer =styled.div`
width: 100%;
display: flex;
flex-flow: row nowrap;
gap: 2px;
`;


export class ProgressBarContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <ProgressStepContainer>
                <Track>
                    <Thumb percentage={100} />
                </Track>
                {this.props.children}
            </ProgressStepContainer>
        );
    }
}

export default ProgressBarContainer;
