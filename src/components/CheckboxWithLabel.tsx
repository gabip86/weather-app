import { useState } from 'react';
import { Title } from './Title';

interface Props {
  readonly labelOn: string;
  readonly labelOff: string;
}

export const CheckboxWithLabel = ({ labelOn, labelOff }: Props): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
      <Title title="Checkbox" />
      <label>
        <input type='checkbox' checked={isChecked} onChange={onChange} />
        {isChecked ? labelOn : labelOff}
      </label>
    </>
  )
}
