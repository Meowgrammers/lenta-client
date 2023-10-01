import logo from '@/assets/icons/logo.svg'

export const Logo = () => {
  return (
    <div
      className="w-60 h-52 bg-cover"
      style={{ backgroundImage: `url(${logo})` }}
    />
  )
}
