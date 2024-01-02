interface Props {
  readonly type?: string;
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: () => void;
  readonly name?: string;
}

export const CustomInput = ({ type, placeholder, value, onChange, name }: Props) => {
  return (
    <>
      <div className="input_wrapper">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </>
  )
}
