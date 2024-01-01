import { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div>
        <h1 style={{ padding: 15 }}>Free online tools</h1>
      </div>
        
      <Box sx={{ display: 'flex', alignItems: 'flex-end' ,gap: 1, marginBottom: 3 }}>
        <SearchIcon />
        <TextField id="input-with-sx" label="Search tools..." variant="standard" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
      </Box>

      <div style={{
        width: '65%',
        minWidth: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
        flexWrap: 'wrap',
        gap: 10,
      }}>

        {filteredTools.map(tool => (
          <Link key={tool.id} to={tool.id === 1 ? "#" : tool.id === 2 ? "lzutf8" : "lz77"} className='btn'>
            {tool.name}
            <md-ripple></md-ripple>
          </Link>
        ))}
      </div>
    </>
  );
}
