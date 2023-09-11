import { BrowserRouter } from 'react-router-dom';
import { AuthRoutes } from './auth.routes';
import { UserRoutes } from './user.routes';
import { AdmRoutes } from './adm.routes';
import { useAuth } from '../hooks/auth';

export function Routes() {
  const { user } = useAuth();

  let routes = null ;

  if(user) {
    let { type } = user;

    routes =
    type === 'admin' ? <AdmRoutes /> :
    type === 'common' ? <UserRoutes /> :  null;
  }

  return (
    <BrowserRouter >
      {user ? routes :  <AuthRoutes />}
    </BrowserRouter>
  );
}