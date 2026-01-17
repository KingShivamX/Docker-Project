import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    ArrowLeft,
    Plus,
    Calendar,
    Clock,
    Users,
    MapPin,
    Star,
    Filter,
    Search,
    Eye,
    Edit,
    Trash2,
    CheckCircle,
    X,
    Upload,
    Tag,
    AlertCircle,
    FileText,
    Download,
} from "lucide-react"

const EventManagement = () => {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("upcoming")
    const [showCreateForm, setShowCreateForm] = useState(false)

    const events = [
        {
            id: 1,
            title: "AI/ML Workshop - Advanced Concepts",
            description:
                "Deep dive into machine learning algorithms and practical implementations",
            date: "2025-03-20",
            time: "10:00 AM - 4:00 PM",
            location: "Seminar Hall A",
            department: "Computer Science",
            organizer: "Dr. Rajesh Kumar",
            category: "Workshop",
            capacity: 50,
            registered: 45,
            status: "upcoming",
            points: 25,
            requirements: ["Basic Python knowledge", "Laptop required"],
            tags: ["AI", "ML", "Python", "Hands-on"],
        },
        {
            id: 2,
            title: "Industry Expert Talk - Future of Technology",
            description:
                "Tech leaders share insights on emerging technologies and career opportunities",
            date: "2025-03-22",
            time: "2:00 PM - 4:00 PM",
            location: "Auditorium",
            department: "Computer Science",
            organizer: "Prof. Anita Sharma",
            category: "Guest Lecture",
            capacity: 200,
            registered: 156,
            status: "upcoming",
            points: 15,
            requirements: ["Open to all students"],
            tags: ["Industry", "Career", "Technology", "Networking"],
        },
        {
            id: 3,
            title: "Hackathon 2025 - Code for Change",
            description:
                "24-hour coding competition focusing on social impact solutions",
            date: "2025-03-25",
            time: "9:00 AM - 9:00 AM (Next Day)",
            location: "Computer Lab 1-3",
            department: "Computer Science",
            organizer: "Student Council",
            category: "Competition",
            capacity: 120,
            registered: 98,
            status: "upcoming",
            points: 100,
            requirements: ["Team of 2-4 students", "Programming experience"],
            tags: ["Hackathon", "Coding", "Competition", "Innovation"],
        },
        {
            id: 4,
            title: "React.js Fundamentals Workshop",
            description:
                "Learn the basics of React.js development with hands-on projects",
            date: "2025-02-28",
            time: "10:00 AM - 3:00 PM",
            location: "Computer Lab 2",
            department: "Computer Science",
            organizer: "Dr. Priya Singh",
            category: "Workshop",
            capacity: 30,
            registered: 30,
            status: "completed",
            points: 20,
            requirements: ["JavaScript basics", "Laptop required"],
            tags: ["React", "JavaScript", "Web Development"],
        },
    ]

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        category: "",
        capacity: "",
        points: "",
        requirements: "",
        tags: "",
    })

    const categories = [
        "Workshop",
        "Guest Lecture",
        "Competition",
        "Seminar",
        "Conference",
        "Cultural Event",
        "Sports",
        "Community Service",
    ]

    const EventCard = ({ event }) => (
        <div className="neubrutalism-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center mb-2">
                        <h3 className="text-lg font-bold text-text-primary mr-3">
                            {event.title}
                        </h3>
                        <span
                            className={`px-2 py-1 text-xs font-bold border border-black ${
                                event.status === "upcoming"
                                    ? "bg-green-200"
                                    : event.status === "ongoing"
                                    ? "bg-blue-200"
                                    : "bg-gray-200"
                            }`}
                        >
                            {event.status}
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 font-medium mb-3">
                        {event.description}
                    </p>
                </div>
                <div className="flex space-x-2 ml-4">
                    <button className="neubrutalism-button text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View
                    </button>
                    <button className="neubrutalism-button text-sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.registered}/{event.capacity} registered
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 mr-2" />
                        {event.points} points
                    </div>
                    <div className="text-sm text-gray-600">
                        <strong>By:</strong> {event.organizer}
                    </div>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="px-2 py-1 bg-neubrutalism-yellow border border-black text-xs font-bold"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Registration Progress</span>
                    <span>
                        {Math.round((event.registered / event.capacity) * 100)}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 border-2 border-black">
                    <div
                        className="bg-neubrutalism-blue h-full rounded-full border border-black"
                        style={{
                            width: `${
                                (event.registered / event.capacity) * 100
                            }%`,
                        }}
                    ></div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
                {event.status === "upcoming" && (
                    <>
                        <button className="neubrutalism-button-primary flex-1">
                            Register Students
                        </button>
                        <button className="neubrutalism-button">
                            <Download className="w-4 h-4 mr-1" />
                            Export List
                        </button>
                    </>
                )}
                {event.status === "completed" && (
                    <button className="neubrutalism-button w-full">
                        <FileText className="w-4 h-4 mr-2" />
                        View Report
                    </button>
                )}
            </div>
        </div>
    )

    const CreateEventForm = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="neubrutalism-card p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold">Create New Event</h3>
                    <button
                        onClick={() => setShowCreateForm(false)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Event Title
                            </label>
                            <input
                                type="text"
                                placeholder="Enter event title"
                                className="neubrutalism-input w-full"
                                value={formData.title}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        title: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Category
                            </label>
                            <select
                                className="neubrutalism-input w-full"
                                value={formData.category}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        category: e.target.value,
                                    })
                                }
                            >
                                <option value="">Select category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">
                            Description
                        </label>
                        <textarea
                            placeholder="Event description"
                            className="neubrutalism-input w-full"
                            rows="3"
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                className="neubrutalism-input w-full"
                                value={formData.date}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        date: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Time
                            </label>
                            <input
                                type="text"
                                placeholder="e.g., 10:00 AM - 4:00 PM"
                                className="neubrutalism-input w-full"
                                value={formData.time}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        time: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="Venue/Room"
                                className="neubrutalism-input w-full"
                                value={formData.location}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        location: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Capacity
                            </label>
                            <input
                                type="number"
                                placeholder="Maximum participants"
                                className="neubrutalism-input w-full"
                                value={formData.capacity}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        capacity: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2">
                                Points Reward
                            </label>
                            <input
                                type="number"
                                placeholder="Points for participation"
                                className="neubrutalism-input w-full"
                                value={formData.points}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        points: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">
                            Requirements
                        </label>
                        <textarea
                            placeholder="Prerequisites or requirements (one per line)"
                            className="neubrutalism-input w-full"
                            rows="2"
                            value={formData.requirements}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    requirements: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2">
                            Tags
                        </label>
                        <input
                            type="text"
                            placeholder="Comma-separated tags (e.g., AI, Workshop, Python)"
                            className="neubrutalism-input w-full"
                            value={formData.tags}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    tags: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className="border-2 border-dashed border-gray-300 p-4 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-600 font-medium">
                            Upload event banner or materials
                        </p>
                        <button
                            type="button"
                            className="neubrutalism-button mt-2"
                        >
                            Choose Files
                        </button>
                    </div>

                    <div className="flex space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={() => setShowCreateForm(false)}
                            className="neubrutalism-button flex-1"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="neubrutalism-button-primary flex-1"
                        >
                            Create Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

    const upcomingEvents = events.filter((e) => e.status === "upcoming")
    const completedEvents = events.filter((e) => e.status === "completed")

    return (
        <div className="min-h-screen p-6">
            {/* Header */}
            <header className="max-w-7xl mx-auto mb-8">
                <div className="flex items-center justify-between neubrutalism-card p-6">
                    <div className="flex items-center">
                        <button
                            onClick={() => navigate("/faculty")}
                            className="mr-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-3xl font-black text-text-primary">
                                Event Management
                            </h1>
                            <p className="text-gray-600 font-medium">
                                Create, manage, and track departmental events
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setShowCreateForm(true)}
                        className="neubrutalism-button-primary"
                    >
                        <Plus className="w-5 h-5 mr-2" />
                        Create Event
                    </button>
                </div>
            </header>

            {/* Filters and Search */}
            <section className="max-w-7xl mx-auto mb-8">
                <div className="neubrutalism-card p-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => setActiveTab("upcoming")}
                                    className={`px-4 py-2 font-bold border-2 border-black transition-all duration-200 ${
                                        activeTab === "upcoming"
                                            ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                            : "bg-white hover:bg-gray-50"
                                    }`}
                                >
                                    Upcoming ({upcomingEvents.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab("completed")}
                                    className={`px-4 py-2 font-bold border-2 border-black transition-all duration-200 ${
                                        activeTab === "completed"
                                            ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                            : "bg-white hover:bg-gray-50"
                                    }`}
                                >
                                    Completed ({completedEvents.length})
                                </button>
                                <button
                                    onClick={() => setActiveTab("all")}
                                    className={`px-4 py-2 font-bold border-2 border-black transition-all duration-200 ${
                                        activeTab === "all"
                                            ? "bg-brand-primary text-white shadow-neubrutalism-sm"
                                            : "bg-white hover:bg-gray-50"
                                    }`}
                                >
                                    All Events ({events.length})
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <button className="neubrutalism-button">
                                <Filter className="w-4 h-4 mr-2" />
                                Filter
                            </button>
                            <button className="neubrutalism-button">
                                <Search className="w-4 h-4 mr-2" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Stats */}
            <section className="max-w-7xl mx-auto mb-8">
                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        {
                            label: "Total Events",
                            value: events.length,
                            color: "bg-neubrutalism-blue",
                        },
                        {
                            label: "Upcoming",
                            value: upcomingEvents.length,
                            color: "bg-neubrutalism-green",
                        },
                        {
                            label: "This Month",
                            value: "8",
                            color: "bg-neubrutalism-yellow",
                        },
                        {
                            label: "Total Participants",
                            value: "1,247",
                            color: "bg-neubrutalism-pink",
                        },
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className="neubrutalism-card p-6 text-center"
                        >
                            <div
                                className={`inline-flex items-center justify-center w-12 h-12 ${stat.color} rounded-xl mb-3 border-2 border-black`}
                            >
                                <Calendar className="w-6 h-6" />
                            </div>
                            <div className="text-3xl font-black text-text-primary mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm font-bold text-gray-600">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Events Grid */}
            <main className="max-w-7xl mx-auto">
                <div className="space-y-6">
                    {activeTab === "upcoming" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {upcomingEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}

                    {activeTab === "completed" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {completedEvents.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}

                    {activeTab === "all" && (
                        <div className="grid md:grid-cols-2 gap-6">
                            {events.map((event) => (
                                <EventCard key={event.id} event={event} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Empty State */}
                {((activeTab === "upcoming" && upcomingEvents.length === 0) ||
                    (activeTab === "completed" &&
                        completedEvents.length === 0)) && (
                    <div className="neubrutalism-card p-12 text-center">
                        <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-bold mb-2">
                            No {activeTab} events
                        </h3>
                        <p className="text-gray-600 font-medium mb-6">
                            {activeTab === "upcoming"
                                ? "Create your first event to get started!"
                                : "No completed events yet."}
                        </p>
                        {activeTab === "upcoming" && (
                            <button
                                onClick={() => setShowCreateForm(true)}
                                className="neubrutalism-button-primary"
                            >
                                <Plus className="w-5 h-5 mr-2" />
                                Create First Event
                            </button>
                        )}
                    </div>
                )}
            </main>

            {/* Create Event Modal */}
            {showCreateForm && <CreateEventForm />}
        </div>
    )
}

export default EventManagement
