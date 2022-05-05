import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Books from './Components/Books/Books'
import Footer from './Components/Footer/Footer';
import { useEffect,useState } from 'react';
import axios from 'axios'
function App() {

 const KEY = "h04zshZ3BMywNNFXVkZAeI4jCqGkwr47";
 const [books,setBooks] = useState([]);

const  fetchData = async() => {
  
   const res =
    await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${KEY}`);
    const data = res.data.results.books;
   
    setBooks(data);
 };
 useEffect(()=>{
  fetchData()
 
 },[])
 console.log(books)
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Books books={books}/>
     <Footer />
     </div>
  );
}

export default App;
