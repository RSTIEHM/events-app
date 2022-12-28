import Image from 'next/image'

const SingleEventPage = ({ data }) => {
    const { title, image, emails_registered, description } = data[0]

    return (
        <div>
            <Image src={image} width={1000} height={500} />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SingleEventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map(path => {
        return {
            params: {
                cat: path.city,
                id: path.id
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(ctx) {
    const id = ctx?.params.id
    const cat = ctx?.params.cat
    const { allEvents } = await import('/data/data.json')
    const eventData = allEvents.filter(ev => ev.id === id)
    return {
        props: {
            data: eventData,
            pageName: id
        }
    }
}