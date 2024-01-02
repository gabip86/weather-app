interface Props {
  readonly type?: string;
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: () => void;
  readonly name?: string;
  readonly icon?: JSX.Element;
}

export const CustomInput = ({ type, placeholder, value, onChange, name, icon }: Props) => {
  return (
    <>
      <div className="input_wrapper">
        <div className="input_container">
          {icon &&
            <div className="input_icon">
              {icon}
            </div>
          }

          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      </div>
    </>
  )
}
