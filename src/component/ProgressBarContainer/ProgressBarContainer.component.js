// import PropTypes from 'prop-types';
import { Children, PureComponent } from 'react';
import styled from "styled-components";

import './ProgressBarContainer.style';


const ProgressStepContainer =styled.div`
width: 100%;
hieght: 100%;
display: flex;
flex-flow: row nowrap;
gap: 2px;

background-color: var(--breadcrumbs-background);
padding: 16px 0px; 
`;


export class ProgressBarContainer extends PureComponent {
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        return (
            <ProgressStepContainer>
                {this.props.children}
            </ProgressStepContainer>
        );
    }
}

export default ProgressBarContainer;
