// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";

import './ProgressNumber.style';
const Progress= styled.div`

  z-index: 5;  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  flex-shrink: 0;
  background: ${props=>props.percentage=== 100? "var(--primary-base-color)":"#ccc"};
  `;
  const ProgressName = styled.div`
    
    color: ${props=>props.percentage=== 100? "#000000":"#ccc"};
    font-weight: 700;
    text-overflow: ellipsis
  `
  const ProgressContainer= styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap:10px;
   
  `
export class ProgressNumber extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <ProgressContainer>
                <Progress percentage={ this.props.percentage}>{this.props.progressNumber}</Progress>
                <ProgressName percentage={ this.props.percentage}>{this.props.progressName} </ProgressName>
            </ProgressContainer>
            

        );
    }
}

export default ProgressNumber;
