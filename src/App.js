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

import dn from './dark.png';
import dnw from './light.png';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(185, 195, 255)',
      contrastText: 'rgb(32, 44, 97)',
    },
    secondary: {
      main: 'rgb(195, 197, 221)',
      contrastText: 'rgb(44, 47, 66)',
    },
    tertiary: {
      main: 'rgb(229, 186, 217)',
      contrastText: 'rgb(68, 38, 62)',
    },
    error: {
      main: 'rgb(255, 180, 171)',
      contrastText: 'rgb(105, 0, 5)',
    },
    background: {
      default: 'rgb(18, 19, 24)',
      paper: 'rgb(18, 19, 24)',
    },
    surface: {
      main: 'rgb(18, 19, 24)',
      variant: 'rgb(69, 70, 79)',
      dim: 'rgb(18, 19, 24)',
      bright: 'rgb(56, 57, 63)',
      container: 'rgb(31, 31, 37)',
      containerLow: 'rgb(27, 27, 33)',
      containerHigh: 'rgb(41, 42, 47)',
    },
    text: {
      primary: 'rgb(227, 225, 233)',
      secondary: 'rgb(198, 197, 208)',
      disabled: 'rgb(144, 144, 154)',
      hint: 'rgb(69, 70, 79)',
    },
  },
  typography: {
    fontFamily: 'Comfortaa, sans-serif',
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgb(80, 91, 146)',
      contrastText: 'rgb(255, 255, 255)',
    },
    secondary: {
      main: 'rgb(90, 93, 114)',
      contrastText: 'rgb(255, 255, 255)',
    },
    tertiary: {
      main: 'rgb(118, 84, 110)',
      contrastText: 'rgb(255, 255, 255)',
    },
    error: {
      main: 'rgb(186, 26, 26)',
      contrastText: 'rgb(255, 255, 255)',
    },
    background: {
      default: 'rgb(251, 248, 255)',
      paper: 'rgb(251, 248, 255)',
    },
    surface: {
      main: 'rgb(251, 248, 255)',
      variant: 'rgb(226, 225, 236)',
      dim: 'rgb(219, 217, 224)',
      bright: 'rgb(251, 248, 255)',
      container: 'rgb(239, 237, 244)',
      containerLow: 'rgb(245, 242, 250)',
      containerHigh: 'rgb(233, 231, 239)',
    },
    text: {
      primary: 'rgb(27, 27, 33)',
      secondary: 'rgb(69, 70, 79)',
      disabled: 'rgb(118, 118, 128)',
      hint: 'rgb(118, 118, 128)',
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
  const [dni, setDni] = React.useState(dn);
  const [theme, setTheme] = React.useState(lightTheme);
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  React.useEffect(()=>{
    if(colorScheme === 'light') {
      setTheme(lightTheme);
      setDni(dnw);
    }else {
      setTheme(darkTheme);
      setDni(dn)
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
        <Breadcrumbs aria-label="breadcrumb" sx={{paddingTop: 5}}>
          
  <a href='https://donotes.app'>donotes.app</a>
  <Link to='/'>tools</Link>
      {pathnames.length > 0 && (
        generateBreadcrumbs(pathnames)
      ) }
      
    </Breadcrumbs>
    <Routes >
        <Route index path="/" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
          <Route path="/lzutf8"  element={<Lzutf8Compressor />}/>
          <Route path="/lz77"  element={<LZ77Compressor />}/>
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
                      Tools
                  </div>
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
