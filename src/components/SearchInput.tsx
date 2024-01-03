import { useCallback, KeyboardEvent, Dispatch, SetStateAction, ChangeEvent } from 'react';
import { Form } from 'react-bootstrap';
import { City } from '../types';

interface Props {
  readonly setCities: Dispatch<SetStateAction<readonly City[]>>
  readonly setInputValue: Dispatch<SetStateAction<string>>;
}

export const SearchInput = ({ setCities, setInputValue }: Props) => {
  const getCities = useCallback(() => {
    const reqOptions = {
      method: "GET",
    };

    fetch("http://localhost:3030/cities", reqOptions)
      .then((res) => res.json())
      .then((result) => setCities(result))
      .catch((error) => console.log("error", error));
  }, [setCities])

  const onKeyDown = useCallback(
    (keyEvent: KeyboardEvent<HTMLInputElement>) => {
      if (keyEvent.key === 'Enter') {
        getCities();
      }
    }, [getCities]
  )

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, [setInputValue]);


  return (
    <Form.Control
      className="m-3"
      id="search-input-id"
      placeholder="Enter city"
      onKeyDown={onKeyDown}
      style={{ width: '20rem' }}
      onChange={onChange}
    />
  )
}
