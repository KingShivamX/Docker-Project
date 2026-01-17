import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import StudentDashboard from "./components/StudentDashboard"
import FacultyDashboard from "./components/FacultyDashboard"
import AdminDashboard from "./components/AdminDashboard"
import StudentPortfolio from "./components/StudentPortfolio"
import EventManagement from "./components/EventManagement"
import AnalyticsDashboard from "./components/AnalyticsDashboard"
import Layout from "./components/common/Layout"
import BackendStatus from "./components/common/BackendStatus"

function App() {
    return (
        <Router>
            <div className="App">
                {/* Backend Status Indicator - appears on all pages */}
                <BackendStatus />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route
                        path="/student"
                        element={
                            <Layout>
                                <StudentDashboard />
                            </Layout>
                        }
                    />
                    <Route
                        path="/faculty"
                        element={
                            <Layout>
                                <FacultyDashboard />
                            </Layout>
                        }
                    />
                    <Route
                        path="/admin"
                        element={
                            <Layout>
                                <AdminDashboard />
                            </Layout>
                        }
                    />
                    <Route
                        path="/portfolio"
                        element={
                            <Layout>
                                <StudentPortfolio />
                            </Layout>
                        }
                    />
                    <Route
                        path="/events"
                        element={
                            <Layout>
                                <EventManagement />
                            </Layout>
                        }
                    />
                    <Route
                        path="/analytics"
                        element={
                            <Layout>
                                <AnalyticsDashboard />
                            </Layout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default App
