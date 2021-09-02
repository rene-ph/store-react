import React from 'react';
import Container from '@material-ui/core/Container';
// import useStyles from './CartInfo.styles';
import CustomizedStepper from '../CustomizedStepper';

const CartInfo = (props) => {
    // const classes = useStyles(props);

    return (
        <Container fixed>
            <CustomizedStepper />
        </Container>
    );
};

export default CartInfo;
