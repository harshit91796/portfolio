import React from 'react'

const Svg = ({ size = 16, children, ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
)

export const TsIcon = ({ size = 16 }) => (
  <Svg size={size}>
    <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#3178C6" />
    <text
      x="12"
      y="16"
      fontSize="9"
      fontFamily="Segoe UI, sans-serif"
      fontWeight="700"
      fill="#ffffff"
      textAnchor="middle"
    >
      TS
    </text>
  </Svg>
)

export const JsIcon = ({ size = 16 }) => (
  <Svg size={size}>
    <rect x="2" y="2" width="20" height="20" rx="2.5" fill="#F7DF1E" />
    <text
      x="12"
      y="16"
      fontSize="9"
      fontFamily="Segoe UI, sans-serif"
      fontWeight="700"
      fill="#000000"
      textAnchor="middle"
    >
      JS
    </text>
  </Svg>
)

export const TxtIcon = ({ size = 16 }) => (
  <Svg size={size}>
    <path
      d="M6 3 L14 3 L20 9 L20 20 Q20 21 19 21 L7 21 Q6 21 6 20 Z"
      fill="#CCCCCC"
    />
    <path d="M14 3 L14 9 L20 9 Z" fill="#9E9E9E" />
    <rect x="9" y="12" width="8" height="1.2" fill="#1e1e1e" />
    <rect x="9" y="15" width="8" height="1.2" fill="#1e1e1e" />
    <rect x="9" y="18" width="6" height="1.2" fill="#1e1e1e" />
  </Svg>
)

export const ImageIcon = ({ size = 16 }) => (
  <Svg size={size}>
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#A074C4" />
    <circle cx="8.5" cy="10" r="1.6" fill="#ffffff" />
    <path
      d="M3 18 L9 12 L14 17 L17 14 L21 18 L21 19 L3 19 Z"
      fill="#ffffff"
    />
  </Svg>
)

export const FolderIcon = ({ size = 16, open = false }) =>
  open ? (
    <Svg size={size}>
      <path d="M2 7 L2 19 L22 19 L22 9 L11 9 L9 7 Z" fill="#90A4AE" />
      <path d="M2 9 L22 9 L20 18.5 L4 18.5 Z" fill="#DCB67A" />
    </Svg>
  ) : (
    <Svg size={size}>
      <path d="M2 7 L2 19 L22 19 L22 9 L11 9 L9 7 Z" fill="#DCB67A" />
    </Svg>
  )

export const FileIconFor = ({ name, size = 16 }) => {
  const lower = name.toLowerCase()
  if (lower.endsWith('.ts') || lower.endsWith('.tsx')) return <TsIcon size={size} />
  if (lower.endsWith('.js') || lower.endsWith('.jsx')) return <JsIcon size={size} />
  if (
    lower.endsWith('.jpg') ||
    lower.endsWith('.jpeg') ||
    lower.endsWith('.png') ||
    lower.endsWith('.svg') ||
    lower.endsWith('.gif')
  )
    return <ImageIcon size={size} />
  return <TxtIcon size={size} />
}
