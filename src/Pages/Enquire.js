import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import pic1 from "../Components/pic1.webp"
import Grid from '@mui/material/Grid'; // Grid version 1
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
export default function Enquire() {    const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');

  const tools = [
    { id: 1, name: 'Invoice creator' },
    { id: 2, name: 'lzutf8 Compression/Decompression' },
    { id: 3, name: 'lz77 Compression/Decompression' },
    // Add more tools as needed
  ];

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Card sx={{
        padding: 2,
        borderRadius: 5,
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      elevation={2}>
        <h1>Enquire</h1>
        <Grid container spacing={2} sx={{justifyContent: 'center', width: '100%'}}>
            <Grid xs={10} sm={5} sx={{margin: 1,}}>
            <TextField id="outlined-basic" label="Full name" variant="outlined" style={{width: '100%'}} />
            </Grid>
            <Grid xs={10} sm={5} sx={{margin: 1,}}>
            <TextField id="outlined-basic" label="E-mail address" variant="outlined" style={{width: '100%'}}/>
            </Grid>
            <Grid xs={10} sm={10.2} sx={{margin: 1,}}>
            <TextField id="outlined-basic" label="Message" variant="outlined" style={{width: '100%'}}
            multiline
            minRows={4}/>
            </Grid>

        </Grid>
      </Card>
    </>
  );
}
