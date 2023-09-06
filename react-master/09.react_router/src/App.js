import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import ProductDetail2 from './components/ProductDetail2';

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>

    {/* Product 컴포넌트로 이동되도록 Route 컴포넌트 생성하기 */}
    <Route path='/product' element={<Product/>}/>

    {/* URL 파라미터 형식으로 Route 구성하기 */}
    <Route path='/product/:pro_no' element={<ProductDetail/>}/>
    {/* http://localhost:3000/product/ 뒤에 숫자를 넣어 주면 상세페이지가 넘어 감 */}
    {/* pro_no가 상세페이지 번호 */}

    <Route path='/ProductDetail2' element={<ProductDetail2/>}/>

   </Routes>
  );
}

export default App;
