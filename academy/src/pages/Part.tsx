import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Container,
  Box,
  keyframes,
  Card,
  CardContent,
  useTheme,
  Paper,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";
import CasinoSharpIcon from "@mui/icons-material/CasinoSharp";
import TipsAndUpdatesSharpIcon from "@mui/icons-material/TipsAndUpdatesSharp";
import { useSnackbar } from "../SnackbarContext";

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

type PartData = {
  shops: string;
  shopping_list: string;
  answer: number;
};

const Part: React.FC = () => {
  const theme = useTheme();
  const [riddle, setRiddle] = useState<PartData | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);
  const { part } = useParams<{ part: string }>();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (part) {
      fetch(`http://127.0.0.1:8000/part${part}/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRiddle(data);
        })
        .catch((error) => {
          console.error("Error fetching the riddle data:", error);
        });
    }
  }, [part]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showSnackbar("Copied to clipboard!", "success");
    } catch (err) {
      showSnackbar("Failed to copy!", "error");
    }
  };

  const debounce = (func: Function, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setAnswer(value);
    }
  }, []);

  const debouncedHandleChange = useCallback(debounce(handleChange, 300), [
    handleChange,
  ]);

  if (!riddle) {
    return <Typography>Loading...</Typography>;
  }

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
          width: "100%",
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.6s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 2,
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Typography variant="h4">Riddle</Typography>
              </Grid>
              <Grid item>
                <CasinoSharpIcon
                  sx={{
                    transform: "scale(1.6)",
                    color: theme.palette.text.primary,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Paper
              sx={{
                width: "100%",
                padding: 2,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
              }}
            >
              {(part === "1"
                ? "    Find the lowest price you will pay for all the products on the shopping list assuming you\n    can buy infinite amount of products in every shop.\n \n    Shopping List eg:   \n    |----------------------|\n    |orange:1              |\n    |apple:2               |\n    |...                   |\n    |----------------------|\n \n    Meaning that Snakey has to buy one orange and two apples.\n \n    Shops Input eg:     \n    |-----------------------|\n    |#23                    |\n    |orange:50              |\n    |apple:15               |\n    |                       |\n    |#24                    |\n    |orange:25              |\n    |apple:35               |\n    |...                    |\n    |-----------------------|\n \n    Meaning that shop of index 23 has oranges that costs 25 each and apples costing 15 each.\n    And shop of index 24 has oranges that costs 50 each and apples costing 35 each.\n    So the answer (if these are only 2 shops) is 1 * 25 + 2 * 15 = 55\n                                                   ^        ^\n                                                 orange   apples\n \n    because apples are cheapest in store nr.23 and oranges in strore nr.24."
                : "    Find number of shops you'll need to visit to buy all the products on the shopping list. \n \n    So if shopping list is: \n    |----------------------|\n    |orange:1              |\n    |apple:2               |\n    |...                   |\n    |----------------------| \n \n    And shops are: \n \n    Shops Input eg:     \n    |-----------------------| \n    |#0                     |\n    |orange:25              |\n    |apple:90               |\n    |                       |\n    |#1                     |\n    |orange:50              |\n    |apple:35               |\n    |                       |\n    |#2                     |\n    |orange:105             |\n    |apple:110              |\n    |-----------------------|\n \n    The answer is 2 because you want to buy orange at shop nr.0 and apples at shop nr.1."
              )
                .split("\n")
                .map((line, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    align="left"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    {line}
                  </Typography>
                ))}
              <Typography
                color={"textSecondary"}
                variant="body1"
                align="left"
                sx={{ whiteSpace: "pre-wrap" }}
              >
                {"\n\n    ! Every shop has every product available !"}
              </Typography>
            </Paper>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "0.9s",
          animationFillMode: "forwards",
          opacity: 0,
          mt: 4,
        }}
      >
        <Card>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Typography variant="h4">Answer</Typography>
              </Grid>
              <Grid item>
                <TipsAndUpdatesSharpIcon
                  sx={{
                    transform: "scale(1.6)",
                    color: theme.palette.text.primary,
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <Paper
              sx={{
                width: "100%",
                padding: 2,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
              }}
            >
              <Grid container spacing={8} alignItems="center">
                <Grid item xs={5}>
                  <TextField
                    onChange={debouncedHandleChange}
                    label="Your answer"
                    type="number"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    onClick={() =>
                      answer === riddle.answer
                        ? showSnackbar("That's a good answer", "success")
                        : showSnackbar("That's not a good answer", "info")
                    }
                    variant="contained"
                    color="primary"
                    sx={{ transform: "scale(1.5)" }}
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          animation: `${fadeIn} 1s ease-out`,
          animationDelay: "1.2s",
          animationFillMode: "forwards",
          opacity: 0,
        }}
      >
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h4">Input: Shopping list</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton
                      onClick={() => handleCopy(riddle.shopping_list)}
                    >
                      <ContentCopySharpIcon
                        sx={{
                          color: theme.palette.primary.main,
                          transform: "scale(1.4)",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                <br />
                <Paper
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    overflowY: "auto",
                    padding: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                  }}
                >
                  {riddle.shopping_list.split("\n").map((line, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      align="left"
                      sx={{ whiteSpace: "pre-wrap" }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Paper>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h4">Input: Shops</Typography>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={() => handleCopy(riddle.shops)}>
                      <ContentCopySharpIcon
                        sx={{
                          color: theme.palette.primary.main,
                          transform: "scale(1.4)",
                        }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
                <br />
                <Paper
                  sx={{
                    width: "100%",
                    maxHeight: 300,
                    overflowY: "auto",
                    padding: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                  }}
                >
                  {riddle.shops.split("\n").map((line, index) => (
                    <Typography
                      key={index}
                      variant="body1"
                      align="left"
                      sx={{ whiteSpace: "pre-wrap" }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Paper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <br />
    </Container>
  );
};

export default Part;
