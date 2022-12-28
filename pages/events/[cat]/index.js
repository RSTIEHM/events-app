import Image from 'next/image'
import Link from 'next/link'

const EventsCategoryPage = ({ data, pageName }) => {
  let title = data[0].city.toUpperCase();

  return (
    <div>
      <h1>Events In {pageName.toUpperCase()}</h1>
      <div>
        {data.map(ev => {
          return (
            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <a>
                <Image width={300} height={300} alt={ev.title} src={ev.image} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </Link>
          )
        })}

      </div>

    </div>
  )
}

export default EventsCategoryPage;

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')

  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString()
      }
    }
  })

  return {
    paths: allPaths,
    fallback: false
  }
}


export async function getStaticProps(ctx) {
  const id = ctx?.params.cat
  const { allEvents } = await import('/data/data.json')
  const data = allEvents.filter(ev => ev.city.toLowerCase() === id.toLowerCase())
  return {
    props: {
      data,
      pageName: id
    }
  }
}