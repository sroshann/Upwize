import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/Navbar/Navbar"
import BeforeElection from "./Pages/Admin/Before-Election/BeforeElection"
import DuringElection from "./Pages/User/During-Election/DuringElection"
import AddParty from "./Pages/Admin/Add-Party/AddParty"
import AddPositions from "./Pages/Admin/Add-Positions/AddPositions"
import UserBeforeElection from "./Pages/User/Before-Election/Before-Election"
import Footer from "./components/Footer/Footer"

function App() {

    // Avoid unwanted scroll when navigate to different pages
    // Note: It is the default behaviour of react router dom
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])

    return (

        <>

            <Navbar />
            <Routes>

                {/* Admin */}
                <Route path="/admin/before-election" element={<BeforeElection />} />
                <Route path="/admin/add-party" element={<AddParty />} />
                <Route path="/admin/add-position" element={<AddPositions />} />

                {/* User */}
                <Route path="/user/before-election" element={<UserBeforeElection />} />
                <Route path="/user/during-election" element={<DuringElection />} />

            </Routes>
            <Footer />

        </>

    )
}

export default App
