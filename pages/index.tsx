import Head from 'next/head'

import { TSlider } from 'components'

import data from 'data'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TSlider data={data} />
      </main>
    </>
  )
}
