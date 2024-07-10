import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./contact.css"
import {Form,Col} from 'react-bootstrap';
import Page360 from './ContactPages/Page360';
import PageProfile from './ContactPages/PageProfile';
import PageDocuments from './ContactPages/PageDocuments'
import PageActivites from './ContactPages/PageActivites'
import PageContrats from './ContactPages/PageContrats'
import PageEntreprises from './ContactPages/PageEntreprises'
import PageFactures from './ContactPages/PageFactures'
import PageMails from './ContactPages/PageMails'
import PagePortimoires from './ContactPages/PagePortimoires'
import PageProcedures from './ContactPages/PageProcedures'
import PageProjets from './ContactPages/PageProjets'
import PageReclamations from './ContactPages/PageReclamations'
import PageTaches from './ContactPages/PageTaches'
import PageX from './ContactPages/PageX'
import PageX2 from './ContactPages/PageX2'

const CustomTab = styled(Tab)(({ theme, selected }) => ({
    color: '#7C858C',
    fontWeight: 'bold',
    ...(selected && {
      backgroundColor: 'white',
    }),
    marginTop:"10px"
  }));
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }


const ProfileContact = () => {

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
  <div className='maincont'>
    <div className='containerContact'>
    <AccountCircleRoundedIcon className='contIcon' sx={{fontSize:70}}/>
    <div className='NomContact'>NomDeClient</div>
    <div className='numCont'>55642</div>
    <CircleOutlinedIcon sx={{fontSize:10,marginLeft:"10px"}}/>
    <div className='endContainer'>
    <Form.Group as={Col} controlId="formGridState" >
      <Form.Select aria-label="Default select example" style={{ backgroundColor: "#F0EEEE", color: "#7C858C", borderRadius: "25px", borderWidth: "2px", borderColor: '#7C858C' }}>
        <option>Activités rapide</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
    <ExpandMoreIcon sx={{ fontSize: 40, fontWeight: "bold" }} />
  </div>
    </div>
  </div>
    <Box
    sx={{ flexGrow: 1, bgcolor: '#F2F2F2', display: 'flex', height: '100%' }}
  >
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider' ,width:170}}
    >
      <CustomTab label="Vue 360" {...a11yProps(0)} />
      <CustomTab label="Profile" {...a11yProps(1)} />
      <CustomTab label="Portimoire" {...a11yProps(2)} />
      <CustomTab label="Entraprise" {...a11yProps(3)} />
      <CustomTab label="Contrats" {...a11yProps(4)} />
      <CustomTab label="Projets" {...a11yProps(5)} />
      <CustomTab label="X" {...a11yProps(6)}  />
      <CustomTab label="Documents" {...a11yProps(7)} />
      <CustomTab label="Procedure de X" {...a11yProps(8)} />
      <CustomTab label="Factures" {...a11yProps(9)} />
      <CustomTab label="Mails" {...a11yProps(10)}  />
      <CustomTab label="Activités" {...a11yProps(11)} />
      <CustomTab label="Tâches" {...a11yProps(12)} />
      <CustomTab label="X" {...a11yProps(13)} />
      <CustomTab label="Réclamation" {...a11yProps(14)} />
    </Tabs>
    <TabPanel value={value} index={0}>
    <Page360/>
    </TabPanel>


    <TabPanel value={value} index={1}>
    <PageProfile/>
    </TabPanel>


    <TabPanel value={value} index={2}>
      <PagePortimoires/>
    </TabPanel>
    <TabPanel value={value} index={3}>
      <PageEntreprises/>
    </TabPanel>
    <TabPanel value={value} index={4}>
      <PageContrats/>
    </TabPanel>
    <TabPanel value={value} index={5}>
      <PageProjets/>
    </TabPanel>
    <TabPanel value={value} index={6}>
      <PageX/>
    </TabPanel>
    <TabPanel value={value} index={7}>
     <PageDocuments/>
    </TabPanel>
    <TabPanel value={value} index={8}>
      <PageProcedures/>
    </TabPanel>
    <TabPanel value={value} index={9}>
      <PageFactures/>
    </TabPanel>
    <TabPanel value={value} index={10}>
      <PageMails/>
    </TabPanel>
    <TabPanel value={value} index={11}>
      <PageActivites/>
    </TabPanel>
    <TabPanel value={value} index={12}>
      <PageTaches/>
    </TabPanel>
    <TabPanel value={value} index={13}>
      <PageX2/>
    </TabPanel>
    <TabPanel value={value} index={14}>
      <PageReclamations/>
    </TabPanel>
  </Box>
  </>
  )
}

export default ProfileContact
