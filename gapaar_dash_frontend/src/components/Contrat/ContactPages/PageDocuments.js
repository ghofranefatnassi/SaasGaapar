import React from 'react';
import "../contact.css";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import { styled } from '@mui/system';
import Directory from './Directory';

const directoryStructure = [
  { name: 'Documents 1' },
  { name: 'Documents 2' },
  { name: 'Documents 3' },
  { name: 'Documents 4' },
  {
    name: 'Documents 5',
    children: [
      { name: 'Documents 5 a' },
      { name: 'Documents 5 b' },
      { name: 'Documents 5 c' },
      { name: 'Documents 5 d' },
      { name: 'Documents 5 e' },
      { name: 'Documents 5 f' },
      { name: 'Documents 5 g' },
      { name: 'Documents 5 h' },
      { name: 'Documents 5 i' },
      { name: 'Documents 5 j' },
    ],
  },
  { name: 'Documents 6' },
];

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const PageDocuments = () => {
  return (
    <div className='maincont'>
      <div className='containerContact3'>
        <div className='NomContact'>Documents</div>
        <div className='endContainer'>
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<AddIcon />}
            className='btAjout'
          >
            Ajouter un document
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>
      <div className='containerContactDocument'>
        <RefreshIcon sx={{ color: "#7C858C" }} />
        <div className='Recherche'>
          <SearchIcon sx={{ color: "#7C858C" }} />
          <input type='text' placeholder='Recherche' style={{ backgroundColor: "#F0EEEE", height: "30px" }} />
        </div>
      
      <div className='directoryContainer'>
        {directoryStructure.map((dir, index) => (
          <Directory key={index} {...dir} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default PageDocuments;
