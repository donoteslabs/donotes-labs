import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import pic1 from "../Components/pic1.webp"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {    const navigate = useNavigate();

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
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 15,
      paddingTop: 75,
      paddingBottom: 75,
      gap: 20,
    }}>
      <Card sx={{
        padding: 2,
        borderRadius: 5,
        display: 'flex',
        maxWidth: '40%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      elevation={2}>
        <div>
        <h1>Crafting Excellence: Affordable Web Solutions</h1>
        <h3>Elevate Your Online Presence with High-Quality, Budget-Friendly Website Development</h3>
        <md-filled-tonal-button  onClick={()=>{navigate('enquire')}}>Begin Journey</md-filled-tonal-button>
        </div>
      </Card>
      <img src={pic1} alt="Pic 1" style={{height: 350, borderRadius: 15, boxShadow: '0 0 30px 5px #0003'}}/></div>
    </>
  );
}
