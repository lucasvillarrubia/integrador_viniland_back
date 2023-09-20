import Navbar from "../components/header/Navbar"
import Toolbar from "../components/header/Toolbar"
import Footer from "../components/footer/Footer"
import Cart from "../components/cart/Cart"
import Menu from "../components/menu/Menu"
import Routes from "../routes/Routes"
import Layout from "../components/layout/Layout"

function App() {
        
        return (
                <Layout>
                        <Navbar />
                        {/* <Menu /> */}
                        <Routes />
                        {/* <Toolbar /> */}
                        <Footer />
                </Layout>
        )
}

export default App
