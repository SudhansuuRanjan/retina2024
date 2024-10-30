import "./Timer.css"
import { useMemo, useState, useEffect } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = () => {
    const [selectedDate, setSelectedDate] = useState("January, 15, 2025");
    const parsedDeadline = useMemo(
        () => Date.parse(selectedDate),
        [selectedDate]
    );
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000
        );

        return () => clearInterval(interval);
    }, [parsedDeadline, selectedDate]);

    return (
        <div className="timer-container flex flex-col w-full">
            <div className="line-right">
            </div>

            <div className="flex flex-col items-center justify-center lg:gap-10 md:gap-9 gap-8">
                <div className="timer flex">
                    {Object.entries({
                        DAYS: time / DAY < 0 ? 0 : time / DAY,
                        HOURS: (time / HOUR) % 24 < 0 ? 0 : (time / HOUR) % 24,
                        MINUTES: (time / MINUTE) % 60 < 0 ? 0 : (time / MINUTE) % 60,
                        SECONDS: (time / SECOND) % 60 < 0 ? 0 : (time / SECOND) % 60,
                    }).map(([label, value], index) => (
                        <div key={label} className="flex items-center text-center">
                            <div className="text-center">
                                <p className="lg:text-8xl md:text-7xl text-5xl fancyfont font-bold">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                                <span className="lg:text-base md:text-sm text-xs font-thin dm-sans-regular">{label}</span>
                            </div>

                            {index < 3 && <span className="text-4xl text-yellow-500 -mt-5 lg:px-5 md:px-4 px-2">
                                :
                            </span>}
                        </div>
                    ))}
                </div>
            </div>

            <div className="line-left">
            </div>
        </div>
    )
}

export default Timer;