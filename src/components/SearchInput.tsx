import { useCallback, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Button, Form } from 'react-bootstrap';
import { City } from '../types';
import { axiosClient } from '../axios';
import { useQuery } from 'react-query';

interface Props {
  readonly setCities: Dispatch<SetStateAction<readonly City[]>>
  readonly setInputValue: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ setCities, setInputValue }: Props) => {
  const { data: cities, isLoading, isError, refetch, isSuccess } = useQuery<readonly City[], Error>(
    'cities',
    () => axiosClient.get<readonly City[]>('/cities').then((res) => res.data),
    { enabled: false }
  )

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, [setInputValue]);

  const handleClick = () => {
    if (isSuccess) {
      refetch();
      setCities(cities)
    }
  }

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
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleClick}>
        Search
      </Button>
    </Form>
  )
}
