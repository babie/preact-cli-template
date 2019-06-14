import * as React from 'react'
import { render, cleanup } from 'preact-testing-library'
import { About } from './About'

describe('About', (): void => {
  afterEach(cleanup)

  it('has h1', (): void => {
    const { getByText } = render(<About path="/about" />)
    const e = getByText('About') as HTMLElement
    expect(e.tagName.toLowerCase()).toBe('h1')
  })
})
