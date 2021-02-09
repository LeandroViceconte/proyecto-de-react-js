import './App.scss';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import ItemListContainer from './containers/ItemListContainers';
import NavBar from './components/NavBar';

const App = () => {

  return (
   <> 
    <NavBar/>
   <ItemListContainer/>
   </>
    
  
  );  
}

export default App;
