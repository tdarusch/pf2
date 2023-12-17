import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Tabs, Tab, Box, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import "@fontsource/oswald";
import FadeIn from "../FadeIn/FadeIn";
import TextButton from "../TextButton/TextButton";


const PageTabs = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e, v) => {
    setTabValue(v);
  }

  const routeHome = () => {
    navigate('home');
    setTabValue(-1);
  }

  useEffect(() => {
    switch(location.pathname) {
      case '/resume':
        setTabValue(0);
        break;
      case '/projects':
        setTabValue(1);
        break;
      case '/blog':
        setTabValue(2);
        break;
      case '/contact':
        setTabValue(3);
        break;
      case '/login':
        setTabValue(4);
        break;
      default:
        setTabValue(-1);
        break;
    }
  }, [location.pathname]);

  return(
    <React.Fragment>
      <Box display='flex' justifyContent='center' my={5} width='100vw'>
        <Box display='flex' justifyContent='space-between' width='90vw' minWidth={800}>
          <Box width={400} display='flex' flexDirection='column'>
            <FadeIn in timeout={{ enter: 500 }} delay={100}>
              <Box display='flex' justifyContent='center' mt={0} mb={1}>
                <TextButton 
                  fontSize={35}
                  text='T. Daniel Aleksi Rusch'
                  onClick={routeHome}
                />
              </Box>
            </FadeIn>
            <Box display='flex' justifyContent='center' >
              <FadeIn in timeout={{ enter: 500 }} delay={250}>
                <Box display='flex' flexDirection='column' justifyContent='center' mr={2} ml={1}>
                  <Typography sx={{userSelect: 'none'}} variant='body1'>Software Engineer</Typography>
                </Box>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={300}>
                <IconButton size='medium'component={Link} to="https://github.com/tdarusch" target="_blank">
                  <GitHubIcon/>
                </IconButton>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={400}>
                <IconButton size='medium' component={Link} to="https://www.linkedin.com/in/tommy-rusch-4030901b0/" target="_blank">
                  <LinkedInIcon/>
                </IconButton>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={500}>
                <IconButton size='medium' component={Link} to="" target="_blank">
                  <DescriptionIcon/>
                </IconButton>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={600}>
                <IconButton size='medium' component={Link} to="mailto:trusch@augusta.edu">
                  <EmailIcon/>
                </IconButton>
              </FadeIn>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' justifyContent='center' >
            <Tabs
              value={tabValue}
              onChange={handleChange}
              sx={{
                height: '35px', 
                marginRight: '10px',
                '&..MuiTabs-indicator:hover': {
                  borderBottom: 2
                }
              }}
              width='500px'
              TabIndicatorProps={{
                style: {
                  display: location.pathname === '/' ? 'none' : 'inherit',
                  backgroundColor: '#FFF'
                }
              }}
            >
              <FadeIn in timeout={{ enter: 500 }} delay={700}>
                <Tab disableRipple  sx={{margin: '0 10px'}} label={<Typography variant='body1' >resume</Typography>} index={0}  component={Link} to={'/resume'}/>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={800}>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >projects</Typography>} index={1}  component={Link} to={'/projects'}/>
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={900}>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >blog</Typography>} index={2}  component={Link} to={'/blog'} />
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={1000}>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >contact</Typography>} index={3}  component={Link} to={'/contact'} />
              </FadeIn>
              <FadeIn in timeout={{ enter: 500 }} delay={1100}>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >login</Typography>} index={4}  component={Link} to={'/login'} />
              </FadeIn>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PageTabs;