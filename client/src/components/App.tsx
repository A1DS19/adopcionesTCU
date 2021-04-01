import '../App.css';
import React, { Fragment, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import { ToastContainer } from 'react-toastify';
import { Navbar } from '../components/nav/Navbar';
import { ModalManager } from '../components/common/modals/ModalManager';
import { AdopcionDashboard } from './adopciones/adopcionesDashboard/AdopcionDashboard';
import { AdopcionDetail } from './adopciones/adopcionesDetail/AdopcionDetail';
import { ProfilePage } from './profile/ProfilePage';
import { Footer } from './Footer';
import { PetList } from './admin/pets/PetList';
import { PetForm } from './admin/pets/PetForm';
import { UserList } from './admin/users/UserList';
import { UserForm } from './admin/users/UserForm';
import { NotFound404 } from './NotFound404';
import { AuthRoute } from './AuthRoute';
import { AdminRoute } from './AdminRoute';

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
        <Switch>
          <Route exact path='/'>
            <Redirect to='/adoptions' />
          </Route>

          <Route path='/adoptions' component={AdopcionDashboard} />
          <Route path='/adoption/:id' component={AdopcionDetail} />
          <AuthRoute path='/profile/:id' Component={ProfilePage} />
          <AdminRoute exact path='/admin/pets' Component={PetList} />
          <AdminRoute exact path='/admin/users' Component={UserList} />
          <AdminRoute
            path={['/admin/pets/create', '/admin/pets/:id']}
            Component={PetForm}
          />
          <AdminRoute
            path={['/admin/users/create', '/admin/users/:id']}
            Component={UserForm}
          />

          <Route path='*' component={NotFound404} />
        </Switch>
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
