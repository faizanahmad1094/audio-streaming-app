import React from 'react';
import './App.css';
function App() {
    return (
        <div className="App">
            <header className="App-header">
            <audio controls muted>
                <source src="http://localhost:4000/audio" type="audio/mp3"></source>
            </audio>
            </header>
        </div>
    );
}
export default App;