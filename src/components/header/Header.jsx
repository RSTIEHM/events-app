import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <a>Home</a>
        </Link>
        <Link href="/events" passHref>
          <a>Events</a>
        </Link>
        <Link href="/about-us" passHref>
          <a>About Us</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header