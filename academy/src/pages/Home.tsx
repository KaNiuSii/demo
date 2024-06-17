import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Toolbar,
  IconButton,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { useSnackbar } from "../SnackbarContext";
import { useNavigate } from "react-router-dom";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home: React.FC = () => {
  const { showSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          textAlign: "center",
        }}
      >
        <Box>
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: "0.3s",
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to the Riddle App Page
            </Typography>
          </Box>
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: "0.6s",
              animationFillMode: "forwards",
              opacity: 0,
            }}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Probably I'm going to need a better name eventually
            </Typography>
          </Box>
          <Box
            sx={{
              animation: `${fadeIn} 1s ease-out`,
              animationDelay: "0.9s",
              animationFillMode: "forwards",
              opacity: 0,
              mt: 4,
            }}
          >
            <Button
              onClick={() => navigate("/riddles")}
              variant="contained"
              color="primary"
              sx={{ mx: 2 }}
            >
              Get Started
            </Button>
            <Button
              onClick={() => showSnackbar("Just solve some riddles!", "info")}
              variant="outlined"
              color="secondary"
              sx={{ mx: 2 }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
