import { Routes, Route } from 'react-router-dom';
import { HomeAdm } from '../pages/HomeAdm';
import { MenuAdm } from '../pages/MenuAdm';
import { DishAdm } from '../pages/DishAdm';
import { New } from '../pages/New';
import { Update } from '../pages/Update';

export function AdmRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeAdm />}/>
      <Route path='/menu' element={<MenuAdm />}/>
      <Route path='/dish' element={<DishAdm />}/>
      <Route path='/new' element={<New />}/>
      <Route path='/dish/:key' element={<Update />}/>
    </Routes>
  );
}