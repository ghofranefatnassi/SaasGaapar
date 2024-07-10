import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Directory = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div onClick={toggleOpen} className="directory">
    {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
    <FolderIcon style={{ marginLeft: '5px', marginRight: '5px' }} />
    {name}
  </div>
      {isOpen && (
        <div className="children">
          {children && children.map((child, index) => (
            <Directory key={index} {...child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Directory;
