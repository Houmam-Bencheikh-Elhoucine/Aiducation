import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import JoinUs from './JoinUs'; 
import Us from './Footer';
import Footer from './Footer';



export default function StartPage() {
    return (

    <div>
        <NavBar/>
        <Home/>
        <About />
        <JoinUs/> 
        <Footer/>
    </div>
    
    )   
}
