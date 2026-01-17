import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Home,
    Award,
    Calendar,
    FileText,
    Trophy,
    TrendingUp,
    Upload,
    CheckCircle,
    Clock,
    Star,
    Medal,
    Target,
    BookOpen,
    Users,
    Code,
    Briefcase,
    ArrowLeft,
    Plus,
} from "lucide-react"

const StudentDashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("dashboard")

    // Sample data
    const studentData = {
        name: "Arjun Sharma",
        rollNo: "2022CSE001",
        department: "Computer Science Engineering",
        year: "3rd Year",
        cgpa: "8.7",
        attendance: "92%",
        badges: 12,
        streak: 45,
    }

    const recentActivities = [
        {
            id: 1,
            title: "Hackathon Winner - TechFest 2025",
            type: "Competition",
            status: "verified",
            date: "2025-03-15",
            points: 100,
        },
        {
            id: 2,
            title: "AWS Cloud Practitioner Certification",
            type: "Certification",
            status: "pending",
            date: "2025-03-10",
            points: 50,
        },
        {
            id: 3,
            title: "Volunteer at Blood Donation Camp",
            type: "Community Service",
            status: "verified",
            date: "2025-03-08",
            points: 30,
        },
        {
            id: 4,
            title: "React.js Workshop Completion",
            type: "Workshop",
            status: "verified",
            date: "2025-03-05",
            points: 25,
        },
    ]

    const badges = [
        {
            name: "Code Warrior",
            icon: <Code className="w-6 h-6" />,
            color: "bg-neubrutalism-blue",
        },
        {
            name: "Team Player",
            icon: <Users className="w-6 h-6" />,
            color: "bg-neubrutalism-pink",
        },
        {
            name: "Knowledge Seeker",
            icon: <BookOpen className="w-6 h-6" />,
            color: "bg-neubrutalism-yellow",
        },
        {
            name: "Leader",
            icon: <Target className="w-6 h-6" />,
            color: "bg-neubrutalism-purple",
        },
    ]

    const upcomingEvents = [
        { title: "AI/ML Workshop", date: "2025-03-20", type: "Workshop" },
        { title: "Career Fair 2025", date: "2025-03-25", type: "Career Event" },
        { title: "Cultural Fest", date: "2025-04-01", type: "Cultural" },
    ]

    const stats = [
        {
            label: "Total Points",
            value: "1,247",
            icon: <Star className="w-6 h-6" />,
            color: "bg-neubrutalism-yellow",
        },
        {
            label: "Certificates",
            value: "23",
            icon: <Award className="w-6 h-6" />,
            color: "bg-neubrutalism-blue",
        },
        {
            label: "Events Attended",
            value: "47",
            icon: <Calendar className="w-6 h-6" />,
            color: "bg-neubrutalism-pink",
        },
        {
            label: "Leadership Hours",
            value: "156",
            icon: <Trophy className="w-6 h-6" />,
            color: "bg-neubrutalism-purple",
        },
    ]

    const ActivityForm = () => {
        const [formData, setFormData] = useState({
            title: "",
            type: "",
            description: "",
            date: "",
            certificate: null,
        })

        return (
            <div className="neubrutalism-card p-6">
                <h3 className="text-2xl font-bold mb-4">Add New Activity</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Activity Title"
                        className="neubrutalism-input"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                    />
                    <select
                        className="neubrutalism-input"
                        value={formData.type}
                        onChange={(e) =>
                            setFormData({ ...formData, type: e.target.value })
                        }
                    >
                        <option value="">Select Type</option>
                        <option value="competition">Competition</option>
                        <option value="certification">Certification</option>
                        <option value="workshop">Workshop</option>
                        <option value="internship">Internship</option>
                        <option value="community">Community Service</option>
                        <option value="leadership">Leadership</option>
                    </select>
                    <textarea
                        placeholder="Description"
                        className="neubrutalism-input md:col-span-2"
                        rows="3"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                    />
                    <input
                        type="date"
                        className="neubrutalism-input"
                        value={formData.date}
                        onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                        }
                    />
                    <div className="neubrutalism-input flex items-center cursor-pointer">
                        <Upload className="w-5 h-5 mr-2" />
                        <span>Upload Certificate</span>
                        <input type="file" className="hidden" />
                    </div>
                </div>
                <button className="neubrutalism-button-primary mt-4">
                    <Plus className="w-5 h-5 mr-2" />
                    Submit Activity
                </button>
            </div>
        )
    }

    return (
        <div className="min-h-screen p-6 animate-fade-in-up">
            {/* Header */}
            <header className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-text-primary">
                            Student Dashboard
                        </h1>
                        <p className="text-text-secondary font-medium">
                            Welcome back, {studentData.name}!
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="text-center p-4 border-2 border-black bg-brand-surface">
                            <div className="text-2xl font-black text-brand-primary">
                                {studentData.cgpa}
                            </div>
                            <div className="text-xs font-bold text-text-secondary">
                                CGPA
                            </div>
                        </div>
                        <div className="text-center p-4 border-2 border-black bg-brand-surface">
                            <div className="text-2xl font-black text-brand-primary">
                                {studentData.attendance}
                            </div>
                            <div className="text-xs font-bold text-text-secondary">
                                ATTENDANCE
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="max-w-7xl mx-auto mb-8">
                <div className="bg-brand-surface border-2 border-black p-2 flex space-x-2">
                    {[
                        {
                            id: "dashboard",
                            label: "Dashboard",
                            icon: <Home className="w-5 h-5" />,
                        },
                        {
                            id: "activities",
                            label: "Activities",
                            icon: <Calendar className="w-5 h-5" />,
                        },
                        {
                            id: "portfolio",
                            label: "Portfolio",
                            icon: <FileText className="w-5 h-5" />,
                        },
                        {
                            id: "gamification",
                            label: "Achievements",
                            icon: <Trophy className="w-5 h-5" />,
                        },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center px-4 py-2 font-bold border-2 border-black transition-all duration-200 ${
                                activeTab === tab.id
                                    ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                    : "bg-brand-surface hover:bg-indigo-100"
                            }`}
                        >
                            {tab.icon}
                            <span className="ml-2">{tab.label}</span>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                {activeTab === "dashboard" && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-brand-surface neubrutalism-card p-6 text-center"
                                >
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 border-2 border-black`}
                                    >
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-black text-text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-text-secondary">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Actions & Upcoming Events */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-neubrutalism-pink neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                    <Calendar className="w-6 h-6 mr-2" />
                                    Upcoming Events
                                </h3>
                                <div className="space-y-3">
                                    {upcomingEvents.map((event, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-brand-background border-2 border-black"
                                        >
                                            <div>
                                                <div className="font-bold text-sm text-text-primary">
                                                    {event.title}
                                                </div>
                                                <div className="text-xs text-text-secondary">
                                                    {event.type}
                                                </div>
                                            </div>
                                            <div className="text-xs font-bold text-brand-primary">
                                                {event.date}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-neubrutalism-purple neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                    <TrendingUp className="w-6 h-6 mr-2" />
                                    Progress Streak
                                </h3>
                                <div className="text-center">
                                    <div className="text-5xl font-black text-brand-primary mb-2">
                                        {studentData.streak}
                                    </div>
                                    <div className="text-sm font-bold text-text-secondary mb-4">
                                        Days Active
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-4 border-2 border-black">
                                        <div
                                            className="bg-neubrutalism-blue h-full rounded-full border-2 border-black"
                                            style={{ width: "87%" }}
                                        ></div>
                                    </div>
                                    <div className="text-xs font-bold text-text-secondary mt-2">
                                        87% to next milestone
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activities */}
                        <div className="bg-neubrutalism-orange neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                <Clock className="w-6 h-6 mr-2" />
                                Recent Activities
                            </h3>
                            <div className="space-y-3">
                                {recentActivities
                                    .slice(0, 3)
                                    .map((activity) => (
                                        <div
                                            key={activity.id}
                                            className="flex items-center justify-between p-4 bg-brand-background border-2 border-black"
                                        >
                                            <div className="flex items-center">
                                                <div
                                                    className={`w-3 h-3 rounded-full mr-3 ${
                                                        activity.status ===
                                                        "verified"
                                                            ? "bg-green-500"
                                                            : "bg-yellow-500"
                                                    }`}
                                                ></div>
                                                <div>
                                                    <div className="font-bold text-sm text-text-primary">
                                                        {activity.title}
                                                    </div>
                                                    <div className="text-xs text-text-secondary">
                                                        {activity.type} •{" "}
                                                        {activity.date}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <span className="text-xs font-bold text-brand-primary mr-2">
                                                    +{activity.points} pts
                                                </span>
                                                {activity.status ===
                                                "verified" ? (
                                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                                ) : (
                                                    <Clock className="w-5 h-5 text-yellow-500" />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                            <button
                                onClick={() => setActiveTab("activities")}
                                className="neubrutalism-button mt-4 bg-brand-surface"
                            >
                                View All Activities
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "activities" && (
                    <div className="space-y-8">
                        <ActivityForm />

                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Activity History
                            </h3>
                            <div className="space-y-3">
                                {recentActivities.map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex items-center justify-between p-4 bg-brand-background border-2 border-black"
                                    >
                                        <div className="flex items-center">
                                            <div
                                                className={`w-3 h-3 rounded-full mr-3 ${
                                                    activity.status ===
                                                    "verified"
                                                        ? "bg-green-500"
                                                        : "bg-yellow-500"
                                                }`}
                                            ></div>
                                            <div>
                                                <div className="font-bold text-sm text-text-primary">
                                                    {activity.title}
                                                </div>
                                                <div className="text-xs text-text-secondary">
                                                    {activity.type} •{" "}
                                                    {activity.date}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs font-bold text-brand-primary mr-2">
                                                +{activity.points} pts
                                            </span>
                                            {activity.status === "verified" ? (
                                                <CheckCircle className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <Clock className="w-5 h-5 text-yellow-500" />
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "portfolio" && (
                    <div className="space-y-8">
                        <div className="neubrutalism-card p-6 text-center">
                            <FileText className="w-16 h-16 mx-auto mb-4 text-brand-primary" />
                            <h3 className="text-2xl font-bold mb-4">
                                AI-Enhanced Portfolio
                            </h3>
                            <p className="text-gray-600 font-medium mb-6">
                                Generate a professional portfolio from your
                                verified achievements
                            </p>
                            <button
                                onClick={() => navigate("/portfolio")}
                                className="neubrutalism-button-primary"
                            >
                                Generate Portfolio
                            </button>
                        </div>
                    </div>
                )}

                {activeTab === "gamification" && (
                    <div className="space-y-8">
                        {/* Badges */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Medal className="w-6 h-6 mr-2" />
                                Earned Badges ({studentData.badges})
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {badges.map((badge, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-4 bg-brand-surface border-2 border-black"
                                    >
                                        <div
                                            className={`inline-flex items-center justify-center w-12 h-12 ${badge.color} rounded-full mb-2 border-2 border-black`}
                                        >
                                            {badge.icon}
                                        </div>
                                        <div className="text-sm font-bold">
                                            {badge.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Leaderboard */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Trophy className="w-6 h-6 mr-2" />
                                Department Leaderboard
                            </h3>
                            <div className="space-y-3">
                                {[
                                    {
                                        rank: 1,
                                        name: "Priya Singh",
                                        points: 1456,
                                        isUser: false,
                                    },
                                    {
                                        rank: 2,
                                        name: "Arjun Sharma",
                                        points: 1247,
                                        isUser: true,
                                    },
                                    {
                                        rank: 3,
                                        name: "Rahul Kumar",
                                        points: 1198,
                                        isUser: false,
                                    },
                                    {
                                        rank: 4,
                                        name: "Sneha Patel",
                                        points: 1156,
                                        isUser: false,
                                    },
                                    {
                                        rank: 5,
                                        name: "Vikram Rao",
                                        points: 1089,
                                        isUser: false,
                                    },
                                ].map((student) => (
                                    <div
                                        key={student.rank}
                                        className={`flex items-center justify-between p-3 border-2 border-black ${
                                            student.isUser
                                                ? "bg-neubrutalism-yellow"
                                                : "bg-brand-surface"
                                        }`}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 border-2 border-black">
                                                {student.rank}
                                            </div>
                                            <span className="font-bold text-sm">
                                                {student.name}
                                            </span>
                                            {student.isUser && (
                                                <span className="ml-2 text-xs font-bold text-brand-primary">
                                                    (You)
                                                </span>
                                            )}
                                        </div>
                                        <span className="font-bold text-sm text-brand-primary">
                                            {student.points} pts
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default StudentDashboard
