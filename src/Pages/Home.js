import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import pic1 from "../Components/pic1.webp"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
export default function Home() {
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
      margin: 15,
      paddingTop: 75,
      paddingBottom: 75,
      gap: 20,
    }}>
      <Card sx={{
        padding: 2,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div>
        <h1>Website development agency</h1>
        <h2>High quality, low budget</h2>
        <md-filled-button>Learn more...</md-filled-button>
        </div>
      </Card>
      <img src={pic1} alt="Pic 1" style={{height: 350, borderRadius: 15, boxShadow: '0 0 30px 30px #0003'}}/></div>
    </>
  );
}
