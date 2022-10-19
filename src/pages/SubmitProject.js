import React from 'react';
import EditorSide from '../components/EditorSide';
import SideBar from '../components/SideBar';

const SubmitProject = () => {
  return (
    <div style={{display: 'flex', height: "100vh"}} >
      <SideBar />
      <EditorSide />
    </div>
  )
}

export default SubmitProject