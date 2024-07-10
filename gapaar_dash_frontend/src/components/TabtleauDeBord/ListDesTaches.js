import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Form, Row, Col, Button } from 'react-bootstrap';
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
  
const ListDesTaches = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Suivi de vos tâches" {...a11yProps(0)} />
                    <Tab label="Liste des tâches" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Form>
                    <Row className="align-items-center mb-5">
                        <Col md="4">
                            <Form.Group>
                                <Form.Label>Label 1</Form.Label>
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="4">
                            <Form.Group>
                                <Form.Label>Label 2</Form.Label>
                                <Form.Select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md="4" className="d-flex justify-content-end mt-6">
                        <Form.Group className="mr-2">
                                <Form.Select >
                                    <option>Tout X</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" style={{borderRadius:"20px"}}>
                                <AddIcon /> Nouvelle tâche
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
        </Box>
    )
}

export default ListDesTaches;
