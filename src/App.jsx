import { Routes,Route } from "react-router-dom";
import {ProductList} from './pages/productList/index'
import {ProductDetails} from './pages/productDetails/index'
import {CartList} from './pages/cartList/index'
function App() {
  return (
      <>
    <Routes>
      <Route path="/" element={<ProductList/>} />
      <Route path = "/productDetails/:id" element={<ProductDetails/>} />
      <Route path = "/cartList" element = {<CartList/>} />
    </Routes>
    </>
  )
}

export default App;
