import { Container } from "@material-ui/core";
import Grid  from "@material-ui/core/Grid";
import { useSelector } from 'react-redux';
import CustomizedStepper  from "../../components/CustomizedStepper";

const Checkout = () => {

    const user = useSelector((state) => state.storeCheckout.checkout.user)

    const handleCheckout = () => {
       console.log(user);
    }

    return (
        <Container maxWidth='lg'>
            <Grid container >
                <Grid item xs={12} lg={12}>
                    <CustomizedStepper checkout={handleCheckout}/> 
                </Grid>
            </Grid>
        </Container>
    )
}

export default Checkout;
