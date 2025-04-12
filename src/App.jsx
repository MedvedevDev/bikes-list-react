import './App.css'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {

  return (
    <div className="container">
        <Header />
        <MainContent />
        <Footer />
    </div>
  )
}

export default App
