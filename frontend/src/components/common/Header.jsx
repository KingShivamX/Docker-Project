import React from "react"
import { useLocation } from "react-router-dom"
import { Bell, UserCircle, LogOut } from "lucide-react"

const Header = () => {
    const location = useLocation()

    // Determine user role based on the current path
    const getUser = () => {
        const path = location.pathname
        if (path.startsWith("/student") || path.startsWith("/portfolio")) {
            return { name: "Arjun Sharma", role: "Student" }
        }
        if (path.startsWith("/faculty") || path.startsWith("/events")) {
            return { name: "Dr. Rajesh Kumar", role: "Faculty Head" }
        }
        if (path.startsWith("/admin") || path.startsWith("/analytics")) {
            return { name: "Dr. Anita Sharma", role: "Institute Admin" }
        }
        return { name: "Guest User", role: "Viewer" } // Fallback
    }

    const user = getUser()

    return (
        <header className="bg-brand-surface border-b-2 border-black">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo and App Name */}
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-brand-yellow border-2 border-black flex items-center justify-center font-bold text-xl">
                            SH
                        </div>
                        <h1 className="text-2xl font-black text-text-primary">
                            Smart Student Hub
                        </h1>
                    </div>

                    {/* User Info and Actions */}
                    <div className="flex items-center space-x-6">
                        <button
                            onClick={() => (window.location.href = "/")}
                            className="neubrutalism-button text-sm"
                        >
                            🏠 Home
                        </button>
                        <button className="relative p-2 hover:bg-brand-background rounded-lg transition-colors">
                            <Bell className="w-6 h-6" />
                            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-brand-accent ring-2 ring-white" />
                        </button>

                        <div className="flex items-center space-x-3">
                            <UserCircle className="w-10 h-10 text-gray-400" />
                            <div>
                                <p className="font-bold text-sm text-text-primary">
                                    {user.name}
                                </p>
                                <p className="text-xs text-text-secondary font-medium">
                                    {user.role}
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center font-bold text-sm p-2 hover:bg-brand-background rounded-lg transition-colors">
                            <LogOut className="w-5 h-5 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
