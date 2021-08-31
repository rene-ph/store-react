import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from '../components/styles-components/useStyles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';

const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/gm;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/g;
const displayNameRegex = /^[a-zA-Z0-9]{3,15}$/g;


const SignUp = () => {
  const classes = useStyles();

  const initialFormValues = {
    email: "",
    password: "",
    formSubmitted: false,
    success: false,
    error: "",
    formAlertOpen: false,
  };

  const field = {
    value: "",
    error: ""
  }

  const [values, setValues] = useState(initialFormValues);
  const [email, setEmail] = useState(Object.assign({}, field));
  const [password, setPassword] = useState(Object.assign({}, field));
  const [display, setDisplay] = useState(Object.assign({}, field));

  const handleInputPassword = (event) => {
    const value = event.target.value;

    let error = "";

    error = value ? "" : "This field is required.";

    error = error === "" && value.match(passwordRegex) ? "" : "Please use more than 4 character password requiring numbers and both lowercase and uppercase letters."

    setPassword({
      value,
      error
    });
  };

  const handleInputEmail = (event) => {
    const value = event.target.value;

    let error = "";

    error = value ? "" : "This field is required.";

    error = error === "" && value.match(emailRegex) ? "" : "Email address is not valid."
    
    setEmail({
      value,
      error
    });
  };

  const handleInputDisplay = (event) => {
    const value = event.target.value;

    let error = "";

    error = value ? "" : "This field is required.";

    error = error === "" && value.match(displayNameRegex) ? "" : "Username not valid. Use alphanumeric values up to 15 characters."
    
    setDisplay({
      value,
      error
    });
  };


  const isFormValid = () => {
    let ret = true;

    ret &= email.value !== "" && email.error === "";
    ret &= password.value !== "" && password.error === "";
    ret &= display.value !== "" && display.error === "";

    return ret;
  };

  const onCloseAlertForm = () => {
    setValues({
      ...values,
      error: {
        severity: "warning",
        title: ""
      },
      formAlertOpen: false,
    });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      setValues({
        ...values,
        error: {
          severity: "success",
          title: "Trying to post... cooming soon!"
        },
        formAlertOpen: true,
      });
    } else {
      
      setValues({
        ...values,
        error: {
          severity: "warning",
          title: "Check the data entered it might be not valid!"
        },
        formAlertOpen: true,
      });
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.signincont}>
    {values.formAlertOpen && 
        <Alert
          severity={values.error.severity}
          onClose={onCloseAlertForm}
        >
          {values.error.title}
        </Alert>
      }
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StorefrontOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form}
          noValidate
          onSubmit={handleFormSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="dName"
                name="displayName"
                variant="outlined"
                required
                fullWidth
                id="displayName"
                label="Username"
                autoFocus
                onChange={handleInputDisplay}
                onBlur={handleInputDisplay}
                {...(display.error !== "" && { error: true, helperText: display.error })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputEmail}
                onBlur={handleInputEmail}
                {...(email.error !== "" && { error: true, helperText: email.error })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password.value}
                onChange={handleInputPassword}
                onBlur={handleInputPassword}
                {...(password.error !== "" && { error: true, helperText: password.error })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;