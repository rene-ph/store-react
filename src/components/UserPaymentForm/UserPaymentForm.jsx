import { useState } from 'react';
import InputMask from 'react-input-mask';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { useStyles } from "./UserPaymentForm.styles";
import { creditcarRegex } from '../../utils/utils';

const UserPaymentForm = () => {

    const initialFields = {
        card_number: {
            value: "",
            error: ""
        }
    }

    const classes = useStyles();
    const [fields, setFields] = useState(initialFields)

    const handleInputValue = (event) => {
        const { name, value } = event.target;

        if (name === "card_number") {
            let val = value.replaceAll("-", ""), error = "";
            
            error = val ? "" : "This field is required.";

            error = error === "" && val.match(creditcarRegex) ? "" : "Credit card number is not valid."

            setFields({
                ...fields,
                card_number:{
                    value: val,
                    error
                }
            });
        }
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
                        value={fields.card_number.value}
                        onChange={handleInputValue}
                    >
                        {() =>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="id_card_number"
                                label="Card number"
                                name="card_number"
                                autoFocus
                                {...(fields.card_number.error !== "" && { error: true, helperText: fields.card_number.error })}
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
                        autoFocus
                        type="text"
                        className={classes.uppercase}
                    />
                </Grid>
                <Grid item xs={6}>
                    <InputMask
                        mask="99/99"
                        maskChar={null}
                    >
                        {() =>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="id_expiration"
                                label="Expiration date (MM/YY)"
                                name="expiration"
                                autoFocus
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
                        autoFocus
                        inputProps={{
                            maxLength: 3,
                            minLength: 3
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserPaymentForm;
