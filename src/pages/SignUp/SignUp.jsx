import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from './SignUp.style';
import { setToken, setUser } from "../../redux/authSlice";
import AuthService from '../../services/AuthService';
import { useDispatch } from "react-redux";
import { setLocalToken, setLocalUser } from "../../utils/utils";

import {
  usernameValidator,
  emailValidator,
  passwordValidator,
  validForm
} from '../../utils/utils';

const formInfo = {
  display_name: {
    id: "id_display_name",
    value: "",
    error: null,
    validator: usernameValidator
  },
  email: {
    id: "id_email",
    value: "",
    error: null,
    validator: emailValidator
  },
  password: {
    id: "id_password",
    value: "",
    error: null,
    validator: passwordValidator
  }
};

const alertInit = {
  formAlertOpen: false,
  error: {}
}

const SignUp = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(formInfo);
  const [alertInfo, setAlertInfo] = useState(alertInit);

  const onCloseAlertForm = () => {
    setAlertInfo({
      ...values,
      error: {
        severity: "warning",
        title: ""
      },
      formAlertOpen: false,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var severity = "success", title = "Redirecting...", showAlert = false;


    if (validForm(values)) {
      try {
        let token_data = await AuthService.signup({
          email: values.email.value,
          displayName: values.display_name.value,
          password: values.password.value,
        });

        let user_data = await AuthService.get_user({
          headers: {'x-auth-token': token_data.data.token },
        });
        
        if(token_data.data.token && user_data.data){
          dispatch(setToken(token_data.data.token));
          dispatch(setUser(user_data.data));
          setLocalToken(token_data.data.token);
          setLocalUser(user_data.data);
        }

        history.push('/');
      } catch (error) {
        if (error.response && error.response.status === 400
          && !error.response.data.success
          && error.response.data.message === "email already registered!") {
          severity = "warning";
          title = "This email has been registered already, please try again!";
        } else {
          severity = "error";
          title = "An error ocurred while logging in, please try again!";
        }
        showAlert = true;
      }
    } else {
      severity = "warning";
      title = "Check the data entered it might be not valid!";
      showAlert = true;
    }

    if (showAlert) {
      setAlertInfo({
        ...values,
        error: {
          severity,
          title,
        },
        formAlertOpen: true,
      });
    }
  };

  const handleInputValue = (event) => {
    const { name, value } = event.target;
    let { msg: error } = values[name].validator(value);

    setValues({
      ...values,
      [name]: {
        ...values[name],
        error,
        value
      }
    });
  };


  const handleBackHome = () => {
    history.push('/');
  }

  const handleSignInLink = () => {
    history.push('/login');
  }


  return (
    <Container component="main" maxWidth="xs" className={classes.signincont}>
      {alertInfo.formAlertOpen &&
        <Alert
          severity={alertInfo.error.severity}
          onClose={onCloseAlertForm}
        >
          {alertInfo.error.title}
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
                name="display_name"
                variant="outlined"
                required
                fullWidth
                id="id_display_name"
                label="Username"
                autoFocus
                value={values.display_name.value}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                {...(values.display_name.error && { error: true, helperText: values.display_name.error })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="id_email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={values.email.value}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                {...(values.email.error && { error: true, helperText: values.email.error })}
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
                id="id_password"
                autoComplete="current-password"
                value={values.password.value}
                onChange={handleInputValue}
                onBlur={handleInputValue}
                {...(values.password.error && { error: true, helperText: values.password.error })}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={handleSignInLink}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                onClick={handleBackHome}
              >
                Go back home
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default SignUp;
