export default function Moon() {
    return (
        <svg className='m-auto w-full h-full'
            width="100%" height="100%"
            viewBox="0 0 200 150"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="radialGradient" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#3CF3FF" />
                    <stop offset="100%" stopColor="#FA00FF" />
                </radialGradient>
                <radialGradient id="planet1" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#DD734F" />
                    <stop offset="100%" stopColor="#1A1A32" />
                </radialGradient>
                <radialGradient id="planet2" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#B9AEDF" />
                    <stop offset="100%" stopColor="#1A1A32" />
                </radialGradient>
                <radialGradient id="planet3" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#88E5BE" />
                    <stop offset="100%" stopColor="#1A1A32" />
                </radialGradient>
                <radialGradient id="planet4" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#3CF3FF" />
                    <stop offset="100%" stopColor="#1A1A32" />
                </radialGradient>
                <radialGradient id="planet5" cx="25%" cy="25%" r="75%">
                    <stop offset="0%" stopColor="#FA00FF" />
                    <stop offset="100%" stopColor="#1A1A32" />
                </radialGradient>
                <filter id="dropShadow" r="-50%" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow
                        dx="0"
                        dy="0"
                        stdDeviation="5"
                        floodColor="#89d3e3"
                        floodOpacity="0.3"
                    />
                </filter>
                <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feComponentTransfer in="SourceAlpha">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feGaussianBlur stdDeviation="10" result="blur" />
                    <feOffset dx="0" dy="0" result="offsetBlur" />
                    <feFlood floodColor="black" result="color" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feComposite operator="over" />
                </filter>

                <linearGradient id='moonGradient' x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3CF3FF" />
                    <stop offset="10%" stopColor="#3CF3FF" />
                    <stop offset="80%" stopColor="#FA00FF" />
                </linearGradient>

                <radialGradient id="sphere" cx="35%" cy="35%" r="70%">
                    <stop offset="0%" stopColor="#4cafc6" />
                    <stop offset="80%" stopColor="#43708b" />
                    <stop offset="95%" stopColor="#3e1149" />
                    <stop offset="100%" stopColor="#251139" />
                </radialGradient>
            </defs>

            <g transform="rotate(10 80 100)">
                <ellipse
                    cx="100"
                    cy="90"
                    rx="80"
                    ry="40"
                    fill="none"
                    stroke="cyan"
                    strokeWidth=".3"
                    strokeOpacity={.2}
                />
                <ellipse
                    cx="100"
                    cy="90"
                    rx="60"
                    ry="30"
                    fill="none"
                    stroke="cyan"
                    strokeWidth=".3"
                    strokeOpacity={.2}
                />
                <ellipse
                    cx="100"
                    cy="90"
                    rx="40"
                    ry="20"
                    fill="none"
                    stroke="cyan"
                    strokeWidth=".3"
                    strokeOpacity={.2}
                />
            </g>
            <g>
                <circle
                    cx="100"
                    cy="80"
                    r="27"
                    fill="url(#radialGradient)"
                    filter="url(#dropShadow)"
                />
                <circle cx="100" cy="80" r="27" fill="url(#moonGradient)" filter="url(#glow)" opacity={1}>
                    <animate attributeName="opacity" values="1; 0; 1" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle
                    cx="100"
                    cy="80"
                    r="27"
                    fill="black"
                    filter="url(#innerShadow)"
                    opacity={.6}
                />
                <circle cx='100' cy='123' r="5" fill="url(#planet1)" />
                <circle cx='50' cy='117' r="3" fill="url(#planet3)" />
                <circle cx='23' cy='80' r="7" fill="url(#planet2)" />
                <circle cx='170' cy='123' r="5" fill="url(#planet4)" />
                <circle cx='140' cy='63' r="2" fill="url(#planet5)" />

            </g>
        </svg>
    )
}