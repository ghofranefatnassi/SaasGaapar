import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import MoreIcon from '@mui/icons-material/MoreVert';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import { styled} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import "./Header.css"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
    flexDirection: 'row', 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth:" 0px",
    height: "fit-content",
    width:"fit-content ",
    borderRadius: "25px",
    marginLeft: "10px",
    paddingRight: "30px",
    paddingLeft: "30px",
    
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({

}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#7C858C',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor:"white"
  },
}));
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="#7C858C">
            <EmailOutlinedIcon />
        </IconButton>
        <p className='text-header'>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="#7C858C"
        >
            <AssignmentTurnedInOutlinedIcon />
        </IconButton>
        <p className='text-header'>Mes taches</p>
      </MenuItem>
      <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="#7C858C"
      >
          <NotificationsNoneOutlinedIcon />
      </IconButton>
      <p className='text-header'>Notifications</p>
    </MenuItem>
    <MenuItem>
    <IconButton
      size="large"
      aria-label="show 17 new notifications"
      color="#7C858C"
    >
        <HelpOutlineRoundedIcon />
    </IconButton>
    <p className='text-header'>Aide</p>
  </MenuItem>
  <MenuItem>
  <IconButton
    size="large"
    aria-label="show 17 new notifications"
    color="#7C858C"
  >
      <ExitToAppTwoToneIcon />
  </IconButton>
  <p className='text-header'>Se déconnecter</p>
</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar className='header'>

        <Search>
          <SearchIconWrapper >
            <SearchIcon className='icon-header'/>
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Recherche"
      
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
           
              <EmailOutlinedIcon className='icon-header'/>
            
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
          >
              <AssignmentTurnedInOutlinedIcon  className='icon-header'/>
           
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
          >
              <NotificationsNoneOutlinedIcon  className='icon-header'/>
           
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
          >
              <HelpOutlineRoundedIcon  className='icon-header'/>
           
          </IconButton>
          <IconButton
          size="large"
          aria-label="show 17 new notifications"

          className='marg'
        >
            <ExitToAppTwoToneIcon  className='icon-header'/>
         <div className='text-header'>userName</div>
        </IconButton>
      
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
    {renderMobileMenu}
    {renderMenu}
  </Box>
  )
}

export default Header
