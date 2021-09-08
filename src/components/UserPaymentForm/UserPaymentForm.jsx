// import { useState } from 'react';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useStyles } from "./UserPaymentForm.styles";

const UserPaymentForm = ({ formPayment, saveForm }) => {

    // const initialFields = {
    //     card_number: {
    //         value: "",
    //         error: ""
    //     }
    // }

    const classes = useStyles();
    // const [fields, setFields] = useState(initialFields)

    const handleInputValue = (event) => {
        const { name, value } = event.target;
        let { msg: error } = formPayment[name].validator(value);

        saveForm({
            ...formPayment,
            [name]: {
                ...formPayment[name],
                error,
                value
            }
        });
    };

    return (
        <div>
            <Typography component="h1" variant="h5">
                Payment
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <InputMask
                        mask="9999-9999-9999-9999"
                        maskChar={null}
                        value={formPayment.card_number.value}
                        variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="id_card_number"
                                label="Card number"
                                name="card_number"
                                onChange={handleInputValue}
                                onBlur={handleInputValue}
                                {...(formPayment.card_number.error && { error: true, helperText: formPayment.card_number.error })}
                    >
                        {(inputProps) =>
                            <TextField
                                {...inputProps}
                                
                            />
                        }
                    </InputMask>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_name_on_card"
                        label="Name on card"
                        name="name_on_card"
                        required
                        type="text"
                        className={classes.uppercase}
                        value={formPayment.name_on_card.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formPayment.name_on_card.error && { error: true, helperText: formPayment.name_on_card.error })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputMask
                        mask="99/99"
                        maskChar={null}
                        value={formPayment.expiration.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        variant="outlined"
                                margin="normal"
                                fullWidth
                                id="id_expiration"
                                label="Expiration date (MM/YY)"
                                name="expiration"
                                required
                                {...(formPayment.expiration.error && { error: true, helperText: formPayment.expiration.error })}
                    >
                        {(inputProps) =>
                            <TextField
                                {...inputProps}
                                
                            />
                        }
                    </InputMask>
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="id_security_code"
                        label="Security code"
                        name="security_code"
                        required
                        inputProps={{
                            maxLength: 3,
                            minLength: 3
                        }}
                        value={formPayment.security_code.value}
                        onChange={handleInputValue}
                        onBlur={handleInputValue}
                        {...(formPayment.security_code.error && { error: true, helperText: formPayment.security_code.error })}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPaymentForm;
