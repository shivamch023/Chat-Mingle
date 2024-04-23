import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { CameraAlt } from "@mui/icons-material"; // Changed to correct icon
import { VisuallyHiddenInput } from "../Components/Styles/StyledComponent";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../Utils/validators";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const avatar = useFileHandler("single");

  const handleLogin =(e)=>{
    e.preventDefault();
  };

  const handleSignUp =(e)=>{
    e.preventDefault();

  };




  return (
   <div style={{
    backgroundImage:"linear-gradient(rgb(255 255 209),rgb(249 159 159))",
   }}>
     <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="User name"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                onSubmit={handleLogin}
              >
                Login
              </Button>
            </form>
            <Typography variant="body1">OR</Typography>
            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="text"
              onClick={toggleLogin}
            >
              Sign up instead
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h5">Signup</Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <Stack position="relative" width="10rem" margin="auto">
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />

                 

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "0",
                    right: "0",
                    color: "white",
                    bgcolor: "rgba(0,0,0,0.5)",
                    ":hover": {
                      bgcolor: "rgba(255,255,255,0.5)",
                      color: "black",
                    },
                  }}
                  component="label"
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                  </>
                </IconButton>
              </Stack>

              {avatar.error && (
                <Typography color="error" variant="caption">
                  {avatar.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="User name"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {username.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )}

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              {/* {password.error && (
                <Typography color="error" variant="caption">
                  {username.error}
                </Typography>
              )} */}

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                onSubmit={handleSignUp}
              >
               Signup
              </Button>
            </form>
            <Typography variant="body1">OR</Typography>
            <Button
              sx={{
                marginTop: "1rem",
              }}
              variant="text"
              onClick={toggleLogin}
            >
              Login up instead
            </Button>
          </>
        )}
      </Paper>
    </Container>
   </div>
  );
};

export default Login;
