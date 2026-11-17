import type { GroupArtName as Art } from "@/data/kindergarten";

/** Топ карточкаларына арналған балаларға тән қарапайым иллюстрациялар. */

const ink = "#263640";

function Face({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <circle cx="-6" cy="0" r="2.1" fill={ink} />
      <circle cx="6" cy="0" r="2.1" fill={ink} />
      <path d="M-5 5.5q5 4.5 10 0" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="-10" cy="5" r="2.2" fill="#FF9478" opacity=".55" />
      <circle cx="10" cy="5" r="2.2" fill="#FF9478" opacity=".55" />
    </g>
  );
}

export function GroupArt({ art, className }: { art: Art; className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true" focusable="false">
      {art === "sun" && (
        <g>
          {Array.from({ length: 10 }, (_, i) => (
            <rect
              key={i}
              x="38"
              y="4"
              width="5"
              height="12"
              rx="2.5"
              fill="#FFB020"
              transform={`rotate(${i * 36} 40.5 40)`}
            />
          ))}
          <circle cx="40.5" cy="40" r="19" fill="#FFC857" />
          <Face x={40.5} y={39} />
        </g>
      )}
      {art === "cloud" && (
        <g>
          <path d="M20 60h40a13 13 0 0 0 2-25.8A18 18 0 0 0 27 30a14 14 0 0 0-7 30z" fill="#FFFFFF" stroke="#5CCBBC" strokeWidth="3" />
          <Face x={41} y={46} />
          <path d="M28 68l-2 6M42 68l-2 6M56 68l-2 6" stroke="#5CCBBC" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {art === "star" && (
        <g>
          <path
            d="M40 9l8.6 19.4 21 2-15.9 14 4.7 20.7L40 54.3 21.6 65.1l4.7-20.7-15.9-14 21-2z"
            fill="#A9A2EF"
            stroke="#A9A2EF"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <Face x={40} y={41} s={0.95} />
        </g>
      )}
      {art === "flower" && (
        <g>
          <path d="M40 50v24" stroke="#5CCBBC" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 66c-8 0-12-5-13-9 6 0 11 3 13 9z" fill="#5CCBBC" />
          {Array.from({ length: 6 }, (_, i) => {
            const a = (i * 60 - 90) * (Math.PI / 180);
            return (
              <circle
                key={i}
                cx={(40 + Math.cos(a) * 15).toFixed(2)}
                cy={(32 + Math.sin(a) * 15).toFixed(2)}
                r="10"
                fill="#FF9478"
              />
            );
          })}
          <circle cx="40" cy="32" r="12" fill="#FFC857" />
          <Face x={40} y={31} s={0.75} />
        </g>
      )}
      {art === "rainbow" && (
        <g fill="none" strokeLinecap="round">
          <path d="M10 58a30 30 0 0 1 60 0" stroke="#FF9478" strokeWidth="7" />
          <path d="M19 58a21 21 0 0 1 42 0" stroke="#FFC857" strokeWidth="7" />
          <path d="M28 58a12 12 0 0 1 24 0" stroke="#5CCBBC" strokeWidth="7" />
          <path d="M4 62h16a7 7 0 0 0-5-11 8 8 0 0 0-11 4 4 4 0 0 0 0 7z" fill="#FFFFFF" stroke="#A9A2EF" strokeWidth="2.5" />
          <path d="M60 62h16a4 4 0 0 0 0-7 8 8 0 0 0-11-4 7 7 0 0 0-5 11z" fill="#FFFFFF" stroke="#A9A2EF" strokeWidth="2.5" />
        </g>
      )}
      {art === "bird" && (
        <g>
          <ellipse cx="38" cy="44" rx="22" ry="19" fill="#FFC857" />
          <path d="M30 46c6 10 18 10 22 2-8 2-15 1-22-2z" fill="#FFB020" />
          <circle cx="46" cy="38" r="3" fill={ink} />
          <path d="M58 40l11 4-11 4z" fill="#FF9478" stroke="#FF9478" strokeWidth="2" strokeLinejoin="round" />
          <path d="M30 26c-2-7 2-12 6-12-1 4 0 8 2 11" fill="#FF9478" />
          <circle cx="52" cy="45" r="2.4" fill="#FF9478" opacity=".6" />
          <path d="M32 63v8M42 63v8" stroke="#FFB020" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}
      {art === "foal" && (
        <g>
          <path d="M24 26l-3-15 12 9z" fill="#E98A6C" />
          <path d="M56 26l3-15-12 9z" fill="#E98A6C" />
          <ellipse cx="40" cy="41" rx="19" ry="23" fill="#FF9478" />
          <path d="M30 20c2-7 8-10 12-8 3-3 9-2 10 3-4 0-6 2-7 5-5-3-10-2-15 0z" fill="#A9A2EF" />
          <ellipse cx="40" cy="56" rx="14" ry="10" fill="#FFE6DE" />
          <circle cx="35" cy="56" r="1.8" fill={ink} />
          <circle cx="45" cy="56" r="1.8" fill={ink} />
          <circle cx="32" cy="39" r="2.6" fill={ink} />
          <circle cx="48" cy="39" r="2.6" fill={ink} />
          <circle cx="33" cy="38" r=".9" fill="#FFFFFF" />
          <circle cx="49" cy="38" r=".9" fill="#FFFFFF" />
          <circle cx="27" cy="46" r="2.6" fill="#C24A2C" opacity=".35" />
          <circle cx="53" cy="46" r="2.6" fill="#C24A2C" opacity=".35" />
        </g>
      )}
      {art === "moon" && (
        <g>
          <path d="M39.67 16.05A26 26 0 1 0 63.37 47.67 20 20 0 0 1 39.67 16.05z" fill="#FFC857" />
          <path d="M20 42q3 3 6 0M30 47q3 3 6 0" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M24 54q4 3 8 0" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="19" cy="50" r="2.4" fill="#FF9478" opacity=".55" />
          <path d="M62 50l1.8 4 4.2.5-3.1 2.8.9 4.2-3.8-2.2-3.8 2.2.9-4.2-3.1-2.8 4.2-.5z" fill="#5CCBBC" />
          <circle cx="66" cy="16" r="2.4" fill="#A9A2EF" />
        </g>
      )}
      {art === "sprout" && (
        <g>
          <path d="M40 46V26" stroke="#5CCBBC" strokeWidth="4" strokeLinecap="round" />
          <path d="M40 32c-3-10-12-14-21-12 1 9 9 15 21 12z" fill="#5CCBBC" />
          <path d="M40 27c3-10 12-14 21-12-1 9-9 15-21 12z" fill="#7FD8CB" />
          <path d="M20 46h40l-5 26H25z" fill="#FF9478" />
          <rect x="17" y="42" width="46" height="9" rx="4.5" fill="#E98A6C" />
          <Face x={40} y={60} s={0.8} />
        </g>
      )}
    </svg>
  );
}
