import Image from 'next/image'
import Link from 'next/link'

const HomePage = ({ data }) => {
  return (
    <main className='main-content'>
      <h1 className='page-title'>All Events</h1>
      <div className='evt-container'>

        {data.map(evt => {
          return (
            <div className='evt-link' key={evt.id}>
              <Link className='evt-link' href={`/events/${evt.id}`} passHref>
                <a>
                  <Image className='evt-image' alt={evt.title} src={evt.image} width={300} height={150} />
                  <h2>{evt.title}</h2>
                  <p>{evt.description}</p>
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}


export default HomePage