import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Tabs, Tab, Box, Typography, IconButton, Grid, Hidden } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';
import "@fontsource/oswald";
import FadeIn from "../FadeIn/FadeIn";
import TextButton from "../TextButton/TextButton";
import { titles } from "../../Assets/Titles";
import TypingText from "../TypingText/TypingText";


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
      case '/lab':
        setTabValue(2);
        break;
      case '/blog':
        setTabValue(3);
        break;
      case '/contact':
        setTabValue(4);
        break;
      case '/login':
        setTabValue(5);
        break;
      default:
        setTabValue(-1);
        break;
    }
  }, [location.pathname]);

  return(
    <Grid container>
      <Grid item xs={12} direction='row' justifyContent='center' alignItems='center'>
        <Hidden lgUp>
          <Box display='flex' justifyContent='center'>
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
              TabIndicatorProps={{
                style: {
                  display: location.pathname === '/' ? 'none' : 'inherit',
                  backgroundColor: '#FFF'
                }
              }}
              variant='scrollable'
              scrollButtons='auto'
            >
              <Tab disableRipple  sx={{margin: '0 10px'}} label={<Typography variant='body1' >resume</Typography>} index={0}  component={Link} to={'/resume'}/>
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >projects</Typography>} index={1}  component={Link} to={'/projects'}/>
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >lab</Typography>} index={2}  component={Link} to={'/lab'} />
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >blog</Typography>} index={3}  component={Link} to={'/blog'} />
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >contact</Typography>} index={4}  component={Link} to={'/contact'} />
              <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >login</Typography>} index={5}  component={Link} to={'/login'} />
            </Tabs>
          </Box>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={5}>
        <Hidden lgDown>
          <Box display='flex' justifyContent='center' mt={1}>
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
                  <Box display='flex' flexDirection='column' justifyContent='top' mr={1} ml={1} width={160}>
                    <TypingText text={titles} />
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
          </Box>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={7}>
        <Hidden lgDown>
          <Box display='flex' justifyContent='center'>
            <Box display='flex' flexDirection='column' justifyContent='center' marginTop={3}>
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
                TabIndicatorProps={{
                  style: {
                    display: location.pathname === '/' ? 'none' : 'inherit',
                    backgroundColor: '#FFF'
                  }
                }}
                variant="scrollable"
                scrollButtons="auto"
              >
                <Tab disableRipple  sx={{margin: '0 10px'}} label={<Typography variant='body1' >resume</Typography>} index={0}  component={Link} to={'/resume'}/>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >projects</Typography>} index={1}  component={Link} to={'/projects'}/>
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >lab</Typography>} index={2}  component={Link} to={'/lab'} />
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >blog</Typography>} index={3}  component={Link} to={'/blog'} />
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >contact</Typography>} index={4}  component={Link} to={'/contact'} />
                <Tab disableRipple sx={{margin: '0 10px'}} label={<Typography variant='body1' >login</Typography>} index={5}  component={Link} to={'/login'} />
              </Tabs>
            </Box>
          </Box>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default PageTabs;