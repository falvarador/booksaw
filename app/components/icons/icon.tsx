type IconProps = {
  icon: number
  alt: string
}

export default function Icon({ icon, alt }: IconProps) {
  return <img className='overflow-hidden' src={`img/${icon}.svg`} alt={alt} />
}
