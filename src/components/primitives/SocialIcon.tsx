import type { SVGProps } from 'react'

const PATHS = {
  instagram:
    'M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm9.75 1.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 7.75a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Z',
  facebook:
    'M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.87.24-1.46 1.5-1.46H17V4.4c-.26-.04-1.16-.12-2.2-.12-2.18 0-3.67 1.32-3.67 3.75V10.5H8.5v3H11V21h2.5Z',
  linkedin:
    'M4.98 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 4.98 3.5ZM3 9.75h4V21H3V9.75ZM10 9.75h3.83v1.55h.05c.53-.95 1.84-1.95 3.78-1.95C21.6 9.35 22 11.78 22 14.83V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9.75Z',
}

type Props = SVGProps<SVGSVGElement> & { name: keyof typeof PATHS }

export function SocialIcon({ name, className, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}
