import Image from 'next/image'
import Link from 'next/link'
const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Events Page</h1>
      <div>
        {data.map(evt => {
          return (
            <Link key={evt.id} href={`/events/${evt.id}`} passHref>
              <a>
                <Image alt={evt.title} src={evt.image} width={300} height={150} />
                <h2>{evt.title}</h2>
              </a>
            </Link>

          )
        })}
      </div>
    </div>
  )
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  // console.log('EVENTS')
  // console.log(events_categories)
  return {
    props: {
      data: events_categories
    }
  }
}

