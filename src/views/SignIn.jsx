import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import signIn from '../api/users/signIn';
import { save } from 'react-cookies';
import Cookies from 'js-cookie';
import { toast, ToastContainer } from 'react-toastify';

function Copyright(props) {
  const navigate = useNavigate();
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" onClick={()=>{navigate('/')}}>
        Course Container
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn({loggedIn,setLoggedIn}) {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const loadingid = toast.loading("Please wait...");
    const data = new FormData(event.currentTarget);
      const email=data.get('email')
      const password=data.get('password')
      try{
        const response = await signIn({email,password})
        if(response.message==="Success"){
          if(Cookies.get("user_details")){
            Cookies.remove("user_details");
          }
          save('user_details', response.cookie, { secure: true, sameSite: 'Strict' });
        // const convertedAccessToken = Cookies.get('access_token');
        // console.log(convertedAccessToken);
        toast.update(loadingid, {
          render: "Logged in",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        setTimeout(()=>{
          navigate("/");
        }, 2000)  
        }else if(response.message === "Unauthorized"){
          toast.update(loadingid, {
            render: "Invalid email or password",
            type: toast.TYPE.WARNING,
            autoClose: 2000,
            isLoading: false,
          });
        }else{
          toast.update(loadingid,{
            render : "Error Please try again later",
            type : toast.TYPE.ERROR,
            autoClose: 3000,
            isLoading: false,
          })
        }
      

      }catch(err){
        console.error(err);
      }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={()=>{navigate('/signup')}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
}