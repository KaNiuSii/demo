import React, { useState } from "react";
import {
  Typography,
  Container,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  TextField,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Alert,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";

const Demo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [dropdownValue, setDropdownValue] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSnackbarClick = (
    message: string,
    severity: "success" | "error" | "warning" | "info"
  ) => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  const handleDropdownChange = (event: SelectChangeEvent<string>) => {
    setDropdownValue(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom color="textPrimary">
        Home Page
      </Typography>
      <Typography variant="body1" paragraph color="textPrimary">
        Welcome to the home page. This page is designed to test the various
        themes.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" color="textPrimary">
                Card Title
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is an example of a card component. It contains some sample
                text to illustrate the theme.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Learn More
              </Button>
              <Button size="small" variant="outlined" color="secondary">
                Secondary Action
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" component="div" color="textPrimary">
              Paper Component
            </Typography>
            <Typography variant="body1" color="textPrimary">
              This is an example of a paper component. It is used to demonstrate
              the theme's background and text colors.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <TextField
        label="Sample Input"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        color="primary"
      />

      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel>Sample Dropdown</InputLabel>
        <Select
          value={dropdownValue}
          onChange={handleDropdownChange}
          label="Sample Dropdown"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="10">Option 1</MenuItem>
          <MenuItem value="20">Option 2</MenuItem>
          <MenuItem value="30">Option 3</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        style={{ marginRight: "8px" }}
      >
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary">
        Secondary Button
      </Button>

      <Button variant="contained" color="error" style={{ marginRight: "8px" }}>
        Error Button
      </Button>
      <Button
        variant="contained"
        color="warning"
        style={{ marginRight: "8px" }}
      >
        Warning Button
      </Button>
      <Button variant="contained" color="info" style={{ marginRight: "8px" }}>
        Info Button
      </Button>
      <Button
        variant="contained"
        color="success"
        style={{ marginRight: "8px" }}
      >
        Success Button
      </Button>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginTop: "16px" }}
      >
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Use MUI's Dialog"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is a simple dialog to demonstrate the theme's dialog styling.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Button
        variant="contained"
        color="success"
        onClick={() =>
          handleSnackbarClick("This is a success message!", "success")
        }
        style={{ marginTop: "16px", marginRight: "8px" }}
      >
        Success Snackbar
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() =>
          handleSnackbarClick("This is an error message!", "error")
        }
        style={{ marginTop: "16px", marginRight: "8px" }}
      >
        Error Snackbar
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() =>
          handleSnackbarClick("This is a warning message!", "warning")
        }
        style={{ marginTop: "16px", marginRight: "8px" }}
      >
        Warning Snackbar
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => handleSnackbarClick("This is an info message!", "info")}
        style={{ marginTop: "16px" }}
      >
        Info Snackbar
      </Button>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            snackbar.severity as "success" | "error" | "warning" | "info"
          }
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Demo;
