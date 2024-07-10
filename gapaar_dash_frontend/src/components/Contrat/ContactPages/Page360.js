import * as React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DescriptionIcon from '@mui/icons-material/Description';
import EuroIcon from '@mui/icons-material/Euro';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import "../contact.css"
import DomainIcon from '@mui/icons-material/Domain';
import PetsIcon from '@mui/icons-material/Pets';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import RecordVoiceOverRoundedIcon from '@mui/icons-material/RecordVoiceOverRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import Paper from '@mui/material/Paper';

const Page360 = () => {
  
  return (
    <>
    <div className='MainPanel'>
    <div className='endContainer'>
    <button className='btPan'>xxxxxxxxxxxx</button>
    <button className='btPan'>xxxxxxxxxxxx</button>
    </div>
    <div className='ccont'>
    <div className='containerContact1'>
    <div className='txtConCont'>Contrats</div>
    <div className="iconCont">
     62<DescriptionIcon sx={{marginRight:"20px"}}/>
     1598<EuroIcon sx={{marginRight:"20px"}}/>
    2265<EuroIcon sx={{marginRight:"20px"}}/>
    0<EuroIcon sx={{marginRight:"20px"}}/>
    </div>
    </div>
    <div className='containerContact1'>
    <div className='txtConCont'>Origine </div>
    <div className="iconCont">
    2 ans<InfoOutlinedIcon sx={{marginRight:"20px"}}/>
   </div>
    </div>
    </div>

    <div className='ccont'>
    <div className='containerContact1'>
    <div className='txtConCont'>Complétude des données </div>
    <div className="all">
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full-1">
          <div className="fill-1"></div>
        </div>
        <div className="mask half">
          <div className="fill-1"></div>
        </div>
        <div className="inside-circle"> 100% </div>
      </div>
    </div>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full-2">
            <div className="fill-2"></div>
          </div>
          <div className="mask half">
            <div className="fill-2"></div>
          </div>
          <div className="inside-circle"> 45% </div>
        </div>
      </div>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full-3">
              <div className="fill-3"></div>
            </div>
            <div className="mask half">
              <div className="fill-3"></div>
            </div>
            <div className="inside-circle"> 79% </div>
          </div>
        </div>
      </div>
    </div>
    <div className='containerContact1'>
    <div className='txtConCont'>Risque déclarés </div>
    <div className="iconContGray">
    <DomainIcon sx={{marginRight:"20px",fontSize:40}}/>
    <EuroIcon sx={{marginRight:"20px",fontSize:40}}/>
   <TimeToLeaveIcon sx={{marginRight:"20px",fontSize:40}}/>
   <PetsIcon sx={{marginRight:"20px",fontSize:40}}/>
   </div>
    </div>
    </div> 
    </div>
    <TableContainer component={Paper} style={{marginTop:"20px",padding:'10px'}}>
    <div className='titreTab'>Projet en cours</div>
        <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" style={{color:"#7C858C"}}>Projets</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>Conseiller</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>Prov. TTC débloquée</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>En attente</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>Etat</TableCell>
              <TableCell align="right" style={{color:"#7C858C"}}>Echances</TableCell>
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
      <TableContainer component={Paper} style={{marginTop:"20px",padding:'10px'}}>
      <div className='titreTab'>Contrats</div>
          <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right" style={{color:"#7C858C"}}>Action</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Conseiller</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Projet</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Transporteur</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Commissionné</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>TTC</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Décompte total</TableCell>
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
                  <TableCell align="right"></TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={{marginTop:"20px",padding:'10px'}}>
      <div className='titreTab'>Sinistres</div>
          <Table sx={{ minWidth: 650}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right" style={{color:"#7C858C"}}>Date de X</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Conseiller</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>X</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Risques</TableCell>
                <TableCell align="right" style={{color:"#7C858C"}}>Numero X</TableCell>
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
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className='MainPanel' style={{marginTop:"20px"}}>
        <div className='ccont'>
        <div className='containerContact1'>
        <div className='txtConCont'>Dernier activité</div>
        <div className="iconContGray">
    <CallRoundedIcon sx={{marginRight:"20px",fontSize:40}}/>Appel entrant
   </div>
        </div>
        <div className='containerContact1'>
        <div className='txtConCont'>Extranet client</div>
        <div className="iconContGray">
    <RecordVoiceOverRoundedIcon sx={{marginRight:"20px",fontSize:40}}/>Dernier connexion
    <p>date</p>
   </div>
   <button className='bts5'>
   Renvoyer le mot de passe
   < ArrowForwardIosIcon />
   </button>
        </div>
        </div>
        </div>
        </>
  )
}

export default Page360
