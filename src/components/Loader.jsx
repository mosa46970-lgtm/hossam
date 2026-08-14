import { useEffect, useState } from 'react';

export default function Loader({ loading }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (!loading) return;
    const interval = setInterval(() => {
      setPercent(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + 2;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [loading]);

  const circumference = 2 * Math.PI * 50;
  const dashOffset = circumference - (percent / 100) * circumference;

  return (
    <div className={`loader ${!loading ? 'hidden' : ''}`}>
      <div className="loader-content">
        <div className="loader-circle-wrap">
          <svg width="120" height="120">
            <circle className="loader-circle-bg" cx="60" cy="60" r="50" />
            <circle
              className="loader-circle-progress"
              cx="60" cy="60" r="50"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
            />
          </svg>
          <div className="loader-icon">&lt;/&gt;</div>
        </div>
        <div className="loader-percent">{percent}%</div>
        <div className="loader-line">
          <div className="loader-line-fill" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  );
}
