import * as React from 'react'
import { Link } from 'preact-router'
import Head from 'preact-head'

interface Props {
  path: string
}

export const Home = (_props: Props): React.JSX.Element => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <h1 className="title">Hello, Preact!</h1>
    <div className="tip">Edit src/components/Home.tsx and save to reload.</div>
    <p>
      <Link href="/about">to about</Link>
    </p>
    <p>
      <Link href="/users">to users</Link>
    </p>
  </>
)
