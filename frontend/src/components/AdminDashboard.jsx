import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    Building,
    Users,
    UserPlus,
    BarChart3,
    FileText,
    Plus,
    Settings,
    Shield,
    Award,
    TrendingUp,
    Calendar,
    Download,
    Eye,
    Edit,
    Trash2,
    Search,
} from "lucide-react"

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("overview")

    const adminData = {
        name: "Prof. Dr. Anita Sharma",
        role: "Institute Administrator",
        institute: "Indian Institute of Technology Delhi",
        totalDepartments: 12,
        totalFaculty: 156,
        totalStudents: 2847,
    }

    const instituteStats = [
        {
            label: "Total Students",
            value: "2,847",
            color: "bg-neubrutalism-blue",
            change: "+12%",
        },
        {
            label: "Departments",
            value: "12",
            color: "bg-neubrutalism-pink",
            change: "+2%",
        },
        {
            label: "Faculty Members",
            value: "156",
            color: "bg-neubrutalism-yellow",
            change: "+8%",
        },
        {
            label: "Active Events",
            value: "34",
            color: "bg-neubrutalism-purple",
            change: "+23%",
        },
    ]

    const departments = [
        {
            id: 1,
            name: "Computer Science Engineering",
            head: "Dr. Rajesh Kumar",
            students: 456,
            faculty: 23,
            activeEvents: 8,
            status: "active",
            lastReport: "2025-03-01",
        },
        {
            id: 2,
            name: "Electrical Engineering",
            head: "Dr. Priya Singh",
            students: 398,
            faculty: 19,
            activeEvents: 6,
            status: "active",
            lastReport: "2025-02-28",
        },
        {
            id: 3,
            name: "Mechanical Engineering",
            head: "Dr. Vikram Rao",
            students: 423,
            faculty: 21,
            activeEvents: 5,
            status: "active",
            lastReport: "2025-03-02",
        },
        {
            id: 4,
            name: "Civil Engineering",
            head: "Dr. Sneha Patel",
            students: 367,
            faculty: 18,
            activeEvents: 4,
            status: "active",
            lastReport: "2025-02-29",
        },
    ]

    const recentReports = [
        {
            type: "NAAC",
            department: "All Departments",
            date: "2025-03-01",
            status: "completed",
        },
        {
            type: "NBA",
            department: "Computer Science",
            date: "2025-02-28",
            status: "in_progress",
        },
        {
            type: "NIRF",
            department: "All Departments",
            date: "2025-02-25",
            status: "completed",
        },
        {
            type: "Department Analytics",
            department: "Electrical Engineering",
            date: "2025-02-24",
            status: "completed",
        },
    ]

    const pendingActions = [
        {
            action: "Assign Faculty Head for Physics Department",
            priority: "high",
            date: "2025-03-10",
        },
        {
            action: "Review MBA Department Performance",
            priority: "medium",
            date: "2025-03-12",
        },
        {
            action: "Approve New Event Guidelines",
            priority: "low",
            date: "2025-03-15",
        },
        {
            action: "Update Institute Policies",
            priority: "medium",
            date: "2025-03-18",
        },
    ]

    const DepartmentManagement = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                        <Building className="w-6 h-6 mr-2" />
                        Department Management
                    </h3>
                    <button className="neubrutalism-button-primary">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Department
                    </button>
                </div>

                <div className="space-y-4">
                    {departments.map((dept) => (
                        <div
                            key={dept.id}
                            className="border-2 border-black p-6 bg-brand-surface"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    <h4 className="text-lg font-bold text-professional-dark">
                                        {dept.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 font-medium">
                                        Head: {dept.head}
                                    </p>
                                    <div className="flex items-center mt-2 space-x-4 text-xs text-gray-600">
                                        <span>{dept.students} Students</span>
                                        <span>{dept.faculty} Faculty</span>
                                        <span>
                                            {dept.activeEvents} Active Events
                                        </span>
                                        <span>
                                            Last Report: {dept.lastReport}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="neubrutalism-button text-sm">
                                        <Eye className="w-4 h-4 mr-1" />
                                        View
                                    </button>
                                    <button className="neubrutalism-button text-sm">
                                        <Edit className="w-4 h-4 mr-1" />
                                        Edit
                                    </button>
                                    <button className="text-sm px-3 py-2 border-2 border-black bg-red-500 text-white hover:bg-red-600 font-bold">
                                        <Settings className="w-4 h-4 mr-1" />
                                        Manage
                                    </button>
                                </div>
                            </div>

                            {/* Quick Stats for Department */}
                            <div className="grid grid-cols-4 gap-4 mt-4">
                                <div className="text-center p-3 bg-brand-surface border-2 border-black">
                                    <div className="text-xl font-black text-brand-primary">
                                        {dept.students}
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Students
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-brand-surface border-2 border-black">
                                    <div className="text-xl font-black text-brand-primary">
                                        {dept.faculty}
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Faculty
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-brand-surface border-2 border-black">
                                    <div className="text-xl font-black text-brand-primary">
                                        {dept.activeEvents}
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Events
                                    </div>
                                </div>
                                <div className="text-center p-3 bg-brand-surface border-2 border-black">
                                    <div className="text-xl font-black text-green-600">
                                        98%
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Performance
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const FacultyManagement = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                        <Users className="w-6 h-6 mr-2" />
                        Faculty Management
                    </h3>
                    <div className="flex space-x-2">
                        <button className="neubrutalism-button">
                            <Search className="w-4 h-4 mr-2" />
                            Search
                        </button>
                        <button className="neubrutalism-button-primary">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Add Faculty
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {departments.map((dept) => (
                        <div
                            key={dept.id}
                            className="border-2 border-black p-4 bg-brand-surface"
                        >
                            <h4 className="font-bold text-sm mb-2">
                                {dept.name}
                            </h4>
                            <div className="text-center p-4 bg-brand-surface border-2 border-black mb-3">
                                <div className="text-2xl font-black text-brand-primary">
                                    {dept.faculty}
                                </div>
                                <div className="text-xs font-bold text-gray-600">
                                    Faculty Members
                                </div>
                            </div>
                            <div className="text-xs text-gray-600 mb-3">
                                <strong>Head:</strong> {dept.head}
                            </div>
                            <button className="w-full neubrutalism-button text-sm">
                                Manage Faculty
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const ReportsAndAnalytics = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                        <FileText className="w-6 h-6 mr-2" />
                        AI-Powered Reports
                    </h3>
                    <button
                        onClick={() => navigate("/analytics")}
                        className="neubrutalism-button-primary"
                    >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Generate New Report
                    </button>
                </div>

                {/* Report Types */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {[
                        {
                            type: "NAAC Report",
                            description:
                                "Self Study Report for NAAC accreditation",
                            color: "bg-neubrutalism-blue",
                            lastGenerated: "March 1, 2025",
                        },
                        {
                            type: "NBA Report",
                            description: "Program-wise assessment reports",
                            color: "bg-neubrutalism-pink",
                            lastGenerated: "February 28, 2025",
                        },
                        {
                            type: "NIRF Ranking",
                            description:
                                "National Institutional Ranking Framework",
                            color: "bg-neubrutalism-yellow",
                            lastGenerated: "February 25, 2025",
                        },
                    ].map((report, index) => (
                        <div
                            key={index}
                            className="border-2 border-black p-4 bg-brand-surface"
                        >
                            <div
                                className={`w-full h-3 ${report.color} border-2 border-black mb-4`}
                            ></div>
                            <h4 className="font-bold text-sm mb-2">
                                {report.type}
                            </h4>
                            <p className="text-xs text-gray-600 mb-3">
                                {report.description}
                            </p>
                            <div className="text-xs text-gray-500 mb-3">
                                Last: {report.lastGenerated}
                            </div>
                            <button className="w-full neubrutalism-button text-sm">
                                <Download className="w-4 h-4 mr-2" />
                                Generate Report
                            </button>
                        </div>
                    ))}
                </div>

                {/* Recent Reports */}
                <h4 className="text-lg font-bold mb-4">Recent Reports</h4>
                <div className="space-y-3">
                    {recentReports.map((report, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 border-2 border-black bg-brand-surface"
                        >
                            <div>
                                <h5 className="font-bold text-sm">
                                    {report.type} Report
                                </h5>
                                <div className="text-xs text-gray-600">
                                    {report.department} • {report.date}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span
                                    className={`px-2 py-1 text-xs font-bold border border-black ${
                                        report.status === "completed"
                                            ? "bg-green-200"
                                            : "bg-yellow-200"
                                    }`}
                                >
                                    {report.status}
                                </span>
                                <button className="neubrutalism-button text-sm">
                                    <Download className="w-4 h-4 mr-1" />
                                    Download
                                </button>
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
                            Institute Administration
                        </h1>
                        <p className="text-text-secondary font-medium">
                            Global dashboard for institute-wide management
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
                            id: "departments",
                            label: "Departments",
                            icon: <Building className="w-5 h-5" />,
                        },
                        {
                            id: "faculty",
                            label: "Faculty",
                            icon: <Users className="w-5 h-5" />,
                        },
                        {
                            id: "reports",
                            label: "Reports",
                            icon: <FileText className="w-5 h-5" />,
                        },
                        {
                            id: "settings",
                            label: "Settings",
                            icon: <Settings className="w-5 h-5" />,
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
                        {/* Institute Stats */}
                        <div className="grid md:grid-cols-4 gap-6">
                            {instituteStats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="neubrutalism-card p-6 text-center hover:scale-105 transition-transform"
                                >
                                    <div
                                        className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 border-2 border-black`}
                                    >
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div className="text-3xl font-black text-text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-bold text-text-secondary mb-1">
                                        {stat.label}
                                    </div>
                                    <div className="text-xs font-bold text-green-600">
                                        {stat.change} this month
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dashboard Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Quick Actions */}
                            <div className="bg-neubrutalism-yellow neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-text-primary">
                                    <Shield className="w-6 h-6 mr-2" />
                                    Quick Actions
                                </h3>
                                <div className="space-y-3">
                                    <button
                                        onClick={() =>
                                            setActiveTab("departments")
                                        }
                                        className="w-full neubrutalism-button-primary text-left"
                                    >
                                        Manage Departments (
                                        {adminData.totalDepartments})
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("faculty")}
                                        className="w-full neubrutalism-button text-left bg-brand-surface"
                                    >
                                        Faculty Management (
                                        {adminData.totalFaculty})
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("reports")}
                                        className="w-full neubrutalism-button text-left bg-brand-surface"
                                    >
                                        Generate AI Reports
                                    </button>
                                    <button className="w-full neubrutalism-button text-left bg-brand-surface">
                                        Institute Settings & Policies
                                    </button>
                                </div>
                            </div>

                            {/* Pending Actions */}
                            <div className="bg-neubrutalism-green neubrutalism-card p-6">
                                <h3 className="text-xl font-bold mb-4 flex items-center text-text-primary">
                                    <Calendar className="w-6 h-6 mr-2" />
                                    Pending Actions
                                </h3>
                                <div className="space-y-3">
                                    {pendingActions.map((action, index) => (
                                        <div
                                            key={index}
                                            className="p-3 border-2 border-black bg-brand-background"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <p className="font-medium text-sm text-text-primary">
                                                        {action.action}
                                                    </p>
                                                    <p className="text-xs text-text-secondary mt-1">
                                                        Due: {action.date}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`px-2 py-1 text-xs font-bold border border-black ${
                                                        action.priority ===
                                                        "high"
                                                            ? "bg-red-200"
                                                            : action.priority ===
                                                              "medium"
                                                            ? "bg-yellow-200"
                                                            : "bg-green-200"
                                                    }`}
                                                >
                                                    {action.priority}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Department Overview */}
                        <div className="bg-neubrutalism-blue neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center text-text-primary">
                                <Building className="w-6 h-6 mr-2" />
                                Department Overview
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {departments.slice(0, 4).map((dept) => (
                                    <div
                                        key={dept.id}
                                        className="border-2 border-black p-4 bg-brand-background"
                                    >
                                        <h4 className="font-bold text-sm mb-2 text-text-primary">
                                            {dept.name}
                                        </h4>
                                        <div className="space-y-2 text-xs text-text-secondary">
                                            <div>Head: {dept.head}</div>
                                            <div>Students: {dept.students}</div>
                                            <div>Faculty: {dept.faculty}</div>
                                            <div>
                                                Events: {dept.activeEvents}
                                            </div>
                                        </div>
                                        <button className="w-full mt-3 neubrutalism-button text-sm bg-brand-surface">
                                            View Details
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "departments" && <DepartmentManagement />}
                {activeTab === "faculty" && <FacultyManagement />}
                {activeTab === "reports" && <ReportsAndAnalytics />}

                {activeTab === "settings" && (
                    <div className="neubrutalism-card p-6 text-center">
                        <Settings className="w-16 h-16 mx-auto mb-4 text-brand-primary" />
                        <h3 className="text-2xl font-bold mb-4">
                            Institute Settings
                        </h3>
                        <p className="text-gray-600 font-medium mb-6">
                            Configure institute-wide policies, user roles, and
                            system settings
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <button className="neubrutalism-button-primary">
                                User Role Management
                            </button>
                            <button className="neubrutalism-button">
                                System Configuration
                            </button>
                            <button className="neubrutalism-button">
                                Policy Settings
                            </button>
                            <button className="neubrutalism-button">
                                Data Export/Import
                            </button>
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

export default AdminDashboard
