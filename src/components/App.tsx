import '../App.css';
import React, { Fragment } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { Navbar } from '../components/nav/Navbar';
import { ModalManager } from '../components/common/modals/ModalManager';
import { AdopcionDashboard } from './adopciones/adopcionesDashboard/AdopcionDashboard';
import { AdopcionDetail } from './adopciones/adopcionesDetail/AdopcionDetail';
import { ProfilePage } from './profile/ProfilePage';
import { Footer } from './Footer';

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
        <Route exact path='/'>
          <Redirect to='/adoptions' />
        </Route>

        <Route path='/adoptions' component={AdopcionDashboard} />
        <Route path='/adoption/:id' component={AdopcionDetail} />
        <Route path='/profile/:id' component={ProfilePage} />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
