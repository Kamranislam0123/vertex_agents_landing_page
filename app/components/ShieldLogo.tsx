export default function ShieldLogo() {
  return (
    <div className="relative mb-0 h-12 w-12 flex items-center justify-center scale-75">
      {/* HUD Reticle Corners */}
      <div className="absolute -inset-4 pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-cyan/40" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-brand-cyan/40" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-brand-cyan/40" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-cyan/40" />
      </div>

      {/* Orbiting Rings */}
      <div className="absolute inset-0 border border-brand-cyan/10 rounded-full animate-[orbit_10s_linear_infinite]" />
      <div className="absolute inset-2 border border-brand-purple/20 rounded-full animate-[orbit-reverse_15s_linear_infinite]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-purple rounded-full shadow-[0_0_10px_#8b5cf6]" />
      </div>
      <div className="absolute inset-6 border border-brand-cyan/10 rounded-full animate-[orbit_8s_linear_infinite]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-cyan rounded-full shadow-[0_0_10px_#00f0ff]" />
      </div>

      {/* Pulse Ring */}
      <div className="absolute inset-0 rounded-full bg-brand-cyan/10 animate-[pulse-ring_3s_ease-out_infinite]" />
      
      {/* Floating Shield Container */}
      <div className="relative flex h-full w-full items-center justify-center animate-[float_4s_ease-in-out_infinite]">
        {/* Scanning Bar Overlay */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-brand-cyan/40 blur-[2px] z-10 animate-[shield-scan_3s_ease-in-out_infinite]" />

        <svg
          viewBox="0 0 100 100"
          className="h-24 w-20 drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff">
                <animate attributeName="offset" values="0;0.5;0" dur="4s" repeatCount="indefinite" />
              </stop>
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          <path
            d="M50 5L10 20V45C10 70 50 95 50 95C50 95 90 70 90 45V20L50 5Z"
            fill="url(#shield-gradient)"
            fillOpacity="0.05"
            stroke="url(#shield-gradient)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          
          {/* Internal Mechanics */}
          <path d="M50 20V80M30 45H70" stroke="url(#shield-gradient)" strokeWidth="0.5" strokeOpacity="0.4" />
          <path d="M30 35L50 25L70 35" stroke="#00f0ff" strokeWidth="0.5" strokeOpacity="0.3" />
          <path d="M30 65L50 75L70 65" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />

          {/* Data Points */}
          <circle cx="50" cy="20" r="1.5" fill="#00f0ff" className="animate-[blink_1s_infinite]">
            <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="30" cy="45" r="1" fill="#8b5cf6" className="animate-[blink_1.2s_infinite]" />
          <circle cx="70" cy="45" r="1" fill="#8b5cf6" className="animate-[blink_1.2s_infinite]" />
          <circle cx="50" cy="80" r="1" fill="#00f0ff" className="animate-[blink_0.8s_infinite]" />
        </svg>
      </div>
    </div>
  );
}
