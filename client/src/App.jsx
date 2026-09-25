import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar"
import BeforeElection from "./Pages/Admin/Before-Election/BeforeElection"
import DuringElection from "./Pages/User/During-Election/DuringElection"
import UserBeforeElection from "./Pages/User/Before-Election/Before-Election"
import Footer from "./components/Footer/Footer"

function App() {

    return (

        <>

            <Navbar />
            <Routes>
                <Route path="/admin/before-election" element={<BeforeElection />} />
                <Route path="/user/before-election" element={<UserBeforeElection />} />
                <Route path="/user/during-election" element={<DuringElection />} />
            </Routes>
            <Footer />

        </>

    )
}

export default App
