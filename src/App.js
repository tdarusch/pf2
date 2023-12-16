import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing/Landing";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import StaticLanding from "./Pages/Landing/StaticLanding";
import PageTabs from "./Components/PageTabs/PageTabs";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Oswald'
  },
});

function App() {
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <PageTabs/>
          <Routes>
            <Route exact path='/' element={<Landing/>} />
            <Route exact path='/home' element={<StaticLanding/>} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  );
}

export default App;

