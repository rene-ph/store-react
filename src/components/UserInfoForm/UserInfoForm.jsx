import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { updateUserInfo } from '../../redux/checkoutFormSlice';

const UserInfoForm = () => {

    const dispatch = useDispatch();

    const handleBlur = (ev) => {
        if (ev.target.value != null) {
            dispatch(updateUserInfo({ [ev.target.name]: ev.target.value }));
        }
    }   

    return (
        <div>
            <Typography component="h1" variant="h5">
                Contact Information
            </Typography>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="id_email"
                label="Email Address"
                name="email"
                onBlur={handleBlur}
                autoFocus
            />

            <Typography component="h1" variant="h5">
                Billing Address
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_first_name"
                        label="First name (optional)"
                        name="first_name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_last_name"
                        label="Last name"
                        name="last_name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_company"
                        label="Company (optional)"
                        name="company"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_address"
                        label="Address"
                        name="address"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_city"
                        label="City"
                        name="city"
                        autoFocus
                    />
                </Grid>
            </Grid>
        </div>
    )
};

export default UserInfoForm;
