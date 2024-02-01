import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Weather } from '../pages/Weather'

const setup = () => {
  const utils = render(<Weather />)
  const input = screen.getByTestId('search-input-test-id')
  const button = screen.getByTestId('search-button-test-id')
  return {
    button,
    input,
    ...utils
  }
}

describe('Weather page', () => {
  it('loads data', () => {
    const { button } = setup()
    fireEvent.click(button)
  })
})
