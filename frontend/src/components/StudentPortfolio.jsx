import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    Download,
    Eye,
    Sparkles,
    FileText,
    Award,
    Calendar,
    Code,
    Briefcase,
    GraduationCap,
    Star,
    MapPin,
    Mail,
    Phone,
    Globe,
    Linkedin,
    Github,
    ExternalLink,
    Settings,
    RefreshCw,
} from "lucide-react"

const StudentPortfolio = () => {
    const navigate = useNavigate()
    const [selectedTemplate, setSelectedTemplate] = useState("modern")
    const [previewMode, setPreviewMode] = useState("web")

    const studentData = {
        name: "Arjun Sharma",
        rollNo: "2022CSE001",
        department: "Computer Science Engineering",
        year: "3rd Year",
        cgpa: "8.7",
        email: "arjun.sharma@student.edu",
        phone: "+91 9876543210",
        location: "New Delhi, India",
        linkedin: "linkedin.com/in/arjun-sharma",
        github: "github.com/arjun-sharma",
        portfolio: "arjunsharma.dev",
    }

    const achievements = [
        {
            title: "Winner - TechFest 2024 Hackathon",
            type: "Competition",
            date: "March 2024",
            description:
                "Built an AI-powered study assistant using React and OpenAI API",
            skills: ["React", "Node.js", "OpenAI API", "MongoDB"],
            verified: true,
        },
        {
            title: "AWS Cloud Practitioner Certification",
            type: "Certification",
            date: "February 2024",
            description:
                "Foundational understanding of AWS Cloud services and architecture",
            skills: ["AWS", "Cloud Computing", "DevOps"],
            verified: true,
        },
        {
            title: "Full Stack Web Development Internship",
            type: "Internship",
            date: "Summer 2023",
            description:
                "Developed and maintained web applications using MERN stack at TechCorp Solutions",
            skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
            verified: true,
        },
        {
            title: "Google Code-in Participant",
            type: "Competition",
            date: "December 2023",
            description:
                "Contributed to open-source projects and completed coding challenges",
            skills: ["Python", "Git", "Open Source"],
            verified: true,
        },
        {
            title: "React.js Advanced Workshop",
            type: "Workshop",
            date: "January 2024",
            description:
                "Advanced concepts in React including state management and performance optimization",
            skills: ["React", "Redux", "Performance Optimization"],
            verified: true,
        },
    ]

    const skills = {
        "Programming Languages": [
            "JavaScript",
            "Python",
            "Java",
            "C++",
            "TypeScript",
        ],
        "Web Technologies": [
            "React",
            "Node.js",
            "Express",
            "HTML5",
            "CSS3",
            "REST APIs",
        ],
        Databases: ["MongoDB", "MySQL", "PostgreSQL"],
        "Tools & Platforms": ["Git", "AWS", "Docker", "VS Code", "Postman"],
        "Soft Skills": [
            "Leadership",
            "Team Collaboration",
            "Problem Solving",
            "Communication",
        ],
    }

    const templates = [
        {
            id: "modern",
            name: "Modern Professional",
            preview: "Clean and contemporary design",
        },
        {
            id: "creative",
            name: "Creative Tech",
            preview: "Bold and innovative layout",
        },
        {
            id: "minimal",
            name: "Minimal Elite",
            preview: "Simple and elegant design",
        },
        {
            id: "academic",
            name: "Academic Scholar",
            preview: "Traditional academic format",
        },
    ]

    const AIEnhancementPanel = () => (
        <div className="neubrutalism-card p-6 mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-2 text-yellow-500" />
                AI Portfolio Enhancement
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <h4 className="font-bold text-sm">Enhancement Options:</h4>
                    <div className="space-y-2">
                        {[
                            "Optimize skill descriptions for ATS systems",
                            "Generate compelling project summaries",
                            "Create industry-specific keywords",
                            "Suggest portfolio improvements",
                            "Generate achievement highlights",
                        ].map((option, index) => (
                            <label key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="mr-2"
                                />
                                <span className="text-sm font-medium">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-bold text-sm">Target Industry:</h4>
                    <select className="neubrutalism-input w-full">
                        <option>Software Development</option>
                        <option>Data Science</option>
                        <option>Cybersecurity</option>
                        <option>DevOps Engineering</option>
                        <option>Product Management</option>
                    </select>

                    <button className="neubrutalism-button-primary w-full">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Apply AI Enhancements
                    </button>
                </div>
            </div>
        </div>
    )

    const PortfolioPreview = () => (
        <div className="neubrutalism-card p-8 bg-white">
            {/* Header Section */}
            <div className="border-b-4 border-black pb-6 mb-6">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-4xl font-black text-text-primary mb-2">
                            {studentData.name}
                        </h1>
                        <p className="text-lg font-bold text-gray-700 mb-3">
                            {studentData.department} Student | CGPA:{" "}
                            {studentData.cgpa}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <Mail className="w-4 h-4 mr-1" />
                                {studentData.email}
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-1" />
                                {studentData.phone}
                            </div>
                            <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {studentData.location}
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="w-24 h-24 bg-gradient-to-br from-neubrutalism-blue to-neubrutalism-purple border-4 border-black rounded-xl flex items-center justify-center">
                            <GraduationCap className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-black mb-4 flex items-center">
                    <Code className="w-6 h-6 mr-2" />
                    Technical Skills
                </h2>
                <div className="space-y-4">
                    {Object.entries(skills).map(([category, skillList]) => (
                        <div key={category}>
                            <h3 className="font-bold text-sm text-gray-700 mb-2">
                                {category}:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillList.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-neubrutalism-yellow border-2 border-black text-sm font-bold"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Achievements Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-black mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-2" />
                    Key Achievements
                </h2>
                <div className="space-y-6">
                    {achievements.slice(0, 3).map((achievement, index) => (
                        <div
                            key={index}
                            className="border-l-4 border-brand-primary pl-4"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="font-bold text-lg text-text-primary">
                                    {achievement.title}
                                </h3>
                                <div className="flex items-center">
                                    <span className="text-sm text-gray-600 mr-2">
                                        {achievement.date}
                                    </span>
                                    {achievement.verified && (
                                        <Star className="w-4 h-4 text-yellow-500" />
                                    )}
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                                {achievement.description}
                            </p>
                            <div className="flex flex-wrap gap-1">
                                {achievement.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-2 py-1 bg-gray-200 border border-black text-xs font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Links Section */}
            <div className="border-t-4 border-black pt-6">
                <h2 className="text-2xl font-black mb-4">Connect With Me</h2>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 bg-neubrutalism-blue border-2 border-black font-bold text-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
                    >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 bg-neubrutalism-pink border-2 border-black font-bold text-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                    </a>
                    <a
                        href="#"
                        className="flex items-center px-4 py-2 bg-neubrutalism-yellow border-2 border-black font-bold text-sm hover:translate-x-1 hover:translate-y-1 transition-transform"
                    >
                        <Globe className="w-4 h-4 mr-2" />
                        Portfolio
                    </a>
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
                            onClick={() => navigate("/student")}
                            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-3xl font-black text-text-primary">
                                AI Portfolio Generator
                            </h1>
                            <p className="text-gray-600 font-medium">
                                Create a professional portfolio from your
                                verified achievements
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-2">
                        <button className="neubrutalism-button">
                            <Settings className="w-5 h-5 mr-2" />
                            Customize
                        </button>
                        <button className="neubrutalism-button-primary">
                            <Download className="w-5 h-5 mr-2" />
                            Download PDF
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Sidebar - Controls */}
                    <div className="space-y-6">
                        {/* Template Selection */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4 flex items-center">
                                <FileText className="w-6 h-6 mr-2" />
                                Portfolio Templates
                            </h3>
                            <div className="space-y-3">
                                {templates.map((template) => (
                                    <button
                                        key={template.id}
                                        onClick={() =>
                                            setSelectedTemplate(template.id)
                                        }
                                        className={`w-full p-3 border-2 border-black text-left transition-all duration-200 ${
                                            selectedTemplate === template.id
                                                ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                                : "bg-white hover:bg-gray-50"
                                        }`}
                                    >
                                        <div className="font-bold text-sm">
                                            {template.name}
                                        </div>
                                        <div className="text-xs opacity-75">
                                            {template.preview}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Preview Mode */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Preview Mode
                            </h3>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setPreviewMode("web")}
                                    className={`flex-1 p-2 border-2 border-black font-bold text-sm ${
                                        previewMode === "web"
                                            ? "bg-brand-primary text-white"
                                            : "bg-white"
                                    }`}
                                >
                                    Web View
                                </button>
                                <button
                                    onClick={() => setPreviewMode("pdf")}
                                    className={`flex-1 p-2 border-2 border-black font-bold text-sm ${
                                        previewMode === "pdf"
                                            ? "bg-brand-primary text-white"
                                            : "bg-white"
                                    }`}
                                >
                                    PDF View
                                </button>
                            </div>
                        </div>

                        {/* Statistics */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Portfolio Stats
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                        Total Achievements
                                    </span>
                                    <span className="font-bold text-brand-primary">
                                        {achievements.length}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                        Verified Items
                                    </span>
                                    <span className="font-bold text-green-600">
                                        {
                                            achievements.filter(
                                                (a) => a.verified
                                            ).length
                                        }
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                        Total Skills
                                    </span>
                                    <span className="font-bold text-brand-primary">
                                        {Object.values(skills).flat().length}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium">
                                        Portfolio Score
                                    </span>
                                    <span className="font-bold text-yellow-600">
                                        A+
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Quick Actions
                            </h3>
                            <div className="space-y-2">
                                <button className="w-full neubrutalism-button text-sm">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Regenerate with AI
                                </button>
                                <button className="w-full neubrutalism-button text-sm">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Share Portfolio Link
                                </button>
                                <button className="w-full neubrutalism-button text-sm">
                                    <Eye className="w-4 h-4 mr-2" />
                                    Preview in New Tab
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content - Portfolio Preview */}
                    <div className="lg:col-span-2 space-y-6">
                        <AIEnhancementPanel />
                        <PortfolioPreview />

                        {/* Download Options */}
                        <div className="neubrutalism-card p-6">
                            <h3 className="text-xl font-bold mb-4">
                                Export Options
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                <button className="neubrutalism-button-primary">
                                    <Download className="w-5 h-5 mr-2" />
                                    Download PDF
                                </button>
                                <button className="neubrutalism-button">
                                    <FileText className="w-5 h-5 mr-2" />
                                    Export to Word
                                </button>
                                <button className="neubrutalism-button">
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Generate Link
                                </button>
                            </div>
                            <div className="mt-4 p-4 bg-gray-50 border-2 border-black">
                                <p className="text-sm font-medium text-gray-700">
                                    💡 <strong>Pro Tip:</strong> Your portfolio
                                    is automatically updated when you add new
                                    verified achievements!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentPortfolio
