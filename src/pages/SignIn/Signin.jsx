import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from '../SignIn/Signin.style';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from "react-router-dom";
import {
  emailRegex,
  passwordRegex
} from '../../utils/utils';

const SignIn = () => {
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


  const isFormValid = () => {
    let ret = true;

    ret &= email.value !== "" && email.error === "";
    ret &= password.value !== "" && password.error === "";

    return ret;
  };

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

  const history = useHistory();
  const handleSubmit = () => {
    history.push('/home');
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.signincont}>
      <CssBaseline />
      {values.formAlertOpen && 
        <Alert
          severity={values.error.severity}
          onClose={onCloseAlertForm}
        >
          {values.error.title}
        </Alert>
      }
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StorefrontOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form}
          noValidate
          onSubmit={handleFormSubmit}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email.value}
            onChange={handleInputEmail}
            onBlur={handleInputEmail}
            {...(email.error !== "" && { error: true, helperText: email.error })}
          />
          <TextField
            variant="outlined"
            margin="normal"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;