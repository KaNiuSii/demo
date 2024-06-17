import React from 'react';
import { Container, Typography, Box, Avatar, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';

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

const Profile: React.FC = () => {

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box>
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
            opacity: 0,
          }}
        >
          <Avatar
            alt="Profile Picture"
            src="https://via.placeholder.com/150"
            sx={{ width: 150, height: 150, margin: 'auto', mb: 2 }}
          />
          <Typography variant="h4" gutterBottom>
            Profile Page
          </Typography>
        </Box>
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: '0.6s',
            animationFillMode: 'forwards',
            opacity: 0,
          }}
        >
          <Typography variant="body1" gutterBottom>
            Get in touch with profile through this page.
          </Typography>
        </Box>
        <Box
          sx={{
            animation: `${fadeIn} 1s ease-out`,
            animationDelay: '0.9s',
            animationFillMode: 'forwards',
            opacity: 0,
            mt: 4,
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Bio</Typography>
              <Typography variant="body2">
                This is the profile bio. It can include information about the person, their interests, and background.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Contact Information</Typography>
              <Typography variant="body2">
                Email: example@example.com
                <br />
                Phone: +123 456 7890
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
