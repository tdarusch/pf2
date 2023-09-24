import React, { useState } from "react";
import { Tabs, Tab, Box } from '@mui/material'
import { Link } from "react-router-dom";


const Header = (props) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (e, v) => {
    setTabValue(v);
  }

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
          <Tab label='blog' index={0}  component={Link} to={'/blog'} />
          <Tab label='contact' index={0}  component={Link} to={'/contact'} />
        </Tabs>
      </Box>
    </React.Fragment>
  );
};

export default Header;