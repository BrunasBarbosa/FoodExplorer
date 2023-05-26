import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { Menu } from '../pages/Menu';
import { Details } from '../pages/Details';
// import { Cart } from '../pages/Cart';
// import { Order } from '../pages/Order';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='/menu' element={<Menu />}/> */}
      <Route path='/details/:id' element={<Details />}/>
      {/* <Route path='/cart' element={<Cart />}/> */}
      {/* <Route path='/order' element={<Order />}/> */}
    </Routes>
  );
}