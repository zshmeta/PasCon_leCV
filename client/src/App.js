import React, { useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Resume from './components/Resume';

const App = () => {
    const [result, setResult] = useState('{}');
  return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home setResult={setResult} />} />
                <Route path='/resume' element={<Resume result={result} />} />
            </Routes>
        </BrowserRouter>
      </div>
    );
};
export default App;