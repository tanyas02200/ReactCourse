import logo from './logo.svg';
import './App.css';
import "./style.css"
import Navbar from "./components/Navbar" ;
import Hero from './components/Hero';
import Card from './components/Card';
function App() {
  return (
    <div >
   <Navbar />
   <Card 
   img = "https://upload.wikimedia.org/wikipedia/commons/5/52/Kartik_Aaryan_in_2022.jpg"
   rating = "5.0"
   reviewCount ={6}
   country = "USA"
   title = "Life Lessons with Katori aryan"
   price ={136}
   />
    </div>
  )
}

export default App;
