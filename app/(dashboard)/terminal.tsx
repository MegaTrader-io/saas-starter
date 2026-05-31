'use client';

import { useState, useEffect, useRef } from 'react';

export function Terminal() {
  const [logs, setLogs] = useState<string[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stations = ['DMI4', 'DAU5', 'DSD1', 'DSF4', 'DLA7', 'DNY2'];
  const rates = ['$98.00', '$112.50', '$124.50', '$87.00', '$156.00', '$142.00'];

  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    });
  };

  const addLog = (message: string, type?: 'success' | 'info' | 'highlight') => {
    const timestamp = getTimestamp();
    const formattedMessage = { text: `[${timestamp}] ${message}`, type };
    setLogs(prev => {
      const newLogs = [...prev, JSON.stringify(formattedMessage)];
      // Keep only last 12 logs
      return newLogs.slice(-12);
    });
  };

  useEffect(() => {
    // Auto-scroll to bottom when new logs are added
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    // Initial monitoring message
    const initialTimeout = setTimeout(() => {
      addLog('Monitoring Offers...', 'info');
    }, 500);

    // Simulate continuous offer detection
    const detectOffer = () => {
      if (isCapturing) return;
      
      setIsCapturing(true);
      const station = stations[Math.floor(Math.random() * stations.length)];
      const rate = rates[Math.floor(Math.random() * rates.length)];
      
      // Sequence of logs for an offer
      setTimeout(() => addLog('New Offer Detected', 'highlight'), 0);
      setTimeout(() => addLog(`Station: ${station}`), 400);
      setTimeout(() => addLog(`Rate: ${rate}`), 800);
      setTimeout(() => addLog('Attempting Capture...'), 1200);
      setTimeout(() => {
        const success = Math.random() > 0.15; // 85% success rate
        if (success) {
          addLog('Offer Accepted', 'success');
        } else {
          addLog('Offer Expired - Another driver was faster');
        }
      }, 1800);
      setTimeout(() => {
        addLog('Monitoring Offers...', 'info');
        setIsCapturing(false);
      }, 3000);
    };

    // Start the first detection after 2 seconds
    const firstDetection = setTimeout(detectOffer, 2000);
    
    // Then detect offers every 5-8 seconds
    const interval = setInterval(() => {
      if (!isCapturing) {
        detectOffer();
      }
    }, 5000 + Math.random() * 3000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(firstDetection);
      clearInterval(interval);
    };
  }, [isCapturing]);

  const parseLog = (logStr: string) => {
    try {
      return JSON.parse(logStr);
    } catch {
      return { text: logStr, type: undefined };
    }
  };

  return (
    <div className="w-full rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm relative">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-green-400">LIVE</span>
          </div>
        </div>
        <div 
          ref={containerRef}
          className="space-y-1 h-[220px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700"
        >
          {logs.map((logStr, index) => {
            const log = parseLog(logStr);
            let colorClass = 'text-gray-300';
            if (log.type === 'success') colorClass = 'text-green-400';
            else if (log.type === 'highlight') colorClass = 'text-yellow-400';
            else if (log.type === 'info') colorClass = 'text-blue-400';
            
            return (
              <div
                key={index}
                className={`${colorClass} animate-fadeIn`}
              >
                {log.text}
                {log.type === 'success' && ' ✓'}
              </div>
            );
          })}
          {logs.length === 0 && (
            <div className="text-gray-500">Initializing FlexGrabber...</div>
          )}
        </div>
      </div>
    </div>
  );
}
