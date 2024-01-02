import { useCallback, KeyboardEvent, Dispatch, SetStateAction } from 'react';
import { Form } from 'react-bootstrap';
import { City } from '../types/types';

export const SearchInput = ({ setCities }: { readonly setCities: Dispatch<SetStateAction<readonly City[]>> }) => {
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

  return (
    <>
      <Form.Control id="search-input-id" placeholder="Enter city" onKeyDown={onKeyDown} style={{ width: '20rem' }} />
    </>
  )
}
