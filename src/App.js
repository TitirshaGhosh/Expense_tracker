import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import AddExpense from './pages/add-expense';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    // <Router basename="/expense_tracker">
    <Router>
       <Header/>
        <Routes>
       
           <Route exact path="/" element={<Home/>}></Route>
          <Route path='/add-expense' element={<AddExpense/>}/> 
          
        </Routes> 
     <Footer/>
      
    </Router>
  );
}
 

export default App;
