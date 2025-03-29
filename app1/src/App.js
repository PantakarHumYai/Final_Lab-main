import './App.css';
import React, { Component } from 'react';
import MusicPlayer from './karaoke.js'; // เปลี่ยนชื่อตัวแปรจาก Karaoke เป็น MusicPlayer

function App() {
  return (
    <div>
      <MusicPlayer/>
      <div style={{ 
        position: 'fixed', 
        bottom: '10px', 
        width: '100%', 
        textAlign: 'center',
        fontSize: '14px',
        color: '#666'
      }}>
        Pantakarn Chuayrod 6603052411024
      </div>
    </div>
  );
}

export default App;
