import { useCallback, Dispatch, SetStateAction, ChangeEvent, KeyboardEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useQuery } from 'react-query';

import { City } from '../types';
import { WeatherService } from '../services';

interface Props {
  readonly setCities: Dispatch<SetStateAction<readonly City[]>>
  readonly setInputValue: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ setCities, setInputValue }: Props) => {
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
        keyEvent.preventDefault();
      }
    }, []
  )

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error :(</p>;

  return (
    <Form>
      <Form.Group>
        <Form.Control
          className="m-3"
          id="search-input-id"
          placeholder="Enter city"
          style={{ width: '20rem' }}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleClick}>
        Search
      </Button>
    </Form>
  )
}
