import * as React from 'react'
import { Link } from 'preact-router'

interface Props {
  path: string
}

export const Home = (_props: Props): React.JSX.Element => (
  <>
    <h1 className="title">Hello, Preact!</h1>
    <div className="tip">Edit src/components/Home.tsx and save to reload.</div>
    <Link href="/about">to about</Link>
  </>
)
