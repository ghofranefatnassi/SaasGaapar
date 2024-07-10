import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import '../contact.css'
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
const PageContrats = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='maincont1'>
    <div className='NomContact1'>Contrats</div>
    <Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="XXXXXXXXX" {...a11yProps(0)} />
        <Tab label="XXXXXXXXX" {...a11yProps(1)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0}>
    <TableContainer component={Paper} style={{marginTop:"20px",padding:'20px'}}>
    <FormControl>
    <div className="radio-button-container">
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="X actifs" />
        <FormControlLabel value="male" control={<Radio />} label="X X" />
        <FormControlLabel value="other" control={<Radio />} label="Tout les X" />
      </RadioGroup>
      <button className='btAjout'>
        <AddIcon />
        Ajouter un contrat x
      </button>
    </div>
  </FormControl>
        <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{color:"#7C858C"}}>Lien</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>XXXXXXXXXX</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>XXXXXXXXXX</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>XXXXXXXXXX</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>N° XXXXXXX</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>XXXXXXXXXX</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>Etat</TableCell>
              
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
    </div>
  )
}

export default PageContrats
