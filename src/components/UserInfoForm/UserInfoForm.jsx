// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import { updateUserInfo } from '../../redux/checkoutFormSlice';
// import {
//     emailValidator,
//     validForm,
//     requiredField,
//     optionalField
// } from '../../utils/utils';


const UserInfoForm = ({ formUser, saveForm }) => {
    // const [formUser, setFormUser] = useState(formInfo);

    // const dispatch = useDispatch();

    const handleInputValue = (event) => {
        const { name, value } = event.target;
        let { msg: error } = formUser[name].validator(value);

        saveForm({
            ...formUser,
            [name]: {
                ...formUser[name],
                error,
                value
            }
        });
    };

    // const handleBlur = (ev) => {
    //     if (ev.target.value != null) {
    //         dispatch(updateUserInfo({ [ev.target.name]: ev.target.value }));
    //     }
    // }

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
                value={formUser.email.value}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                {...(formUser.email.error && { error: true, helperText: formUser.email.error })}
            />

            <Typography component="h1" variant="h5">
                Billing Address
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_first_name"
                        label="First name"
                        name="first_name"
                        value={formUser.first_name.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formUser.first_name.error && { error: true, helperText: formUser.first_name.error })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_last_name"
                        label="Last name"
                        name="last_name"
                        value={formUser.last_name.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formUser.last_name.error && { error: true, helperText: formUser.last_name.error })}
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
                        value={formUser.company.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formUser.company.error && { error: true, helperText: formUser.company.error })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_address"
                        label="Address"
                        name="address"
                        value={formUser.address.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formUser.address.error && { error: true, helperText: formUser.address.error })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_city"
                        label="City"
                        name="city"
                        value={formUser.city.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formUser.city.error && { error: true, helperText: formUser.city.error })}
                    />
                </Grid>
            </Grid>
        </div>
    )
};

export default UserInfoForm;
