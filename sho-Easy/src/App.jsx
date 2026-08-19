import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
function Student(details){
  return (
    <>

    <h1>Student Details</h1>
    <h2>{details.name}</h2>
    <h2>{details.course}</h2>
    </>
  )
}
function App() {
  let name= "Gazi S";
  return (
    <>
    <Student name={name} course="CSE"/>
   

    <Header />
    <Hero />
    <Categories />
    <ProductList />
    
    </>
  )
}
export default App
