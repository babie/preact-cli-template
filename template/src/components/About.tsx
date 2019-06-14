import * as React from 'react'
import { Link } from 'preact-router'

export const About = (): React.JSX.Element => (
  <>
    <h1 className="title">About</h1>
    <div className="tip">Edit src/components/About.tsx and save to reload.</div>
    <Link href="/">to home</Link>
  </>
)
