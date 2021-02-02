import logo from './logo.svg';
import './App.scss';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ItemListContainer from './containers';
import NavBar from './components/NavBar/CartWidget';






const App = () => {
  const saludar = () => {
   
  }
  return (
   <> 
    
     <ItemListContainer greeting= {"¡Holas!"}/>
     <NavBar greeting/> 
   </>
   
  );  
}

export default App;
