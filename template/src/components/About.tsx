import * as React from 'react'
import { Link } from 'preact-router'
import Head from 'preact-head'

interface Props {
  path: string
}

export const About = (_props: Props): React.JSX.Element => (
  <>
    <Head>
      <title>About</title>
    </Head>
    <h1 className="title">About</h1>
    <div className="tip">Edit src/components/About.tsx and save to reload.</div>
    <Link href="/">to home</Link>
  </>
)
