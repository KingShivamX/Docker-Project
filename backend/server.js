import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Track server start time for uptime calculation
const serverStartTime = new Date();

// Middleware
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
    credentials: true
}));
app.use(express.json());

// ============================================
// API Routes
// ============================================

/**
 * Health Check Endpoint
 * Simple endpoint to check if server is alive
 */
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        message: 'Server is running!',
        timestamp: new Date().toISOString()
    });
});

/**
 * Server Status Endpoint
 * Returns detailed server status including uptime
 */
app.get('/api/status', (req, res) => {
    const now = new Date();
    const uptimeMs = now - serverStartTime;
    const uptimeSeconds = Math.floor(uptimeMs / 1000);
    const uptimeMinutes = Math.floor(uptimeSeconds / 60);
    const uptimeHours = Math.floor(uptimeMinutes / 60);

    res.status(200).json({
        status: 'online',
        serverName: 'Smart Student Hub API',
        version: '1.0.0',
        uptime: {
            hours: uptimeHours,
            minutes: uptimeMinutes % 60,
            seconds: uptimeSeconds % 60,
            formatted: `${uptimeHours}h ${uptimeMinutes % 60}m ${uptimeSeconds % 60}s`
        },
        startTime: serverStartTime.toISOString(),
        currentTime: now.toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

/**
 * Server Info Endpoint
 * Returns basic information about the server
 */
app.get('/api/info', (req, res) => {
    res.status(200).json({
        name: 'Smart Student Hub Backend',
        description: 'Backend API service for the Smart Student Hub platform',
        version: '1.0.0',
        endpoints: [
            { method: 'GET', path: '/api/health', description: 'Health check endpoint' },
            { method: 'GET', path: '/api/status', description: 'Server status with uptime' },
            { method: 'GET', path: '/api/info', description: 'API information' },
            { method: 'GET', path: '/api/stats', description: 'Mock statistics data' }
        ],
        author: 'Smart Student Hub Team'
    });
});

/**
 * Mock Statistics Endpoint
 * Returns mock data that could be displayed on dashboards
 */
app.get('/api/stats', (req, res) => {
    res.status(200).json({
        totalStudents: 1250,
        totalFaculty: 85,
        totalEvents: 42,
        activePortfolios: 876,
        recentActivities: [
            { type: 'event', name: 'Tech Symposium 2026', date: '2026-01-20' },
            { type: 'achievement', name: 'Hackathon Winner', date: '2026-01-15' },
            { type: 'certificate', name: 'AWS Cloud Practitioner', date: '2026-01-10' }
        ],
        systemLoad: Math.random() * 100,
        lastUpdated: new Date().toISOString()
    });
});

// ============================================
// Serve Frontend Static Files (for merged Docker image)
// ============================================

// Serve static files from 'public' folder (built frontend)
app.use(express.static(path.join(__dirname, 'public')));

// For any route not handled by API, serve the frontend
// This enables React Router (client-side routing) to work
app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'public', 'index.html');
    
    // Check if public folder exists (for merged container)
    if (require('fs').existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        // Fallback for development (when running backend alone)
        res.json({
            message: 'Welcome to Smart Student Hub API',
            docs: '/api/info',
            health: '/api/health'
        });
    }
});

// ============================================
// Error Handling
// ============================================

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
});

// ============================================
// Start Server
// ============================================

app.listen(PORT, () => {
    console.log('╔═══════════════════════════════════════════════════╗');
    console.log('║     🎓 Smart Student Hub Backend API             ║');
    console.log('╠═══════════════════════════════════════════════════╣');
    console.log(`║  Server running on: http://localhost:${PORT}         ║`);
    console.log('║  Environment: development                         ║');
    console.log('╠═══════════════════════════════════════════════════╣');
    console.log('║  Available endpoints:                             ║');
    console.log('║  • GET /api/health  - Health check                ║');
    console.log('║  • GET /api/status  - Server status               ║');
    console.log('║  • GET /api/info    - API info                    ║');
    console.log('║  • GET /api/stats   - Mock statistics             ║');
    console.log('╚═══════════════════════════════════════════════════╝');
});

export default app;
