import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Avatar from '@material-ui/core/Avatar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { emailRegex, passwordRegex } from '../../utils/utils';
import useStyles from './Signin.style';
import AuthService from '../../services/AuthService';
import { setToken } from "../../redux/authSlice";
import { setLogin } from "../../utils/utils";

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

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
  const [email, setEmail] = useState(field);
  const [password, setPassword] = useState(field);

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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var severity = "success", title = "Redirecting...", showAlert = false;


    if (isFormValid()) {
      try {
        let data = await AuthService.login({
          email: email.value,
          password: password.value
        });

        dispatch(setToken(data.data.token));

        setLogin(data.data.token);

        history.push('/');
      } catch (error) {
        if (error.response && error.response.status === 400
          && !error.response.data.success
          && error.response.data.message === "invalid credentials!") {
          severity = "warning";
          title = "The credentials used are not valid!";
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
      setValues({
        ...values,
        error: {
          severity,
          title,
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



  const handleBackHome = () => {
    history.push('/');
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
            onClick={handleFormSubmit}
          >
            Sign In
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={handleBackHome}
          >
            Go back home
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;