import React, { useState, useEffect } from 'react';
import { Server, Wifi, WifiOff, RefreshCw, Clock, Activity } from 'lucide-react';

// Empty string for merged container (same origin), or full URL for separate containers
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || '';

const BackendStatus = () => {
    const [status, setStatus] = useState({
        isOnline: false,
        loading: true,
        data: null,
        lastChecked: null,
        error: null
    });
    const [expanded, setExpanded] = useState(false);

    const checkBackendStatus = async () => {
        setStatus(prev => ({ ...prev, loading: true, error: null }));
        
        try {
            const response = await fetch(`${BACKEND_URL}/api/status`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                setStatus({
                    isOnline: true,
                    loading: false,
                    data: data,
                    lastChecked: new Date().toLocaleTimeString(),
                    error: null
                });
            } else {
                throw new Error('Server responded with error');
            }
        } catch (error) {
            setStatus({
                isOnline: false,
                loading: false,
                data: null,
                lastChecked: new Date().toLocaleTimeString(),
                error: error.message
            });
        }
    };

    useEffect(() => {
        checkBackendStatus();
        
        // Check every 30 seconds
        const interval = setInterval(checkBackendStatus, 30000);
        
        return () => clearInterval(interval);
    }, []);

    const getStatusColor = () => {
        if (status.loading) return 'bg-yellow-400';
        if (status.isOnline) return 'bg-green-500';
        return 'bg-red-500';
    };

    const getStatusText = () => {
        if (status.loading) return 'Checking...';
        if (status.isOnline) return 'Backend Online';
        return 'Backend Offline';
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Expanded Panel */}
            {expanded && (
                <div className="mb-2 bg-white border-4 border-black shadow-neubrutalism-lg p-4 w-80 animate-fade-in-up">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                            <Server className="w-5 h-5" />
                            Backend Status
                        </h3>
                        <button
                            onClick={checkBackendStatus}
                            disabled={status.loading}
                            className="p-2 bg-brand-primary text-white border-2 border-black hover:shadow-neubrutalism-sm disabled:opacity-50 transition-all"
                        >
                            <RefreshCw className={`w-4 h-4 ${status.loading ? 'animate-spin' : ''}`} />
                        </button>
                    </div>

                    {status.isOnline && status.data ? (
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 p-2 bg-green-100 border-2 border-black">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-bold text-green-800">Server Online</span>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="p-2 bg-neubrutalism-blue border-2 border-black">
                                    <p className="text-xs text-text-secondary">Version</p>
                                    <p className="font-bold">{status.data.version}</p>
                                </div>
                                <div className="p-2 bg-neubrutalism-yellow border-2 border-black">
                                    <p className="text-xs text-text-secondary">Environment</p>
                                    <p className="font-bold capitalize">{status.data.environment}</p>
                                </div>
                            </div>

                            <div className="p-2 bg-neubrutalism-green border-2 border-black">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-xs text-text-secondary">Uptime</span>
                                </div>
                                <p className="font-bold">{status.data.uptime?.formatted || 'N/A'}</p>
                            </div>

                            <div className="p-2 bg-gray-100 border-2 border-black">
                                <div className="flex items-center gap-2">
                                    <Activity className="w-4 h-4" />
                                    <span className="text-xs text-text-secondary">Server Name</span>
                                </div>
                                <p className="font-bold text-sm">{status.data.serverName}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="p-4 bg-red-100 border-2 border-black text-center">
                            <WifiOff className="w-8 h-8 mx-auto mb-2 text-red-600" />
                            <p className="font-bold text-red-800">Backend Offline</p>
                            <p className="text-sm text-red-600 mt-1">
                                Start the backend server to connect
                            </p>
                            <code className="block mt-2 text-xs bg-white p-2 border border-red-300 rounded">
                                cd backend && npm run dev
                            </code>
                        </div>
                    )}

                    {status.lastChecked && (
                        <p className="text-xs text-text-secondary mt-3 text-center">
                            Last checked: {status.lastChecked}
                        </p>
                    )}
                </div>
            )}

            {/* Status Badge Button */}
            <button
                onClick={() => setExpanded(!expanded)}
                className={`flex items-center gap-2 px-4 py-2 border-4 border-black shadow-neubrutalism-sm hover:shadow-neubrutalism-lg hover:-translate-y-1 hover:-translate-x-1 transition-all ${
                    status.isOnline ? 'bg-green-100' : 'bg-red-100'
                }`}
            >
                <div className={`w-3 h-3 rounded-full ${getStatusColor()} ${status.loading ? 'animate-pulse' : status.isOnline ? 'animate-pulse' : ''}`}></div>
                {status.isOnline ? (
                    <Wifi className="w-5 h-5 text-green-600" />
                ) : (
                    <WifiOff className="w-5 h-5 text-red-600" />
                )}
                <span className="font-bold text-sm">{getStatusText()}</span>
            </button>
        </div>
    );
};

export default BackendStatus;
