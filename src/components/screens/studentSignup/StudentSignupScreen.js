import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import './studentsignup.css';
const customTheme = createTheme({
  palette:{
    dark:"#222"
  }
})

export default function StudentSignupScreen() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
  return (
    <div style={{width:"100vw",height:"100%",backgroundColor:"#222",color:"#222"}}>
      <ThemeProvider theme={customTheme}>
     <Container  component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop:"2rem"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Student Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} validate={true} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="usn"
                  required
                  fullWidth
                  id="usn"
                  label="USN"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="sem"
                  label="Semester"
                  name="sem"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="Password"
                  type="password"
                  id="password1"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  type="password"
                  id="password2"
                  color="secondary"
                  style={{backgroundColor:"#fff",borderRadius:"10px"}}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{backgroundColor:"rgb(107, 13, 107)",color:"#fff"}}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link className='link' to={"/student"}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    </div>
  )
}
