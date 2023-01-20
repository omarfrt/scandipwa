// import PropTypes from 'prop-types';
import { PureComponent } from 'react';
import styled from "styled-components";

import './CheckoutProgressBar.style';

const containerStyles = styled.div`
height: 20px;
width: 100%;
backgroundColor: "#e0e0de";
borderRadius: 50;
margin: 50;
`;
const fillerStyles = styled.div`
height: 100%;
    width: ${(props)=>props.completed}%;
    backgroundColor:${(props)=> props.bgcolor} ;
    borderRadius: inherit;
    textAlign: right;
`;

const labelStyles = styled.span`
padding: 5;
color: white;
fontWeight:bold;
`;

export class CheckoutProgressBar extends PureComponent {
    constructor(props) {
        super(props);
      }
    static propTypes = {
        // TODO: implement prop-types
    };

    render() {
        const { bgcolor, completed } = this.props;
        return (
           <containerStyles>
            <fillerStyles completed={completed} bgcolor={bgcolor}>
                <labelStyles>
                {`${completed}%`}
                </labelStyles>
            </fillerStyles>
           </containerStyles>
        );
    }
}

export default CheckoutProgressBar;
