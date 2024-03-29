import React, { useCallback, Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { City } from '../types';
import { WeatherService } from '../services';

interface Props {
  readonly inputValue: string;
  readonly setCities: Dispatch<SetStateAction<readonly City[]>>;
  readonly setInputValue: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ inputValue, setCities, setInputValue }: Props) => {
  const { data: cities, isLoading, isError, refetch, isSuccess } = useQuery<readonly City[], Error>(
    'cities',
    async () => await WeatherService.findAll(),
    { enabled: false }
  )

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, [setInputValue]);

  const handleClick = () => {
    refetch();
    if (isSuccess) {
      setCities(cities)
    }
  }

  const onKeyDown = useCallback(
    (keyEvent: KeyboardEvent<HTMLInputElement>) => {
      if (keyEvent.key === 'Enter') {
        keyEvent.preventDefault()
      }
    }, []
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <Form>
      <Form.Group>
        <Form.Control
          data-testid="search-input-test-id"
          className="m-3"
          id="search-input-id"
          placeholder="Enter city"
          style={{ width: '20rem' }}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={inputValue}
        />
      </Form.Group>
      <Button data-testid="search-button-test-id" variant="primary" onClick={handleClick}>
        Search
      </Button>
    </Form>
  )
}
