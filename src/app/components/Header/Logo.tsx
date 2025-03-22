import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href={'/'}>
      <p className=" text-3xl font-bold hover:scale-110 transition ">
        UP
        <span className="text-target">.</span>
      </p>
    </Link>
  )
}
