import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Resume from "./Pages/Resume/Resume";
import Projects from "./Pages/Projects/Projects";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import PageTabs from "./Components/PageTabs/PageTabs";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [animated, setAnimated] = React.useState(false);
  return (
    ReactDOM.createRoot(document.getElementById('root')).render(
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Router>
          <PageTabs animated={animated} setAnimated={setAnimated}/>
          <Routes>
            <Route exact path='/' element={<Landing animated={animated}/>} />
            <Route exact path='/resume' element={<Resume />} />
            <Route exact path='/projects' element={<Projects />} />
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </Router>
      </ThemeProvider>
    )
  );
}

export default App;

