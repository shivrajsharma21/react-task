
import { useEffect, useState } from 'react';
import './App.scss';
import { useSelector, useDispatch } from 'react-redux'
import { Loading, Prodcuts } from './actions'
import Header from './components/Header';
import ProductList from './components/ProductListing';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-bootstrap';

function App() {
  const count = useSelector(state => state.counter)
  const prod = useSelector(state => state.product)
  const [isLoader, setLoader] = useState(false)

  const dispatch = useDispatch();

  const getProduct = async () => {
    try{
    setLoader(true)
    let result = await fetch('https://fakestoreapi.com/products');
    let res = await result.json();
    setLoader(false)
    dispatch(Prodcuts(res))
    }
    catch(error){
      console.log('Error in fetching api ', error)
    }
  }
  const deleteproducts = async (id, status) => {
    setLoader(true)
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      })
      console.log('yes')
      dispatch(Prodcuts(prod.filter(product => product.id !== id)))
      setLoader(false)
    }

    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getProduct();
  }, [])


  return (
    <div className="App">
      <Header />
      <Container className="mt-3">
        <ProductList product={prod} deleteproducts={deleteproducts} isLoader={isLoader} />
      </Container>
    </div>
  );
}

export default App;
