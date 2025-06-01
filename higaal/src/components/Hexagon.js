// Hexagon.js
export default function Hexagon({ x, y, size = 100, fill = "#6fcf97", label }) {
  const hexPath = `
    M ${x + size * Math.cos(0)} ${y + size * Math.sin(0)}
    ${[1, 2, 3, 4, 5].map(i =>
      `L ${x + size * Math.cos((i * Math.PI) / 3)} ${y + size * Math.sin((i * Math.PI) / 3)}`
    ).join(' ')} Z
  `;

  return (
    <g>
      <path d={hexPath} fill={fill} stroke="white" strokeWidth={2} />
      {label && (
        <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="white">
          {label}
        </text>
      )}
    </g>
  );
}
