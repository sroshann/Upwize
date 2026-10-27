import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useGetAssociations } from "./hooks/admin/before-election.hook"

import Navbar from "./components/Navbar/Navbar"
import BeforeElection from "./Pages/Admin/Before-Election/BeforeElection"
import DuringElection from "./Pages/User/During-Election/DuringElection"
import AddParty from "./Pages/Admin/Add-Party/AddParty"
import AddPositions from "./Pages/Admin/Add-Positions/AddPositions"
import UserBeforeElection from "./Pages/User/Before-Election/Before-Election"
<<<<<<< HEAD
import PositionElection from './Pages/User/During-Election/PositionElection'
=======
import ViewCandidate from "./Pages/User/ViewCandiate/View-Candidate"
>>>>>>> 73fb72add416d088dacb6f49e62810270406d19f
import Footer from "./components/Footer/Footer"
import AddGuidelines from "./Pages/Admin/Add-Guidelines/AddGuidelines"
import Login from "./Pages/Login/login"
import AddCandidate from "./Pages/Admin/Add-Candidate/AddCandidate"

function App() {

    // Avoid unwanted scroll when navigate to different pages
    // Note: It is the default behaviour of react router dom
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])
    useGetAssociations() // Prefetch associations on app load — errors handled globally

    return (

        <>

            <Navbar />
            <Routes>

                {/* Admin */}
                {/* <Route path="/admin/before-election" element={<BeforeElection />} /> */}
                <Route path="/" element={<BeforeElection />} />
                <Route path="/admin/add-party" element={<AddParty />} />
                <Route path="/admin/add-position" element={<AddPositions />} />
                <Route path="/admin/add-guidelines" element={<AddGuidelines />} />
                <Route path="/admin/add-candidate" element={<AddCandidate />} />

                {/* User */}
                <Route path="/user/before-election" element={<UserBeforeElection />} />
                <Route path="/user/before-election/view-candidate" element={<ViewCandidate />} />
                <Route path="/user/during-election" element={<DuringElection />} />
                <Route path="user/during-election/:positionId" element={<PositionElection />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />

            </Routes>
            <Footer />
            <Toaster />

        </>

    )
}

export default App
