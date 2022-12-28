import Image from 'next/image'
import Link from 'next/link'

const HomePage = ({ data }) => {
  return (
    <main className='main-content'>
      {data.map(evt => {
        return (
          <Link key={evt.id} href={`/events/${evt.id}`} passHref>
            <a>
              <Image alt={evt.title} src={evt.image} width={300} height={150} />
              <h2>{evt.title}</h2>
              <p>{evt.description}</p>
            </a>
          </Link>
        )
      })}
    </main>
  )
}


export default HomePage