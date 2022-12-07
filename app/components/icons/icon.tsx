type IconProps = {
  icon: number
  alt: string
}

export default function Icon({ icon, alt }: IconProps) {
  return (
    <img
      className='overflow-hidden py-4 md:py-0'
      src={`img/${icon}.svg`}
      alt={alt}
    />
  )
}
