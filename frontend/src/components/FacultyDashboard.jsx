import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    Users,
    Calendar,
    CheckCircle,
    X,
    Plus,
    BarChart3,
    Clock,
    Award,
    FileText,
    Upload,
    Search,
    Filter,
    Download,
    Eye,
    UserCheck,
    Settings,
} from "lucide-react"

const FacultyDashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("overview")

    const facultyData = {
        name: "Dr. Rajesh Kumar",
        department: "Computer Science Engineering",
        role: "Faculty Head",
        studentsManaged: 156,
        pendingValidations: 23,
    }

    const pendingValidations = [
        {
            id: 1,
            studentName: "Arjun Sharma",
            rollNo: "2022CSE001",
            activity: "AWS Cloud Practitioner Certification",
            type: "Certification",
            date: "2025-03-10",
            points: 50,
            certificate: "aws_cert.pdf",
        },
        {
            id: 2,
            studentName: "Priya Singh",
            rollNo: "2022CSE002",
            activity: "Hackathon Participation - TechFest 2025",
            type: "Competition",
            date: "2025-03-15",
            points: 75,
            certificate: "hackathon_cert.pdf",
        },
        {
            id: 3,
            studentName: "Rahul Kumar",
            rollNo: "2022CSE003",
            activity: "React.js Workshop",
            type: "Workshop",
            date: "2025-03-12",
            points: 25,
            certificate: "workshop_cert.pdf",
        },
    ]

    const departmentStats = [
        {
            label: "Total Students",
            value: "156",
            color: "bg-neubrutalism-blue",
        },
        { label: "Active Events", value: "8", color: "bg-neubrutalism-pink" },
        {
            label: "Pending Validations",
            value: "23",
            color: "bg-neubrutalism-yellow",
        },
        {
            label: "This Month Certificates",
            value: "89",
            color: "bg-neubrutalism-purple",
        },
    ]

    const upcomingEvents = [
        {
            id: 1,
            title: "AI/ML Workshop",
            date: "2025-03-20",
            participants: 45,
            status: "confirmed",
        },
        {
            id: 2,
            title: "Industry Expert Talk",
            date: "2025-03-22",
            participants: 30,
            status: "pending",
        },
        {
            id: 3,
            title: "Code Review Session",
            date: "2025-03-25",
            participants: 25,
            status: "confirmed",
        },
    ]

    const topPerformers = [
        {
            name: "Priya Singh",
            rollNo: "2022CSE002",
            points: 1456,
            activities: 34,
        },
        {
            name: "Arjun Sharma",
            rollNo: "2022CSE001",
            points: 1247,
            activities: 28,
        },
        {
            name: "Rahul Kumar",
            rollNo: "2022CSE003",
            points: 1198,
            activities: 31,
        },
        {
            name: "Sneha Patel",
            rollNo: "2022CSE004",
            points: 1156,
            activities: 26,
        },
    ]

    const attendanceData = [
        {
            subject: "Data Structures",
            attendance: "92%",
            totalClasses: 45,
            presentStudents: 144,
        },
        {
            subject: "Algorithms",
            attendance: "89%",
            totalClasses: 42,
            presentStudents: 139,
        },
        {
            subject: "Database Systems",
            attendance: "94%",
            totalClasses: 40,
            presentStudents: 147,
        },
        {
            subject: "Web Development",
            attendance: "87%",
            totalClasses: 38,
            presentStudents: 136,
        },
    ]

    const ValidationPanel = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                        <CheckCircle className="w-6 h-6 mr-2" />
                        Pending Validations ({pendingValidations.length})
                    </h3>
                    <div className="flex space-x-2">
                        <button className="neubrutalism-button text-sm">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </button>
                        <button className="neubrutalism-button text-sm">
                            <Search className="w-4 h-4 mr-2" />
                            Search
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {pendingValidations.map((validation) => (
                        <div
                            key={validation.id}
                            className="border-2 border-black p-4 bg-gray-50"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center mb-2">
                                        <h4 className="font-bold text-sm">
                                            {validation.studentName}
                                        </h4>
                                        <span className="ml-2 text-xs bg-brand-primary text-white px-2 py-1 border border-black">
                                            {validation.rollNo}
                                        </span>
                                    </div>

                                    <div className="mb-2">
                                        <p className="font-medium text-sm">
                                            {validation.activity}
                                        </p>
                                        <div className="flex items-center text-xs text-gray-600 mt-1">
                                            <span className="mr-4">
                                                {validation.type}
                                            </span>
                                            <span className="mr-4">
                                                {validation.date}
                                            </span>
                                            <span className="text-brand-primary font-bold">
                                                +{validation.points} points
                                            </span>
                                        </div>
                                    </div>

                                    <button className="text-xs text-brand-primary font-bold flex items-center hover:underline">
                                        <Eye className="w-4 h-4 mr-1" />
                                        View Certificate (
                                        {validation.certificate})
                                    </button>
                                </div>

                                <div className="flex space-x-2 ml-4">
                                    <button className="bg-green-500 text-white px-3 py-2 border-2 border-black text-sm font-bold hover:bg-green-600 transition-colors">
                                        <CheckCircle className="w-4 h-4 mr-1" />
                                        Approve
                                    </button>
                                    <button className="bg-red-500 text-white px-3 py-2 border-2 border-black text-sm font-bold hover:bg-red-600 transition-colors">
                                        <X className="w-4 h-4 mr-1" />
                                        Reject
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const EventManagement = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                        <Calendar className="w-6 h-6 mr-2" />
                        Event Management
                    </h3>
                    <button
                        onClick={() => navigate("/events")}
                        className="neubrutalism-button-primary"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Create Event
                    </button>
                </div>

                <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                        <div
                            key={event.id}
                            className="border-2 border-black p-4 bg-gray-50"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="font-bold text-sm">
                                        {event.title}
                                    </h4>
                                    <div className="flex items-center text-xs text-gray-600 mt-1">
                                        <span className="mr-4">
                                            {event.date}
                                        </span>
                                        <span className="mr-4">
                                            {event.participants} participants
                                        </span>
                                        <span
                                            className={`px-2 py-1 border border-black text-xs font-bold ${
                                                event.status === "confirmed"
                                                    ? "bg-green-200"
                                                    : "bg-yellow-200"
                                            }`}
                                        >
                                            {event.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="neubrutalism-button text-sm">
                                        Edit
                                    </button>
                                    <button className="text-sm px-3 py-2 border-2 border-black bg-gray-200 hover:bg-gray-300 font-bold">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const AttendanceTracker = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                        <UserCheck className="w-6 h-6 mr-2" />
                        Attendance Management
                    </h3>
                    <button className="neubrutalism-button">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Timetable
                    </button>
                </div>

                <div className="space-y-4">
                    {attendanceData.map((subject, index) => (
                        <div
                            key={index}
                            className="border-2 border-black p-4 bg-gray-50"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-sm">
                                    {subject.subject}
                                </h4>
                                <span className="text-2xl font-black text-brand-primary">
                                    {subject.attendance}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-600">
                                <span>
                                    Total Classes: {subject.totalClasses}
                                </span>
                                <span>
                                    Present Students: {subject.presentStudents}/
                                    {facultyData.studentsManaged}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 mt-2 border-2 border-black">
                                <div
                                    className="bg-neubrutalism-blue h-full rounded-full border border-black"
                                    style={{ width: subject.attendance }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen p-6 animate-fade-in-up">
            {/* Header */}
            <header className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-text-primary">
                            Faculty Dashboard
                        </h1>
                        <p className="text-text-secondary font-medium">
                            Management Panel for the {facultyData.department}
                        </p>
                    </div>
                </div>
            </header>

            {/* Navigation Tabs */}
            <nav className="max-w-7xl mx-auto mb-8">
                <div className="bg-brand-surface border-2 border-black p-2 flex space-x-2">
                    {[
                        {
                            id: "overview",
                            label: "Overview",
                            icon: <BarChart3 className="w-5 h-5" />,
                        },
                        {
                            id: "validations",
                            label: "Validations",
                            icon: <CheckCircle className="w-5 h-5" />,
                        },
                        {
                            id: "events",
                            label: "Events",
                            icon: <Calendar className="w-5 h-5" />,
                        },
                        {
                            id: "attendance",
                            label: "Attendance",
                            icon: <UserCheck className="w-5 h-5" />,
                        },
                        {
                            id: "analytics",
                            label: "Analytics",
                            icon: <BarChart3 className="w-5 h-5" />,
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
                {activeTab === "overview" && (
                    <div className="space-y-8">
                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {departmentStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-brand-surface neubrutalism-card p-6 text-center"
                                >
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 border-2 border-black`}
                                    >
                                        <Users className="w-6 h-6" />
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

                        {/* Quick Actions */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-neubrutalism-blue neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                    <Award className="w-6 h-6 mr-2" />
                                    Top Performers This Month
                                </h3>
                                <div className="space-y-3">
                                    {topPerformers.map((student, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-brand-background border-2 border-black"
                                        >
                                            <div>
                                                <div className="font-bold text-sm text-text-primary">
                                                    {student.name}
                                                </div>
                                                <div className="text-xs text-text-secondary">
                                                    {student.rollNo} •{" "}
                                                    {student.activities}{" "}
                                                    activities
                                                </div>
                                            </div>
                                            <div className="text-sm font-bold text-brand-primary">
                                                {student.points} pts
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-neubrutalism-pink neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                                    <Clock className="w-6 h-6 mr-2" />
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    <button
                                        onClick={() =>
                                            setActiveTab("validations")
                                        }
                                        className="w-full neubrutalism-button-primary text-left"
                                    >
                                        Review {pendingValidations.length}{" "}
                                        Pending Validations
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("events")}
                                        className="w-full neubrutalism-button text-left bg-brand-surface"
                                    >
                                        Create New Event
                                    </button>
                                    <button
                                        onClick={() => navigate("/analytics")}
                                        className="w-full neubrutalism-button text-left bg-brand-surface"
                                    >
                                        Generate Department Report
                                    </button>
                                    <button
                                        onClick={() =>
                                            setActiveTab("attendance")
                                        }
                                        className="w-full neubrutalism-button text-left bg-brand-surface"
                                    >
                                        Upload Attendance Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "validations" && <ValidationPanel />}
                {activeTab === "events" && <EventManagement />}
                {activeTab === "attendance" && <AttendanceTracker />}

                {activeTab === "analytics" && (
                    <div className="bg-brand-surface neubrutalism-card p-6 text-center">
                        <BarChart3 className="w-16 h-16 mx-auto mb-4 text-brand-primary" />
                        <h3 className="text-2xl font-bold mb-4 text-text-primary">
                            Department Analytics
                        </h3>
                        <p className="text-text-secondary font-medium mb-6">
                            Comprehensive analytics dashboard with detailed
                            reports
                        </p>
                        <button
                            onClick={() => navigate("/analytics")}
                            className="neubrutalism-button-primary"
                        >
                            View Detailed Analytics
                        </button>
                    </div>
                )}
            </main>
        </div>
    )
}

export default FacultyDashboard
