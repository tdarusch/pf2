import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Resume from "./Components/Resume/Resume";
import Header from "./Components/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/resume' element={<Resume />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  );
}

export default App;

