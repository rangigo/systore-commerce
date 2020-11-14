interface Props {
  width?: string
  height?: string
}

export default function Hamburger({ width, height }: Props) {
  return (
    <svg viewBox="0 0 100 80" width={width ?? '40'} height={height ?? '40'}>
      <rect width="75" height="6.5"></rect>
      <rect y="25" width="75" height="6.5"></rect>
      <rect y="50" width="75" height="6.5"></rect>
    </svg>
  )
}
