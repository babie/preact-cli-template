import * as React from 'react'
import { Link } from 'preact-router'

export const Home = (): React.JSX.Element => (
  <>
    <h1 className="title">Hello, Preact!</h1>
    <div className="tip">Edit src/components/Home.tsx and save to reload.</div>
    <Link href="/about">to about</Link>
  </>
)
