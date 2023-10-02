import logo from '@/assets/icons/logo.svg'

export const Logo = () => {
  return (
    <div
      className="h-52 w-60 bg-cover"
      style={{ backgroundImage: `url(${logo})` }}
    />
  )
}
