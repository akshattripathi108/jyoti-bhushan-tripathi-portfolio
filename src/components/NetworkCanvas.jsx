/**
 * NetworkCanvas — animated orbital diagram used in the Hero section.
 * Pure presentational: receives no props and emits no events.
 */
export default function NetworkCanvas() {
  return (
    <div className="network-canvas" aria-hidden="true">
      <div className="network-canvas__glow" />
      <div className="network-canvas__ring network-canvas__ring--1" />
      <div className="network-canvas__ring network-canvas__ring--2" />
      <div className="network-canvas__ring network-canvas__ring--3" />
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="network-canvas__node"
          style={{
            "--angle": `${i * 45}deg`,
            "--delay": `${i * 0.4}s`,
          }}
        />
      ))}
      <div className="network-canvas__core">
        <span className="network-canvas__label">OPTICAL</span>
        <span className="network-canvas__label">TRANSPORT</span>
      </div>
      <svg className="network-canvas__lines" viewBox="0 0 400 400">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <line
            key={deg}
            x1="200"
            y1="200"
            x2={200 + 140 * Math.cos((deg * Math.PI) / 180)}
            y2={200 + 140 * Math.sin((deg * Math.PI) / 180)}
            className="network-canvas__line"
          />
        ))}
      </svg>
    </div>
  );
}
