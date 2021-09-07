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
import useStyles from './Signin.style';
import AuthService from '../../services/AuthService';
import { setToken, setUser } from "../../redux/authSlice";
import {
  emailValidator,
  passwordValidator,
  validForm,
  setLocalUser,
  setLocalToken
} from '../../utils/utils';

const formInfo = {
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

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [values, setValues] = useState(formInfo);
  const [alertInfo, setAlertInfo] = useState(alertInit);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var severity = "success", title = "Redirecting...", showAlert = false;

    if (validForm(values)) {
      try {
        let token_data = await AuthService.login({
          email: values.email.value,
          password: values.password.value
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
    setAlertInfo({
      ...values,
      error: {
        severity: "warning",
        title: ""
      },
      formAlertOpen: false,
    });
  }

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

  return (
    <Container component="main" maxWidth="xs" className={classes.signincont}>
      <CssBaseline />
      {alertInfo.formAlertOpen &&
        <Alert
          severity={alertInfo.error.severity}
          onClose={onCloseAlertForm}
        >
          {alertInfo.error.title}
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
            value={values.email.value}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            {...(values.email.error && { error: true, helperText: values.email.error })}
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
            value={values.password.value}
            onChange={handleInputValue}
            onBlur={handleInputValue}
            {...(values.password.error && { error: true, helperText: values.password.error })}
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