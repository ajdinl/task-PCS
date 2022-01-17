import './style.css'
import Navbar from '../../Components/navbar/Navbar'
import Header from '../../Components/homePage/Header'
import Footer from '../../Components/homePage/Footer'
import Main from '../../Components/homePage/Main'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
export default HomePage
