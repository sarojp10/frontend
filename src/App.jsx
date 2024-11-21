import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import CreateProduct from "./pages/create/CreateProduct"
import EditProduct from "./pages/edit/EditProduct"
import SingleProduct from "./pages/single/SingleProduct"
import ContactMe from "./pages/contact/Contact"


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/person/:id' element={<SingleProduct />} />
        <Route path='/contact' element={<ContactMe />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App