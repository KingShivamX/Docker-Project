import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-brand-background to-brand-background-alt font-sans">
            <Header />
            <main className="flex-grow z-10">{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
