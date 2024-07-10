import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from 'react-bootstrap';
import Button2 from '@mui/material/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';

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

const PageActivites = () => {
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ flexGrow: 1 }}>
            <Tab label="xxxxx" {...a11yProps(0)} />
            <Tab label="xxxxx" {...a11yProps(1)} />
            <Tab label="xxxxx" {...a11yProps(2)} />
            <Tab label="xxxxx" {...a11yProps(3)} />
          </Tabs>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button2
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              style={{ color: "#7C858C", marginRight: '10px' }}
            >
              <FilterListIcon style={{ color: "#7C858C" }} />
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
            <Button variant="primary" style={{ borderRadius: "20px" }}>
              <AddIcon /> Ajouter un x
            </Button>
          </Box>
        </Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {/* Content for Tab 0 */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {/* Content for Tab 2 */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {/* Content for Tab 3 */}
      </CustomTabPanel>
    </Box>
  );
}

export default PageActivites;
 