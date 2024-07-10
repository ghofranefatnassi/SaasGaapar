import * as React from 'react';
import './TableauDeBord.css'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Form } from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 841,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  
};

const TableauDeBord = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const navigate = useNavigate();

  return (
    <div className='container-main'>
    <div className='titre'>
    Bienvenue Nom  utilisateur
    </div>
    <div className='container2'>
    
    <div className='contentRow'>
    <div className='titre_cont '>Pipe commercial</div>
    <button className='btPip'>Info & Besions</button>
    <button className='btPip'>Proposition & Conseil</button>
    <button className='btPip'>Propose</button>
   
    <div className='contentRow2'>
    <div className='contentRc'>
    <p className='textCC'>558</p>
    <p className='encour'>En cours</p>
    </div>
    <div className='contentRc'>
    <p className='textCC'>543</p>
    <p className='encour'>En cours</p>
    </div>
    <div className='contentRc'>
    <p className='textCC'>321</p>
    <p className='encour'>En cours</p>
    </div>
    </div> 
    <button className='bts5'>
    Voir le détail
    < ArrowForwardIosIcon />
    </button>
    <div className='titre_cont '>Raccourcis Extranet</div>
    <button className='bts5'>
    Voir tous
    < ArrowForwardIosIcon />
    </button>
    </div>
    {/*partie 2 de code */}
    <div className='contentRow'>
    <div className='contentRc2'>
    <div className='titre_cont2'>Actions rapides</div>
    <button className='btsAc'>
     <PersonAddIcon fontSize='small'/>
     Créer un personne
     </button>
     <button className='btsAc' onClick={handleOpen1}>
     <DomainAddIcon fontSize='small'/>
     Créer un entreprise
     </button> 
     <Modal
     open={open1}
     onClose={handleClose1}
     aria-labelledby="modal-modal-title"
     aria-describedby="modal-modal-description"
   >
     <Box sx={style1}>
       <Typography id="modal-modal-title" variant="h6" component="h2">
        Ajouter une nouvelle entreprise
       </Typography>
       <Typography id="modal-modal-description" sx={{ mt: 0.5 ,color:'#707980' }}>
         Créer la nouvelle entreprise
       </Typography>
       <Form.Group className="mb-3">
       <Form.Label>Nom de l'entreprise</Form.Label>
       <Form.Select >
         <option>1</option>
         <option>2</option>
         <option>3</option>
       </Form.Select>
     </Form.Group>
     <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Clé d'API</Form.Label>
          <Form.Control
            type="text"
          />
        </Form.Group>
        <Form.Group as={Col} md="6">
          <Form.Label>Numéro SIRET</Form.Label>
          <Form.Select >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group as={Col} md="6">
      <Form.Label>Adresse e-mail</Form.Label>
      <Form.Select >
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mt-2 d-flex justify-content-start">
      <Button variant="light" className="mr-2">Oui</Button>
      <Button variant="primary"> Non
      <CheckIcon/>
      </Button>
      </Form.Group>
      <Form.Group className="mt-2 d-flex justify-content-end">
      <Button variant="light" className="mr-2" onClick={handleClose1}>
        <CloseIcon />
        Annuler
      </Button>
      <Button variant="secondary">Sauvgarder</Button>
    </Form.Group>
       </Box>
   </Modal>

     <p>
     <button className='btsAc'>
     <AddShoppingCartIcon fontSize='small'/>
     Créer un projet
     </button>
     </p>
     <button className='btsAc'>
     <NoteAddIcon fontSize='small'/>
     Créer un contrat
     </button>
     <button className='btsAc'>
     <AddCircleIcon fontSize='small'/>
     Creation intelligente contart
     </button>
    </div>
    <div className='contentRc2'>
    <div className='titre_cont2'>Identifiants extranet a vérifier</div>
    <div className='bts3'>
    <AssignmentIndIcon sx={{ fontSize: 35 ,color:"#F36D8F" }} />
    <InfoOutlinedIcon sx={{fontSize:20,color:"#f1967b"}}/>
    <span>AA</span>
    </div>
    <div className='bts3'>
    <AssignmentIndIcon sx={{ fontSize: 35 ,color:"#9F8DC3" }} />
    <InfoOutlinedIcon sx={{fontSize:20,color:"#f1967b"}}/>
    <span>AA</span>
    </div>
    <div className='bts3'>
    <AssignmentIndIcon sx={{ fontSize: 35 ,color:"#000000" }} />
    <InfoOutlinedIcon sx={{fontSize:20,color:"#f1967b"}}/>
    <span>AA</span>
    </div>
    <div className='bts3'>
    <button className='bts4'>Mettre à jour et tester
    < ArrowForwardIosIcon />
    </button>
    </div>
    </div>
    <div className='contentRc2'>
    <div className='titre_cont2'>Anniversaires du jour</div>
    <button className='btsAc'>
     NomDeClients
     <IconButton onClick={handleOpen}>
    <CakeOutlinedIcon fontSize='small'/>
    </IconButton>
    </button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
      Souaitez-vous envoyer  un email de Bon Anniversaire a ce contact?
      </Typography>
      <Typography style={{alignItems:"center",justifyContent:'center'}}>
      <button style={{color:"#7C858C",alignItems:"center",justifyContent:'center',marginLeft:'20px'}}>NON</button>
      <button style={{color:"#fff" , backgroundColor:"#0083CB",borderRadius:'10px',padding:"8px",width:"119px",height:"40px",marginLeft:'20px'}}>ENVOYER</button>
      </Typography>
   
    </Box>
  </Modal>
    </div>
    <div className='contentRc2'>
    <div className='titre_cont2'>Mes tâches</div>
    <div className='c1'>
    <div>
    <div className='text5'>15</div>
    <p className='txt'>En retard</p>
    </div>
    <div>
    <div className='text6'>0</div>
    <p className='txt'>A traiter dans un semaine</p>
    </div>
    <div>
    <div className='text6'>21</div>
    <p className='txt'>A traiter</p>
    </div>
    </div>
    </div>
    <div className='contentRc2'>
    <div className='titre_cont2'>Toutes les tâches du cabinet</div>
    <div className='c1'>
    <div>
    <div className='text5'>209</div>
    <p className='txt'>En retard</p>
    </div>
    <div>
    <div className='text6'>08</div>
    <p className='txt'>A traiter dans un semaine</p>
    </div>
    <div>
    <div className='text6'>482</div>
    <p className='txt'>A traiter</p>
    </div>
    </div>
    </div>
    <button className='bts4' style={{marginLeft:"20px"}} onClick={()=>navigate('/Dashboard/Tableau/Liste-des-taches')}>
    Voir toutes les tâches
    < ArrowForwardIosIcon />
    </button>
    </div>
    </div>
    </div>
  )
}

export default TableauDeBord
