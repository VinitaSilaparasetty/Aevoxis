import { useMemo } from "react";

const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノ{}[]<>/\\|";

export function DataStream() {
  const streams = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 15}s`,
      content: Array.from({ length: 20 }, () => characters[Math.floor(Math.random() * characters.length)]).join("\n"),
    }));
  }, []);

  return (
    <div className="data-stream-container">
      {streams.map((stream) => (
        <div
          key={stream.id}
          className="data-stream"
          style={{
            left: stream.left,
            animationDelay: stream.delay,
            animationDuration: stream.duration,
          }}
        >
          {stream.content}
        </div>
      ))}
    </div>
  );
}
