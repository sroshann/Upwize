import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useGetAssociations, useGetPositions } from "./hooks/admin/before-election.hook"
import { queryKeys } from "./lib/tanstack"
import { toastStyle } from "./lib/toast.lib"

const Navbar = lazy( () => import('./components/Navbar/Navbar') )
const Footer = lazy( () => import('./components/Footer/Footer') )
const BeforeElection = lazy( () => import('./Pages/Admin/Before-Election/BeforeElection') )
const DuringElection = lazy( () => import('./Pages/User/During-Election/DuringElection') )
const AddParty = lazy( () => import('./Pages/Admin/Add-Party/AddParty') )
const AddPositions = lazy( () => import('./Pages/Admin/Add-Positions/AddPositions') )
const UserBeforeElection = lazy( () => import('./Pages/User/Before-Election/Before-Election') )
const PositionElection = lazy( () => import('./Pages/User/During-Election/PositionElection') )
const ViewCandidate = lazy( () => import('./Pages/User/ViewCandiate/View-Candidate') )
const AddGuidelines = lazy( () => import('./Pages/Admin/Add-Guidelines/AddGuidelines') )
const Login = lazy( () => import('./Pages/Login/login') )
const AddCandidate = lazy( () => import('./Pages/Admin/Add-Candidate/AddCandidate') )

function App() {

    // Avoid unwanted scroll when navigate to different pages
    // Note: It is the default behaviour of react router dom
    const { pathname } = useLocation()
    useEffect(() => { window.scrollTo(0, 0) }, [pathname])

    // Prefetching some data on app load — errors handled globally
    useGetAssociations()
    useGetPositions()

    // Clearing cache on closing the application
    useEffect(() => {

        return () => {

            queryClient.removeQueries({ queryKey: queryKeys.associations() })
            queryClient.removeQueries({ queryKey: queryKeys.positions() })

        }

    }, [])

    return (

        <>

            <Navbar />
            <Suspense >{/* Need to implement a loading state page */}

                <Routes>

                    {/* Admin */}
                    <Route path="/" element={<BeforeElection />} />
                    <Route path="/admin/before-election" element={<BeforeElection />} />
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

            </Suspense>
            <Footer />
            <Toaster />

        </>

    )
}

export default App
