import React, { useState, useEffect } from "react";
import { CheckBoxOutlineBlankSharp, CheckBoxSharp } from "@mui/icons-material";
import {
  Typography,
  Container,
  Box,
  keyframes,
  Card,
  CardContent,
  Grid,
  IconButton,
  useTheme,
  Link,
} from "@mui/material";

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

const Riddle: React.FC = () => {
  const theme = useTheme();
  const [timeLeft, setTimeLeft] = useState(14 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        mt: 4,
      }}
    >
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.3s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Baazar Riddle
        </Typography>
      </Box>
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.6s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Snakey is going to Bazaar, to do some shopping. Every shop has the
          same products but different prices.
        </Typography>
      </Box>
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.9s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={2} sx={{ width: "100%", maxWidth: 800 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
                <Grid item xs={12} sm={6} md={4} key={value}>
                  <Link
                    href={value < 3 ? `/part/${value}` : "/riddle"}
                    underline="none"
                  >
                    <Box
                      sx={{
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: 2,
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        transition:
                          "transform 0.2s ease-in-out, border-color 0.2s ease-in-out",
                        "&:hover": {
                          borderColor: theme.palette.primary.main,
                          transform: value > 2 ? "none" : "scale(1.02)",
                        },
                        backgroundColor:
                          value > 2
                            ? theme.palette.action.disabledBackground
                            : "transparent",
                        color:
                          value > 2
                            ? theme.palette.text.disabled
                            : theme.palette.text.primary,
                        pointerEvents: value > 2 ? "none" : "auto",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.2rem",
                        }}
                      >
                        Part {value}
                      </Typography>
                      <IconButton disabled={value > 2}>
                        {value > 2 ? (
                          <CheckBoxOutlineBlankSharp
                            sx={{
                              transform: "scale(1.4)",
                            }}
                          />
                        ) : (
                          <CheckBoxSharp
                            sx={{
                              transform: "scale(1.4)",
                            }}
                          />
                        )}
                      </IconButton>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "1.2s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 4,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Next part available in:
        </Typography>
        <Typography variant="h4" gutterBottom color="textSecondary">
          {formatTime(timeLeft)}
        </Typography>
      </Box>
    </Container>
  );
};

export default Riddle;
