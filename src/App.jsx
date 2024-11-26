import Aos from "aos"
import 'aos/dist/aos.css';
import { useEffect,useState } from "react";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import GetNotif from "./Components/Notified/GetNotif";
import TestiMonials from "./Components/Testimoni/TestiMonials";



function App() {
  const [orderPopup, setorderPopup] = useState(false)
 
  const handleOrderPopup = ()=>{
    setorderPopup(!orderPopup)
  }
  useEffect(() => {
    Aos.init({
      offset:100,
      duration:800,
      easing:'ease-in-sine',
      delay:100,
    })
    Aos.refresh()
    
  
    
  },[])
  

  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="container">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup ={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner/>
      <GetNotif/>
      <TestiMonials/>
      
    
    </div>
 
</div>

    </>
   
  )
}

export default App
