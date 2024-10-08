import "./App.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Layout from "./components/Layout";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{mt: '.5rem'}}>
      {"Copyright © "}
      <Link color="inherit" href="https://linkedin.com/in/banksnick" >
        Nick Banks
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Layout />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;
