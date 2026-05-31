'use client';

import { useState, useEffect, useRef } from 'react';

interface LogEntry {
  time: string;
  message: string;
  type: 'info' | 'success' | 'highlight';
}

const generateTimeString = (offset: number = 0): string => {
  const now = new Date();
  now.setSeconds(now.getSeconds() + offset);
  return now.toLocaleTimeString('en-US', { hour12: false });
};

export function Terminal() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentSequence, setCurrentSequence] = useState(0);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const sequences = [
    [
      { message: 'Monitoring Offers...', type: 'info' as const },
      { message: 'New Offer Detected', type: 'highlight' as const },
      { message: 'Station: DMI4', type: 'info' as const },
      { message: 'Rate: $124.50', type: 'info' as const },
      { message: 'Duration: 4h 30m', type: 'info' as const },
      { message: 'Attempting Capture...', type: 'info' as const },
      { message: 'Offer Accepted', type: 'success' as const },
    ],
    [
      { message: 'Monitoring Offers...', type: 'info' as const },
      { message: 'New Offer Detected', type: 'highlight' as const },
      { message: 'Station: DLA9', type: 'info' as const },
      { message: 'Rate: $98.00', type: 'info' as const },
      { message: 'Duration: 3h 00m', type: 'info' as const },
      { message: 'Attempting Capture...', type: 'info' as const },
      { message: 'Offer Accepted', type: 'success' as const },
    ],
    [
      { message: 'Monitoring Offers...', type: 'info' as const },
      { message: 'New Offer Detected', type: 'highlight' as const },
      { message: 'Station: VCA2', type: 'info' as const },
      { message: 'Rate: $156.75', type: 'info' as const },
      { message: 'Duration: 5h 00m', type: 'info' as const },
      { message: 'Attempting Capture...', type: 'info' as const },
      { message: 'Offer Accepted', type: 'success' as const },
    ],
  ];

  useEffect(() => {
    let timeOffset = 0;
    const sequence = sequences[currentSequence % sequences.length];
    
    sequence.forEach((item, index) => {
      setTimeout(() => {
        setLogs(prev => {
          const newLogs = [...prev, { 
            time: generateTimeString(timeOffset), 
            message: item.message, 
            type: item.type 
          }];
          // Keep only last 10 logs
          return newLogs.slice(-10);
        });
        timeOffset++;
      }, index * 400);
    });

    const nextSequenceTimeout = setTimeout(() => {
      setCurrentSequence(prev => prev + 1);
    }, sequence.length * 400 + 3000);

    return () => clearTimeout(nextSequenceTimeout);
  }, [currentSequence]);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full rounded-2xl shadow-2xl overflow-hidden bg-gray-900 text-white font-mono text-sm border border-gray-800">
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-xs text-gray-400">FlexGrabber Monitor</span>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-green-400">Live</span>
        </div>
      </div>
      <div 
        ref={logContainerRef}
        className="p-4 h-64 overflow-y-auto space-y-1 scrollbar-thin scrollbar-thumb-gray-700"
      >
        {logs.map((log, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 animate-fadeIn ${
              log.type === 'success' 
                ? 'text-green-400' 
                : log.type === 'highlight' 
                  ? 'text-orange-400' 
                  : 'text-gray-300'
            }`}
          >
            <span className="text-gray-500 shrink-0">[{log.time}]</span>
            <span>
              {log.message}
              {log.type === 'success' && ' ✓'}
            </span>
          </div>
        ))}
        {logs.length === 0 && (
          <div className="text-gray-500">Initializing monitor...</div>
        )}
      </div>
    </div>
  );
}
