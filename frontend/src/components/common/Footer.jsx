import React from "react"

const Footer = () => {
    return (
        <footer className="bg-brand-surface border-t-2 border-black mt-auto">
            <div className="max-w-7xl mx-auto py-6 px-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-sm text-text-secondary font-medium">
                        &copy; {new Date().getFullYear()} Smart Student Hub. All
                        Rights Reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a
                            href="#"
                            className="text-sm font-bold hover:underline text-text-primary"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="text-sm font-bold hover:underline text-text-primary"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="text-sm font-bold hover:underline text-text-primary"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
