import {Route, Routes ,BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Test from './pages/Test';
import Contacts from './pages/Contacts';
//import Projet from './pages/Projet';
import Tableau from './pages/Tableau';
import Layout from './components/Layout/Layout';
import ListDesTaches from './components/TabtleauDeBord/ListDesTaches';
import ProfileContact from './components/Contrat/ProfileContact';
import RendezVous from './components/RendezVous/RendezVous';
import AnalyseDeDonnées from './pages/AnalyseDeDonnées';
import Produit from './pages/Produit';
function App() {
  return (
    <>
  <Router>
        <Routes>
          <Route path='/'  element={<Login/>} />
          <Route path='/Sign-up'  element={<Signup/>} />  
          <Route element={<Layout/>}>
          <Route path='/Dashboard'  element={<Test/>} />   
          <Route path='/Dashboard/Tableau'  element={<Tableau/>} />
          <Route path='/Dashboard/Tableau/Liste-des-taches'  element={<ListDesTaches/>} />
          <Route path='/Contacts'  element={<Contacts/>} />
          <Route path='/Contacts/profile'  element={<ProfileContact/>} />
          <Route path='/Dashboard/Rendez-vous'  element={<RendezVous/>} />
          <Route path='/Dashboard/Analyse-de-données'  element={<AnalyseDeDonnées/>} />
          <Route path='/Dashboard/Produits'  element={<Produit/>} />
          </Route>
        </Routes>
  </Router>
    </>
  );
}

export default App;
