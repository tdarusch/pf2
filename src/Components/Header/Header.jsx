import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, Tab, Box } from '@mui/material'
import { Link } from "react-router-dom";


const Header = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();

  const handleChange = (e, v) => {
    setTabValue(v);
  }

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setTabValue(0);
        break;
      case '/resume':
        setTabValue(1);
        break;
      case '/projects':
        setTabValue(2);
        break;
      case '/blog':
        setTabValue(3);
        break;
      case '/contact':
        setTabValue(4);
        break;
      default:
        setTabValue(0);
        break;
    }
  }, [location.pathname])

  return(
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          centered
        >
          <Tab label='home' index={0}  component={Link} to={'/'}/>
          <Tab label='resume' index={1}  component={Link} to={'/resume'}/>
          <Tab label='projects' index={2}  component={Link} to={'/projects'}/>
          <Tab label='blog' index={3}  component={Link} to={'/blog'} />
          <Tab label='contact' index={4}  component={Link} to={'/contact'} />
        </Tabs>
      </Box>
    </React.Fragment>
  );
};

export default Header;