import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    BarChart3,
    PieChart,
    TrendingUp,
    Download,
    FileText,
    Calendar,
    Users,
    Award,
    BookOpen,
    Target,
    Sparkles,
    Filter,
    RefreshCw,
    Eye,
    Settings,
    Share,
    ChevronRight,
    Activity,
    Clock,
    CheckCircle,
    AlertTriangle,
    Trophy,
} from "lucide-react"

const AnalyticsDashboard = () => {
    const navigate = useNavigate()
    const [selectedReport, setSelectedReport] = useState("naac")
    const [timeRange, setTimeRange] = useState("current_year")

    const reportTypes = [
        {
            id: "naac",
            name: "NAAC Report",
            color: "bg-neubrutalism-blue",
            icon: <Award className="w-5 h-5 text-white" />,
            description: "Self Study Report for Accreditation",
        },
        {
            id: "nba",
            name: "NBA Report",
            color: "bg-neubrutalism-pink",
            icon: <Target className="w-5 h-5 text-white" />,
            description: "Program Assessment Report",
        },
        {
            id: "nirf",
            name: "NIRF Ranking",
            color: "bg-neubrutalism-yellow",
            icon: <Trophy className="w-5 h-5 text-black" />,
            description: "National Institutional Ranking",
        },
        {
            id: "department",
            name: "Department Analytics",
            color: "bg-neubrutalism-purple",
            icon: <BarChart3 className="w-5 h-5 text-white" />,
            description: "Departmental Performance Metrics",
        },
    ]

    const analyticsData = {
        overview: {
            totalStudents: 2847,
            totalFaculty: 156,
            totalDepartments: 12,
            activeEvents: 34,
            completionRate: 94,
            growthRate: 12,
        },
        naac: {
            criteria: [
                {
                    name: "Curricular Aspects",
                    score: 92,
                    maxScore: 100,
                    status: "excellent",
                },
                {
                    name: "Teaching-Learning",
                    score: 89,
                    maxScore: 100,
                    status: "very_good",
                },
                {
                    name: "Research & Innovation",
                    score: 87,
                    maxScore: 100,
                    status: "very_good",
                },
                {
                    name: "Infrastructure",
                    score: 91,
                    maxScore: 100,
                    status: "excellent",
                },
                {
                    name: "Student Support",
                    score: 94,
                    maxScore: 100,
                    status: "excellent",
                },
                {
                    name: "Governance",
                    score: 88,
                    maxScore: 100,
                    status: "very_good",
                },
                {
                    name: "Institutional Values",
                    score: 93,
                    maxScore: 100,
                    status: "excellent",
                },
            ],
            overallGrade: "A+",
            cgpa: 3.42,
        },
        nba: {
            programs: [
                {
                    name: "Computer Science Engineering",
                    accreditationStatus: "Accredited",
                    validUntil: "2027",
                    score: 89,
                },
                {
                    name: "Electrical Engineering",
                    accreditationStatus: "Accredited",
                    validUntil: "2026",
                    score: 86,
                },
                {
                    name: "Mechanical Engineering",
                    accreditationStatus: "Under Review",
                    validUntil: "-",
                    score: 82,
                },
                {
                    name: "Civil Engineering",
                    accreditationStatus: "Accredited",
                    validUntil: "2025",
                    score: 84,
                },
            ],
        },
        nirf: {
            ranking: 45,
            previousRanking: 52,
            category: "Engineering",
            parameters: [
                {
                    name: "Teaching, Learning & Resources",
                    score: 78.5,
                    weight: 30,
                },
                {
                    name: "Research and Professional Practice",
                    score: 72.3,
                    weight: 30,
                },
                { name: "Graduation Outcomes", score: 81.2, weight: 20 },
                { name: "Outreach and Inclusivity", score: 69.8, weight: 10 },
                { name: "Perception", score: 75.6, weight: 10 },
            ],
        },
    }

    const recentReports = [
        {
            name: "NAAC SSR 2025",
            type: "NAAC",
            date: "2025-03-01",
            status: "completed",
            downloadUrl: "#",
        },
        {
            name: "NBA Assessment Report - CSE",
            type: "NBA",
            date: "2025-02-28",
            status: "in_progress",
            downloadUrl: "#",
        },
        {
            name: "NIRF Data Collection 2025",
            type: "NIRF",
            date: "2025-02-25",
            status: "completed",
            downloadUrl: "#",
        },
        {
            name: "Department Performance Report",
            type: "Analytics",
            date: "2025-02-20",
            status: "completed",
            downloadUrl: "#",
        },
    ]

    const StudentPerformanceTrends = () => (
        <div className="neubrutalism-card p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2" />
                Student Performance Trends
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-brand-surface border-2 border-black">
                    <div className="text-2xl font-black text-green-600">
                        94%
                    </div>
                    <div className="text-sm font-bold text-gray-600">
                        Overall Completion Rate
                    </div>
                </div>
                <div className="text-center p-4 bg-brand-surface border-2 border-black">
                    <div className="text-2xl font-black text-brand-primary">
                        8.7
                    </div>
                    <div className="text-sm font-bold text-gray-600">
                        Average CGPA
                    </div>
                </div>
                <div className="text-center p-4 bg-brand-surface border-2 border-black">
                    <div className="text-2xl font-black text-yellow-600">
                        87%
                    </div>
                    <div className="text-sm font-bold text-gray-600">
                        Placement Rate
                    </div>
                </div>
            </div>

            {/* Mock Chart Area */}
            <div className="h-64 bg-brand-surface border-2 border-black flex items-center justify-center">
                <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                    <p className="text-gray-600 font-medium">
                        Interactive Performance Charts
                    </p>
                    <p className="text-sm text-gray-500">
                        Showing trends over the past 3 years
                    </p>
                </div>
            </div>
        </div>
    )

    const NAACReport = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                        <Award className="w-6 h-6 mr-2" />
                        NAAC Assessment Report
                    </h3>
                    <div className="flex items-center space-x-3">
                        <div className="text-center">
                            <div className="text-3xl font-black text-brand-primary">
                                {analyticsData.naac.overallGrade}
                            </div>
                            <div className="text-sm font-bold text-gray-600">
                                Overall Grade
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-brand-primary">
                                {analyticsData.naac.cgpa}
                            </div>
                            <div className="text-sm font-bold text-gray-600">
                                CGPA
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {analyticsData.naac.criteria.map((criterion, index) => (
                        <div
                            key={index}
                            className="border-2 border-black p-4 bg-brand-surface"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-sm">
                                    {criterion.name}
                                </h4>
                                <span
                                    className={`px-2 py-1 text-xs font-bold border border-black ${
                                        criterion.status === "excellent"
                                            ? "bg-green-200"
                                            : "bg-blue-200"
                                    }`}
                                >
                                    {criterion.status === "excellent"
                                        ? "Excellent"
                                        : "Very Good"}
                                </span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-2xl font-black text-brand-primary">
                                    {criterion.score}
                                </span>
                                <span className="text-sm text-gray-600">
                                    / {criterion.maxScore}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-black">
                                <div
                                    className="bg-neubrutalism-blue h-full rounded-full border border-black"
                                    style={{ width: `${criterion.score}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="neubrutalism-card p-6">
                <h4 className="text-xl font-bold mb-4">
                    AI-Generated Insights
                </h4>
                <div className="space-y-3">
                    <div className="p-4 bg-green-50 border-2 border-black">
                        <div className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                            <div>
                                <p className="font-bold text-sm text-green-800">
                                    Strengths Identified
                                </p>
                                <p className="text-sm text-green-700">
                                    Excellent student support services and
                                    institutional values demonstrate strong
                                    commitment to holistic education.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 bg-yellow-50 border-2 border-black">
                        <div className="flex items-start">
                            <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                            <div>
                                <p className="font-bold text-sm text-yellow-800">
                                    Areas for Improvement
                                </p>
                                <p className="text-sm text-yellow-700">
                                    Research and innovation activities could be
                                    enhanced with increased industry
                                    collaboration and patent filings.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    const NBAReport = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-2" />
                    NBA Program Accreditation Status
                </h3>

                <div className="space-y-4">
                    {analyticsData.nba.programs.map((program, index) => (
                        <div
                            key={index}
                            className="border-2 border-black p-4 bg-brand-surface"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-sm">
                                    {program.name}
                                </h4>
                                <span
                                    className={`px-3 py-1 text-xs font-bold border border-black ${
                                        program.accreditationStatus ===
                                        "Accredited"
                                            ? "bg-green-200"
                                            : "bg-yellow-200"
                                    }`}
                                >
                                    {program.accreditationStatus}
                                </span>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-xl font-black text-brand-primary">
                                        {program.score}
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Assessment Score
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl font-black text-brand-primary">
                                        {program.validUntil}
                                    </div>
                                    <div className="text-xs font-bold text-gray-600">
                                        Valid Until
                                    </div>
                                </div>
                                <div>
                                    <button className="neubrutalism-button text-xs">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    const NIRFReport = () => (
        <div className="space-y-6">
            <div className="neubrutalism-card p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                        <Trophy className="w-6 h-6 mr-2" />
                        NIRF Ranking Performance
                    </h3>
                    <div className="text-center">
                        <div className="text-4xl font-black text-brand-primary">
                            #{analyticsData.nirf.ranking}
                        </div>
                        <div className="text-sm font-bold text-gray-600">
                            Current Ranking
                        </div>
                        <div className="text-xs text-green-600 font-bold">
                            ↑{" "}
                            {analyticsData.nirf.previousRanking -
                                analyticsData.nirf.ranking}{" "}
                            positions up
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {analyticsData.nirf.parameters.map((param, index) => (
                        <div
                            key={index}
                            className="border-2 border-black p-4 bg-brand-surface"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-sm">
                                    {param.name}
                                </h4>
                                <div className="text-right">
                                    <div className="text-lg font-black text-brand-primary">
                                        {param.score}
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        Weight: {param.weight}%
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-black">
                                <div
                                    className="bg-neubrutalism-yellow h-full rounded-full border border-black"
                                    style={{ width: `${param.score}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen p-6">
            {/* Header */}
            <header className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center justify-between neubrutalism-card p-6">
                    <div className="flex items-center">
                        <button
                            onClick={() => navigate("/admin")}
                            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-3xl font-black text-professional-dark">
                                Analytics & Reports Dashboard
                            </h1>
                            <p className="text-gray-600 font-medium">
                                AI-powered institutional analytics and
                                accreditation reports
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="neubrutalism-button">
                            <RefreshCw className="w-5 h-5 mr-2" />
                            Refresh Data
                        </button>
                        <button className="neubrutalism-button-primary">
                            <Sparkles className="w-5 h-5 mr-2" />
                            Generate Report
                        </button>
                    </div>
                </div>
            </header>

            {/* Quick Stats */}
            <section className="max-w-7xl mx-auto mb-8">
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        {
                            label: "Students",
                            value: analyticsData.overview.totalStudents.toLocaleString(),
                            icon: <Users className="w-6 h-6" />,
                            color: "bg-neubrutalism-blue",
                        },
                        {
                            label: "Faculty",
                            value: analyticsData.overview.totalFaculty,
                            icon: <BookOpen className="w-6 h-6" />,
                            color: "bg-neubrutalism-pink",
                        },
                        {
                            label: "Departments",
                            value: analyticsData.overview.totalDepartments,
                            icon: <Target className="w-6 h-6" />,
                            color: "bg-neubrutalism-yellow",
                        },
                        {
                            label: "Growth Rate",
                            value: `+${analyticsData.overview.growthRate}%`,
                            icon: <TrendingUp className="w-6 h-6" />,
                            color: "bg-neubrutalism-purple",
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="neubrutalism-card p-6 text-center"
                        >
                            <div
                                className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 border-2 border-black`}
                            >
                                {stat.icon}
                            </div>
                            <div className="text-3xl font-black text-professional-dark mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-gray-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Report Navigation */}
            <nav className="max-w-7xl mx-auto mb-8">
                <div className="neubrutalism-card p-2 flex space-x-2">
                    {reportTypes.map((report) => (
                        <button
                            key={report.id}
                            onClick={() => setSelectedReport(report.id)}
                            className={`flex-1 p-4 border-2 border-black transition-all duration-200 ${
                                selectedReport === report.id
                                    ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                    : "bg-brand-surface hover:bg-indigo-100"
                            }`}
                        >
                            <div
                                className={`w-8 h-8 ${report.color} rounded-lg mx-auto mb-2 border-2 border-black flex items-center justify-center`}
                            >
                                {report.icon}
                            </div>
                            <div className="font-bold text-sm">
                                {report.name}
                            </div>
                            <div
                                className={`text-xs transition-opacity ${
                                    selectedReport === report.id
                                        ? "opacity-75"
                                        : "opacity-50"
                                }`}
                            >
                                {report.description}
                            </div>
                        </button>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Report Area */}
                    <div className="lg:col-span-2">
                        {selectedReport === "naac" && <NAACReport />}
                        {selectedReport === "nba" && <NBAReport />}
                        {selectedReport === "nirf" && <NIRFReport />}
                        {selectedReport === "department" && (
                            <StudentPerformanceTrends />
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Recent Reports */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <FileText className="w-6 h-6 mr-2" />
                                Recent Reports
                            </h3>
                            <div className="space-y-3">
                                {recentReports.map((report, index) => (
                                    <div
                                        key={index}
                                        className="p-3 border-2 border-black bg-brand-surface"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h4 className="font-bold text-sm">
                                                    {report.name}
                                                </h4>
                                                <p className="text-xs text-gray-600">
                                                    {report.date}
                                                </p>
                                            </div>
                                            <span
                                                className={`px-2 py-1 text-xs font-bold border border-black ${
                                                    report.status ===
                                                    "completed"
                                                        ? "bg-green-200"
                                                        : "bg-yellow-200"
                                                }`}
                                            >
                                                {report.status}
                                            </span>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="neubrutalism-button text-xs flex-1">
                                                <Eye className="w-3 h-3 mr-1" />
                                                View
                                            </button>
                                            <button className="neubrutalism-button text-xs flex-1">
                                                <Download className="w-3 h-3 mr-1" />
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* AI Insights */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <Sparkles className="w-6 h-6 mr-2 text-yellow-500" />
                                AI Insights
                            </h3>
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 border-2 border-black">
                                    <p className="text-sm font-bold text-blue-800 mb-1">
                                        Trending Up
                                    </p>
                                    <p className="text-xs text-blue-700">
                                        Student engagement in research
                                        activities has increased by 23% this
                                        semester.
                                    </p>
                                </div>
                                <div className="p-3 bg-green-50 border-2 border-black">
                                    <p className="text-sm font-bold text-green-800 mb-1">
                                        Achievement
                                    </p>
                                    <p className="text-xs text-green-700">
                                        Department exceeded placement targets by
                                        15% this year.
                                    </p>
                                </div>
                                <div className="p-3 bg-yellow-50 border-2 border-black">
                                    <p className="text-sm font-bold text-yellow-800 mb-1">
                                        Recommendation
                                    </p>
                                    <p className="text-xs text-yellow-700">
                                        Consider expanding industry
                                        collaboration programs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-2">
                                <button className="w-full neubrutalism-button-primary text-sm">
                                    <Download className="w-4 h-4 mr-2" />
                                    Export All Reports
                                </button>
                                <button className="w-full neubrutalism-button text-sm">
                                    <Share className="w-4 h-4 mr-2" />
                                    Share Dashboard
                                </button>
                                <button className="w-full neubrutalism-button text-sm">
                                    <Settings className="w-4 h-4 mr-2" />
                                    Configure Alerts
                                </button>
                                <button className="w-full neubrutalism-button text-sm">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Schedule Reports
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AnalyticsDashboard
