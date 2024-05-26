import React from 'react';
import 'reactflow/dist/base.css';
import AppLayout from './pages/AppLayout';

const App: React.FC = () => {

  return (
    <div className='h-screen bg-[#FAFAFA]'>
      <AppLayout />
    </div>
  );
};

export default App;
