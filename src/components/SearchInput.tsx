import { useCallback, KeyboardEvent, Dispatch, SetStateAction } from 'react';

export const SearchInput = ({ setCities }: { readonly setCities: Dispatch<SetStateAction<never[]>>}) => {
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
      <div className="input_wrapper">
        <div className="input_container">
          <input
            id="search-input-id"
            placeholder="Enter city"
            name="search-input"
            onKeyDown={onKeyDown}
          />
        </div>
      </div>
    </>
  )
}
