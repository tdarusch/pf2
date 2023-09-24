import React from "react";
import { Tabs, Tab, Box } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Header = (props) => {
  const navigate = useNavigate();

  const handleChange = (e, v) => {
    if(v === 'home') {
      navigate('/');
    } else {
      navigate('/'.concat(v));
    }
  }

  return(
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          onChange={handleChange}
          centered
        >
          <Tab label='home' value='home'/>
          <Tab label='resume' value='resume'/>
          <Tab label='projects' value='projects'/>
          <Tab label='blog' value='blog'/>
          <Tab label='contact' value='contact'/>
        </Tabs>
      </Box>
    </React.Fragment>
  );
};

export default Header;