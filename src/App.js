import {
  Box,
  Card,
  Typography,
  Button,
  CardContent,
  CardActions,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import {useState} from 'react';



function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ width: "500px" }}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h5" textAlign="center" gutterBottom>
            Login Page
          </Typography>
          <Box mb={2}>
            <TextField
              id="input-with-icon-textfield"
              label="Email"
              size="small"
              // fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </Box>

          <TextField
            id="input-with-icon-textfield"
            label="Password"
            size="small"
            // fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </Box>
        <CardActions sx={{display: "flex", justifyContent: "center"}}>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default App;
