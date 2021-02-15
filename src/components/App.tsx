import '../App.css';
import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { Navbar } from '../components/nav/Navbar';
import { ModalManager } from '../components/common/modals/ModalManager';
import { AdopcionDashboard } from './adopciones/adopcionesDashboard/AdopcionDashboard';
import { AdopcionDetail } from './adopciones/adopcionesDetail/AdopcionDetail';

function App() {
  return (
    <Fragment>
      <ModalManager />
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        closeOnClick
        pauseOnHover
      />
      <Navbar />
      <Container className='main'>
        <Route exact path='/' component={AdopcionDashboard} />
        <Route path='/adopcion/:id' component={AdopcionDetail} />
      </Container>
    </Fragment>
  );
}

export default App;
