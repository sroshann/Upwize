import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import BeforeElection from "./Pages/Admin/Before-Election/BeforeElection"
import DuringElection from "./Pages/User/During-Election/DuringElection"
import Footer from "./components/Footer/Footer"

function App() {

    return (

        <>

            <Navbar />
            <Routes>
                <Route path="/admin/before-election" element={<BeforeElection />} />
                <Route path="/user/during-election" element={<DuringElection />} />
            </Routes>
            <Footer />

        </>

    )
}

export default App
