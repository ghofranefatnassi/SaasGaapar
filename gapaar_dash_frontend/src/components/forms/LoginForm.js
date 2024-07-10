import React, { useState } from 'react';
import "./Form.css"; // Make sure this path is correct
import logo from "../../images/logo.png";
import '@fontsource/inter'; 
import '@fontsource/inter/400.css';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSwitchChange = () => {
    setLoading(!loading);
    if (!loading) {
      navigate ("/sign-up")
    }
  };

  return (
    <div className="page">
      <div className='content5'>
        <img src={logo} alt='logo' className='logo1'/>
        <div className='container_login'>
          <div className='text1'>Se connecter</div>
          <Stack direction="row" alignItems="center" spacing={1}>
            <div className='text2_login'>
            Vous n'avez pas un compte ? click ici
              <FormControlLabel
                control={
                  <Switch
                    checked={loading}
                    onChange={handleSwitchChange}
                    name="loading"
                    color="primary"
                    size="small"
                  />
                }
                style={{ marginLeft: '3px' }}
              />
            </div>
          </Stack>
          <div className="input-container">
            <AccountCircleIcon className="icon" sx={{ fontSize: 30 }} />
            <input type='text' className="input" placeholder="Nom d'utilisateur"/>
          </div>
          <div className="input-container">
          <LockIcon className="icon" sx={{ fontSize: 30 }} />
          <input type='password' className="input" placeholder="********"/>
        </div>
        <div className='text3'>
        <a href='/test'>
        Mot de passe oublié ?
        </a>
        </div>
        <div className="bt">
        Se connecter
      </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;