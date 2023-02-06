import logo from './logo.svg';
import './App.css';
import "./style.css"
import Navbar from "./components/Navbar" ;
import Hero from './components/Hero';
import Card from './components/Card'
import data from './data';
function App() {
const cards=data.map(item=> {
  return(
<Card 
key={item.id}
item
    img = {item.coverImg}
    rating = {item.stats.rating}
    reviewCount ={item.stats.reviewCount}
   location = {item.location}
    title = {item.title}
    price = {item.price}
    openSpots={item.openSpots}
    link ={item.link}
   />
  )
})
  return (
    <div >
   <Navbar />
   <section className= "cards-list">
   {cards}
   </section>
    </div>
  )
}

export default App;
