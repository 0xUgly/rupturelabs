import React from 'react'

interface SpinningGlowingCircleProps {
  size?: number
  color?: string
  duration?: number
}

export default function SpinningGlowingCircle({
  size = 300,
  color = '#00FF1E',
  duration = 3,
}: SpinningGlowingCircleProps = {}) {
  return (
    <div className="absolute flex items-center justify-center w-full h-full bg-transparent">
      <div
        className="relative"
        style={{
          width: size,
          height: size,
          animation: `spin ${duration}s linear infinite`,
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke={color}
            strokeWidth="3"
            className="animate-pulse"
            style={{
              filter: `drop-shadow(0 0 8px ${color})`,
            }}
          />
        </svg>
      </div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}