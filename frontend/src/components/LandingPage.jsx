import React from "react"
import { useNavigate } from "react-router-dom"
import {
    School,
    User,
    BarChart,
    FileText,
    ArrowRight,
    BookOpen,
    Users,
    Shield,
} from "lucide-react"

const LandingPage = () => {
    const navigate = useNavigate()

    const roles = [
        {
            name: "Student",
            icon: (
                <User className="w-12 h-12 text-brand-primary group-hover:text-white transition-colors" />
            ),
            description:
                "Track activities, build your portfolio, and view achievements.",
            path: "/student",
        },
        {
            name: "Faculty Head",
            icon: (
                <BookOpen className="w-12 h-12 text-brand-primary group-hover:text-white transition-colors" />
            ),
            description:
                "Manage events, validate student activities, and track progress.",
            path: "/faculty",
        },
        {
            name: "Institute Admin",
            icon: (
                <Shield className="w-12 h-12 text-brand-primary group-hover:text-white transition-colors" />
            ),
            description:
                "Oversee departments, manage faculty, and generate reports.",
            path: "/admin",
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-brand-background to-brand-background-alt font-sans flex flex-col items-center justify-center p-8 animate-fade-in-up">
            <main className="max-w-6xl w-full">
                <header className="text-center mb-12">
                    <div className="inline-block bg-brand-yellow p-4 border-2 border-black shadow-neubrutalism-sm mb-4">
                        <School className="w-16 h-16 text-text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-text-primary mb-4">
                        Smart Student Hub
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
                        An integrated platform for academic excellence,
                        portfolio management, and institutional analytics,
                        designed for SIH 2025.
                    </p>
                </header>

                <section className="bg-neubrutalism-orange border-4 border-black shadow-neubrutalism-lg">
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-center text-text-primary mb-8">
                            Select Your Role to Get Started
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {roles.map((role) => (
                                <div
                                    key={role.name}
                                    onClick={() => navigate(role.path)}
                                    className={`group border-4 border-black p-8 text-center cursor-pointer hover:shadow-neubrutalism-lg hover:-translate-y-2 hover:-translate-x-2 transition-all ${
                                        role.name === "Student"
                                            ? "bg-neubrutalism-blue hover:bg-brand-primary"
                                            : role.name === "Faculty Head"
                                            ? "bg-neubrutalism-green hover:bg-brand-primary"
                                            : "bg-neubrutalism-yellow hover:bg-brand-primary"
                                    }`}
                                >
                                    <div className="mb-4 inline-block">
                                        {role.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-text-primary group-hover:text-white mb-2">
                                        {role.name}
                                    </h3>
                                    <p className="text-text-secondary group-hover:text-indigo-100 mb-6">
                                        {role.description}
                                    </p>
                                    <div className="flex items-center justify-center font-bold text-text-primary group-hover:text-white">
                                        <span>Go to Dashboard</span>
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default LandingPage
