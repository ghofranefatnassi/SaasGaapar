import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Header from '../Header/Header';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MailIcon from '@mui/icons-material/Mail';
import GppGoodIcon from '@mui/icons-material/GppGood';
import HandymanIcon from '@mui/icons-material/Handyman';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const drawerWidth = 300;

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ bgcolor: '#101720' }} />
      <List
        sx={{ width: '100%', maxWidth: 500, bgcolor: '#101720' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {[
          { text: "TABLEAU DE BORD", icon: <DashboardIcon className='iconSide' />, link: '/Dashboard/Tableau' },
          { text: "CONTACTS", icon: <ContactPageIcon className='iconSide' />, link: '/Contacts' },
          { text: "PROJETS", icon: <ShoppingCartIcon className='iconSide' />, link: '/Projets' },
          { text: "CONTRATS", icon: <TextSnippetIcon className='iconSide' /> },
          { text: "PRODUITS", icon: <Inventory2Icon className='iconSide' /> ,link:'/Dashboard/Produits' },
          { text: "ANALYSE DE DONNEES", icon: <AssessmentIcon className='iconSide' /> ,link:"/Dashboard/Analyse-de-données" },
          { text: "COMMUNICATIONS", icon: <ModeCommentIcon className='iconSide' /> },
          { text: "CONFORMITE", icon: <GppGoodIcon className='iconSide' /> },
          { text: "MAILS", icon: <MailIcon className='iconSide' /> },
          { text: "OUTILS", icon: <HandymanIcon className='iconSide' /> },
          { text: "FINANCES", icon: <RequestQuoteIcon className='iconSide' /> },
          { text: "RENDEZ-VOUS", icon: <CalendarMonthIcon className='iconSide' />,link:'/Dashboard/Rendez-vous' },
          { text: "PARAMETRE", icon: <SettingsIcon className='iconSide' /> },
          { text: "CHAT GPT", icon: <SmartToyIcon className='iconSide' /> },
          { text: "REDUIRE", icon: <MultilineChartIcon className='iconSide' /> },
        ].map((item, index) => (
          <ListItemButton
            key={item.text}
            component={item.link ? Link : 'div'}
            to={item.link}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index)}
            sx={{
              '&.Mui-selected': {
                backgroundColor: '#0083CB',
                '&:hover': {
                  backgroundColor: '#0072B1',
                },
              },
            }}
          >
            <ListItemIcon
              sx={{
                marginLeft: selectedIndex === index ? '10px' : '0px',
                transition: 'margin-left 0.3s ease',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              className='textSide'
              sx={{
                marginLeft: selectedIndex === index ? '10px' : '0px',
                transition: 'margin-left 0.3s ease',
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Header />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidebar;