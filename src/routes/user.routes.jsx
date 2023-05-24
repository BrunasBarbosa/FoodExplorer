import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { Menu } from '../pages/Menu';
// import { Dish } from '../pages/Dish';
// import { Cart } from '../pages/Cart';
// import { Order } from '../pages/Order';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='/menu' element={<Menu />}/> */}
      {/* <Route path='/dish' element={<Dish />}/> */}
      {/* <Route path='/cart' element={<Cart />}/> */}
      {/* <Route path='/order' element={<Order />}/> */}
    </Routes>
  );
}