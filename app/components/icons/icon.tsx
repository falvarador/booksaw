import { Image } from '@chakra-ui/react'

type IconProps = {
  icon: number
  alt: string
}

export default function Icon({ icon, alt }: IconProps) {
  return <Image overflow='hidden' src={`img/${icon}.svg`} alt={alt} />
}
