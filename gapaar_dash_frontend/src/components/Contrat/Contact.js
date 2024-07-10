import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import Button2 from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const Contact = () => {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: '100%' }} bgcolor="#F2F2F2">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Personnes" {...a11yProps(0)} />
                    <Tab label="Entreprise" {...a11yProps(1)} />
                    <Tab label="xxxxx" {...a11yProps(2)} />
                    <Tab label="xxxxx" {...a11yProps(3)} />
                    <Tab label="xxxxxx" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
            <Button variant="primary" style={{borderRadius: "20px"}}  onClick={()=>navigate('/Contacts/profile')}>Nouvelle personne</Button>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div style={{backgroundColor: "#fff", width: "300px", height: '30px', display: 'flex', alignItems: "center", color: '#7C858C', borderRadius: '20px', padding: '8px', marginRight: '10px'}}>
                <SearchIcon />
                <input type='text' style={{backgroundColor: "#fff", height: '30px', border: 'none', outline: 'none'}} placeholder='Recherche'/>
              </div>
              <div style={{position: "relative"}}>
                <Button2  
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} 
                  style={{color: "#7C858C"}}
                >
                  <FilterListIcon style={{color: "#7C858C"}}/>
                  Filter
                </Button2>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}>Filter1</MenuItem>
                  <MenuItem onClick={handleClose}>Filter2</MenuItem>
                  <MenuItem onClick={handleClose}>Filter3</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
          <TableContainer component={Paper} style={{marginTop:"20px",padding:'10px'}}>
          <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell  style={{color:"#7C858C"}}>Cathégorie <UnfoldMoreIcon fontSize="small"/></TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Nom <UnfoldMoreIcon fontSize="small"/></TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Date d'acquisition <UnfoldMoreIcon fontSize="small"/></TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Conseiller <UnfoldMoreIcon fontSize="small"/></TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>L'invité sur l'espace assurance <UnfoldMoreIcon fontSize="small"/></TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Contacts <UnfoldMoreIcon fontSize="small"/></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
          
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
        </Box>
  )
}

export default Contact
