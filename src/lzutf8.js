import React, { useState } from 'react';
import '@material/web/textfield/outlined-text-field';
import '@material/web/button/outlined-button'
import TextField from '@mui/material/TextField';

import { compress, decompress } from 'lzutf8';

const Lzutf8Compressor = () => {
  const [originalText, setOriginalText] = useState('');
  const [output, setOutput] = useState('');

  function encryptMsg() {
    setOriginalText( compress(originalText, { outputEncoding: 'StorageBinaryString' }));
    
  }
  
      function decryptMsg() {
        setOriginalText( decompress(originalText, { inputEncoding: 'StorageBinaryString' }));
        
      }
  const handleCompress = () => {
    const compressed = compress(originalText);
    setOutput(compressed);
  };

  const handleDecompress = () => {
    const decompressed = decompress(originalText);
    setOutput(decompressed);
  };

  return (
    <div style={{display: 'flex', flexDirection:'column', gap: 10, justifyContent: 'center', alignItems: 'center'}}>
      <h1>lzutf8 Compressor and Decompressor</h1>
      
      <div style={{display: 'flex', gap: 10, margin: 15,}}>

      <md-outlined-button onClick={encryptMsg}>Compress</md-outlined-button>
      <md-outlined-button onClick={decryptMsg}>Decompress</md-outlined-button>
      </div>
      <TextField
          sx={{
            width: '100%',
            minHeight: 200,
          }}
          id="outlined-multiline-flexible"
          label="Enter text"
          multiline
          value={originalText}
          onChange={(e)=>{setOriginalText(e.target.value)}}
        />
    </div>
  );
};

export default Lzutf8Compressor;
