import * as React from 'react'
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/Navbar';
import '@material/web/button/filled-button.js';
import '@material/web/button/filled-tonal-button';

import Lzutf8Compressor from './lzutf8';
import LZ77Compressor from './lz77';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route , Link, useLocation} from "react-router-dom";
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import '@material/web/switch/switch.js'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import '@material/web/textfield/outlined-text-field'
import '@material/web/ripple/ripple';
import '@material/web/icon/icon'
import '@material/web/icon/internal/icon'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import '@material/web/list/list';
import '@material/web/list/list-item'
import '@material/web/chips/chip-set'
import '@material/web/chips/assist-chip'
import '@material/web/fab/fab'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; // Grid version 1
import logo from './logo.png';
import Typography from '@mui/material/Typography';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(231, 194, 108)',
      contrastText: 'rgb(63, 46, 0)',
    },
    secondary: {
      main: 'rgb(215, 197, 160)',
      contrastText: 'rgb(58, 47, 21)',
    },
    tertiary: {
      main: 'rgb(175, 207, 171)',
      contrastText: 'rgb(28, 54, 29)',
    },
    error: {
      main: 'rgb(255, 180, 171)',
      contrastText: 'rgb(105, 0, 5)',
    },
    background: {
      default: 'rgb(23, 19, 11)',
      paper: 'rgb(23, 19, 11)',
    },
    surface: {
      main: 'rgb(23, 19, 11)',
      variant: 'rgb(77, 70, 57)',
      dim: 'rgb(23, 19, 11)',
      bright: 'rgb(62, 57, 47)',
      container: 'rgb(35, 31, 23)',
      containerLow: 'rgb(31, 27, 19)',
      containerHigh: 'rgb(46, 41, 33)',
    },
    text: {
      primary: 'rgb(235, 225, 212)',
      secondary: 'rgb(208, 197, 180)',
      disabled: 'rgb(153, 144, 128)',
      hint: 'rgb(77, 70, 57)',
    },
  },
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
  },
});

const lightTheme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: 'rgb(118, 90, 11)',
      contrastText: 'rgb(255, 255, 255)',
    },
    secondary: {
      main: 'rgb(107, 93, 63)',
      contrastText: 'rgb(255, 255, 255)',
    },
    tertiary: {
      main: 'rgb(73, 101, 72)',
      contrastText: 'rgb(255, 255, 255)',
    },
    error: {
      main: 'rgb(186, 26, 26)',
      contrastText: 'rgb(255, 255, 255)',
    },
    background: {
      default: 'rgb(255, 248, 242)',
      paper: 'rgb(255, 248, 242)',
    },
    surface: {
      main: 'rgb(255, 248, 242)',
      variant: 'rgb(236, 225, 207)',
      dim: 'rgb(226, 217, 204)',
      bright: 'rgb(255, 248, 242)',
      container: 'rgb(246, 237, 223)',
      containerLow: 'rgb(252, 242, 229)',
      containerHigh: 'rgb(240, 231, 217)',
    },
    text: {
      primary: 'rgb(31, 27, 19)',
      secondary: 'rgb(77, 70, 57)',
      disabled: 'rgb(126, 118, 103)',
      hint: 'rgb(77, 70, 57)',
    },
  },
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
  },
});

const BreadcrumbItem = ({ to, label }) => (
  <Link to={to}>{label}</Link>
);

const generateBreadcrumbs = (pathnames) => {
  return pathnames.map((pathname, index) => {
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
    return <BreadcrumbItem key={to} to={to} label={pathname} />;
  });
};

function App() {
  const learn = React.useRef();
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);


function scrollToElement(element) {
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
  const [colorScheme, setColorScheme] = React.useState('light');
  const [theme, setTheme] = React.useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(()=>{
    if(colorScheme === 'light') {
      setTheme(lightTheme);
    }else {
      setTheme(darkTheme);
    }
  }, [colorScheme])
  React.useEffect(() => {
    // Check if the browser prefers dark color scheme
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to handle changes in color scheme
    const handleColorSchemeChange = (event) => {
      setIsDarkMode(event.matches);
    };

    // Add event listener for changes in color scheme
    darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);

    // Set initial color scheme
    setIsDarkMode(darkModeMediaQuery.matches);
    // Clean up event listener on component unmount
    return () => {
      darkModeMediaQuery.removeEventListener('change', handleColorSchemeChange);
    };
  }, []);
  React.useEffect(()=>{
    const dark = isDarkMode
    
    if(dark) {
      setColorScheme('dark');
    }else {
      setColorScheme('light')
    }
  }, [isDarkMode])
  
  const today = new Date();
  return (
    <ThemeProvider theme={theme}>
    
      <CssBaseline />
      
      <div className={ `App ${colorScheme}` }>
        <NavBar />
        <div className='app-main'>
          
        <div className='content'>
    <Routes >
        <Route index path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
          </Routes>
      <div className='footer'>
        <Box>
          <Card elevation={6}>
            <Grid container spacing={0}>
              <Grid xs={12} sm={3} >
                <div style={{width: '100%', height:'100%',display:'flex', justifyContent:'center',alignItems:'center', flexDirection:'column'}} >
              <div className='logo' style={{width: '100%', display:'flex', justifyContent:'center',alignItems:'center'}}>
                  <img src={logo} alt="Logo" className='img' />
                  <div className='logotext2'>
                      Labs
                  </div>
              </div>
              <div style={{paddingLeft: 15}}>
                by donotes
              </div>
              <p style={{fontSize: 'smaller'}}>&copy; {today.getFullYear()} DoNotes by Suleman Hussain</p>
              </div>
              </Grid>
              
              <Grid xs={12} sm={3} >
              <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Quick links</ListSubheader>}
    >
    <ListItemButton onClick={()=>{window.location.href = 'https://beta.donotes.app/'}}>
      <ListItemText primary="Octopus (v7.2) - Latest" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://v6.donotes.app/'}}>
      <ListItemText primary="Nexus (v6)" />
    </ListItemButton>
    
    <ListItemButton onClick={()=>{window.location.href = 'https://donotes.app/tools'}}>
      <ListItemText primary="Tools - by DoNotes" />
    </ListItemButton>
    </List>
              </Grid>
              <Grid xs={12} sm={3} >
                
              <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Legal</ListSubheader>}
    >
    <ListItemButton onClick={()=>{window.location.href = 'https://beta.donotes.app/terms'}}>
      <ListItemText primary="v7.2 Terms & Conditions" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://v6.donotes.app/privacy'}}>
      <ListItemText primary="v7.2 Privacy policy" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://v6.donotes.app/terms.php'}}>
      <ListItemText primary="v6 Terms & Conditions" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://v6.donotes.app/privacy.php'}}>
      <ListItemText primary="v6 Privacy policy" />
    </ListItemButton>
    </List>
              </Grid>
              <Grid xs={12} sm={3}>
                
              <List
      sx={{ width: '100%' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader>Fun & friends</ListSubheader>}
    >
    <ListItemButton onClick={()=>{window.location.href = 'https://medlinkdocs.org'}}>
      <ListItemText primary="MedLinkDocs" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://erekle.uk'}}>
      <ListItemText primary="Erekle.uk (Carball)" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://bytesofintelligence.co.uk/'}}>
      <ListItemText primary="Bytes of Intelligence" />
    </ListItemButton>
    <ListItemButton onClick={()=>{window.location.href = 'https://bitlearner.online/'}}>
      <ListItemText primary="BitLearner.online" />
    </ListItemButton>
    </List>
              </Grid>

            </Grid>
          </Card>
        </Box>
      </div>
        </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
