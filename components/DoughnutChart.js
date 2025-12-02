const DoughnutChart = ({ data }) => {
    const size = 200;
    const strokeWidth = 20;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercent = 0;

    return (
        <div className="relative flex flex-col items-center justify-center">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
                {data.map((item, index) => {
                    const dashoffset = circumference * (1 - item.percent / 100);
                    const rotation = accumulatedPercent * 3.6;
                    accumulatedPercent += item.percent;

                    return (
                        <circle
                            key={index}
                            cx={size / 2}
                            cy={size / 2}
                            r={radius}
                            fill="none"
                            stroke={item.color}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            style={{
                                '--circumference': circumference,
                                '--dashoffset': dashoffset,
                                transform: `rotate(${rotation}deg)`,
                                transformOrigin: '50% 50%',
                                animation: 'roll-in 1.5s ease-out forwards'
                            }}
                        />
                    );
                })}
            </svg>
            <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-bold text-[var(--text-dark)]">Connectivity</span>
                <span className="text-lg text-[var(--text-light)]">Gap</span>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                        <span className="text-sm">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};