import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditProduct from './component/EditProduct';
import Navbar from './component/Navbar';
import InventoryTable from './component/InventoryTable';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/add_inventory' element={<AddProduct/>}></Route>
            <Route path='/update_inventory/:id' element={<EditProduct/>}></Route>
            <Route path='/inventory_table' element={<InventoryTable/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
