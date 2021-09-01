import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const UserPaymentForm = () => {;
    return (
        <div>
             <Typography component="h1" variant="h5">
                Payment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_card_number"
                        label="Card number"
                        name="card_number"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_name_on_card"
                        label="Name on card"
                        name="name_on_card"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_expiration"
                        label="Expiration date (MM/YY)"
                        name="expiration"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_security_code"
                        label="Security code"
                        name="security_code"
                        autoFocus
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPaymentForm;
