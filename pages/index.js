import Head from 'next/head'
import Dashboard from '../components/Dashboard'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Dashboard/>
      </div>
  )
}
