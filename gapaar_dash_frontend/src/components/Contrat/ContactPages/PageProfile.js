import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../contact.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import SendIcon from '@mui/icons-material/Send';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {Row,Form,Col} from 'react-bootstrap';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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



const PageProfile = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange2 = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <>
    <div style={{ width:'100%', margin: '0 auto' }}>
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange2('panel1')}>
    <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    >
        <Typography sx={{ width: '33%', flexShrink: 0, color: 'black', fontWeight: 'bold' }}>
            Gestion interne
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
            <Typography sx={{ color: '#0083CB', display: 'flex', alignItems: 'center' }}>
            <button>
                <SendIcon /> Envoyer le X
                </button>
            </Typography>
            <Typography sx={{ color: '#42B72A', marginLeft: '20px', display: 'flex', alignItems: 'center',marginRight:"20px" }}>
                <TaskAltIcon />
            </Typography>
        </Box>
    </AccordionSummary>
    <AccordionDetails>
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col}>
        <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 1</Form.Label>
        <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
      </Form.Group>

      <Form.Group as={Col} >
      <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 2</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      </Form.Group>
    </Row>
    <Row className="mb-3">
    <Form.Group as={Col} >
            <Form.Label style={{ color: '#7C858C', fontSize: '15px' }}>Date de Naissance</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
        ]}
      >
      <DemoItem>
      <DatePicker className='dateCont' />
    </DemoItem>
    </DemoContainer>
    </LocalizationProvider>
        </Form.Group>

    <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 4</Form.Label>
    <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
      <option>Choose...</option>
      <option>...</option>
    </Form.Select>
    </Form.Group>
  </Row>
   

    <Row className="mb-3">
      <Form.Group as={Col} md={6}>
      <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 5</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      </Form.Group>

      <Form.Group as={Col} md={3}>
      <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 6</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      </Form.Group>

      <Form.Group as={Col} md={3}>
      <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 7</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <button className='Oui'>Oui</button>
      <button className='Non'>Non</button>
      <Form.Group as={Col} md={6}>
      <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 8</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
      </Form.Group>
    </Row>

  </Form>
    </AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel2'} onChange={handleChange2('panel2')}>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
>
    <Typography sx={{ width: '33%', flexShrink: 0, color: 'black', fontWeight: 'bold' }}>
     Identité
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
        <Typography sx={{ color: '#42B72A', marginLeft: '20px', display: 'flex', alignItems: 'center',marginRight:"20px" }}>
            <TaskAltIcon />
        </Typography>
    </Box>
</AccordionSummary>
<AccordionDetails>
<Form>
<div className='mb-3'>
  <Form.Check 
    type="radio" 
    name="gender" 
    id="madame" 
    label="Madame" 
    aria-label="radio 1" 
    className="d-inline-block" 
  />
  <Form.Check 
    type="radio" 
    name="gender" 
    id="monsieur" 
    label="Monsieur" 
    aria-label="radio 1" 
    className="d-inline-block ml-2" 
  />
</div>

<Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 1</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>

  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 2</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
</Row>
<Row className="mb-3">

<Form.Group as={Col}>
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 3</Form.Label>
<Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
</Form.Group>
<Form.Group as={Col} >
        <Form.Label style={{ color: '#7C858C', fontSize: '15px' }}>Date de Naissance</Form.Label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DemoContainer
    components={[
      'DatePicker',
    ]}
  >
  <DemoItem>
  <DatePicker className='dateCont' />
</DemoItem>
</DemoContainer>
</LocalizationProvider>
    </Form.Group>
</Row>


<Row className="mb-3">
<Form.Group as={Col}>
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 4</Form.Label>
<Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
</Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 5</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>
<Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 6</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>

  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 7</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
</Row>
<Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 8</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>

  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 9</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
</Row>
<Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 10</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col}>
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 11</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} >
    <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 12</Form.Label>
    <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>
  </Row>
  <Row className="mb-3">
<Form.Group as={Col}>
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 13</Form.Label>
<Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
</Form.Group>
  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 14</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 15</Form.Label>
  <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
</Form.Group>
</Row>
<Row className="mb-3">
<Form.Group as={Col}>
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 16</Form.Label>
<Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
  <option>Choose...</option>
  <option>...</option>
</Form.Select>
</Form.Group>
</Row>
</Form>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel3'} onChange={handleChange2('panel3')}>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
>
    <Typography sx={{ width: '33%', flexShrink: 0, color: 'black', fontWeight: 'bold' }}>
     Situation personnelle
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
        <Typography sx={{ color: '#42B72A', marginLeft: '20px', display: 'flex', alignItems: 'center',marginRight:"20px"  }}>
            <TaskAltIcon />
        </Typography>
    </Box>
</AccordionSummary>
<AccordionDetails>
<Form>
<Row className="mb-3">
<Form.Group as={Col} >
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 1</Form.Label>
<Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
  <option>Choose...</option>
  <option>...</option>
</Form.Select>
</Form.Group>

  <Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 2</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>
</Row>

<Row className="mb-3">
  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 3</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 4</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>

<Row className="mb-3">
  <Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 5</Form.Label>
  <Form.Control type="text"  style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}/>
  </Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 6</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>
<Row className="mb-3">

  <Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 7</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>

</Form>
</AccordionDetails>
</Accordion>


<Accordion expanded={expanded === 'panel4'} onChange={handleChange2('panel4')}>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1bh-content"
    id="panel1bh-header"
    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
>
    <Typography sx={{ width: '33%', flexShrink: 0, color: 'black', fontWeight: 'bold' }}>
     Situation professionnelle
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexGrow: 1 }}>
        <Typography sx={{ color: '#42B72A', marginLeft: '20px', display: 'flex', alignItems: 'center',marginRight:"20px"  }}>
            <TaskAltIcon />
        </Typography>
    </Box>
</AccordionSummary>
<AccordionDetails>
<Form>
<Row className="mb-3">
<Form.Group as={Col} >
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 1</Form.Label>
<Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
  <option>Choose...</option>
  <option>...</option>
</Form.Select>
</Form.Group>

  <Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 2</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>
</Row>

<Row className="mb-3">
  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 3</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 4</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>
<Row className="mb-3">
  <Form.Group as={Col} md={6}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 5</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 6</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>

<Row className="mb-3">
<Form.Group as={Col}>
<Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 7</Form.Label>
<Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
  <option>Choose...</option>
  <option>...</option>
</Form.Select>
</Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 8</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>
<Row className="mb-3">
  <Form.Group as={Col} >
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 9</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

  <Form.Group as={Col}>
  <Form.Label style={{color:'#7C858C',fontSize:"15px"}}>Label 10</Form.Label>
  <Form.Select defaultValue="Choose..." style={{borderColor:"#707980",backgroundColor:'#F4F4F4',borderWidth:"1px"}}>
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
  </Form.Group>

</Row>
</Form>
</AccordionDetails>
</Accordion>
  </div>
    </>
  )
}

export default PageProfile
