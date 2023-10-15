import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Tabs, Tab, Box, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import "@fontsource/oswald";


const PageTabs = (props) => {
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
      <Box display='flex' justifyContent='right' pr={75} my={5} minWidth={1600}>
        <Box display='flex' justifyContent='space-between' width={1600} minWidth={1600}>
          <Box width={750}>
            <Typography textAlign='center' fontFamily={'Oswald'} sx={{userSelect: 'none'}} fontSize={65}>T. Daniel Aleksi Rusch</Typography>
            <Typography textAlign='center' mr={30} fontFamily={'Oswald'} sx={{userSelect: 'none'}} fontSize={20}>Full Stack Software Engineer</Typography>
            <Box display='flex' justifyContent='center' mr={30} >
              <IconButton size='medium' sx={{margin: '0 5px'}} component={Link} to="https://github.com/tdarusch">
                <GitHubIcon/>
              </IconButton>
              <IconButton size='medium' sx={{margin: '0 5px'}} component={Link} to="https://www.linkedin.com/in/tommy-rusch-4030901b0/">
                <LinkedInIcon/>
              </IconButton>
              <IconButton size='medium' sx={{margin: '0 5px'}} component={Link} to="">
                <DescriptionIcon/>
              </IconButton>
              <IconButton size='medium' sx={{margin: '0 5px'}} component={Link} to="mailto:trusch@augusta.edu">
                <EmailIcon/>
              </IconButton>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' justifyContent='center' >
            <Tabs
              value={tabValue}
              onChange={handleChange}
              sx={{height: '35px'}}
              width='500px'
            >
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='h6' fontFamily='Oswald'>home</Typography>} index={0}  component={Link} to={'/'}/>
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='h6' fontFamily='Oswald'>resume</Typography>} index={1}  component={Link} to={'/resume'}/>
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='h6' fontFamily='Oswald'>projects</Typography>} index={2}  component={Link} to={'/projects'}/>
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='h6' fontFamily='Oswald'>blog</Typography>} index={3}  component={Link} to={'/blog'} />
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='h6' fontFamily='Oswald'>contact</Typography>} index={4}  component={Link} to={'/contact'} />
            </Tabs>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PageTabs;