
import Image from 'next/image'
import Link from 'next/link'
import Header from '../src/components/header/Header'
import HomePage from '../src/components/home/home-page'
import Footer from '../src/components/footer/Footer'
export default function Home({ data }) {

  return (
    <div>
      <HomePage data={data} />
    </div>
  )
}


export async function getServerSideProps() {
  const { events_categories } = await import('/data/data.json')
  return {
    props: {
      data: events_categories
    }
  }
}
