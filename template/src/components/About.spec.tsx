import * as React from 'react'
import { render, cleanup } from 'preact-testing-library'
import { About } from './About'

describe('About', (): void => {
  afterEach(cleanup)

  it('has className `.title`', (): void => {
    const { getByText } = render(<About path="/about" />)
    const element = getByText(
      (c: string, e: HTMLElement): boolean =>
        c === 'About' && e.tagName.toLowerCase() === 'h1'
    ) as HTMLElement
    expect(element.className).toBe('title')
  })
})
