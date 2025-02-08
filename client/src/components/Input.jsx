const Input = ({ type = 'text', id, name, value, onChange, placeholder, required = false, className }) => {
  return (
      <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none ${className}`}
      />
  );
};

export default Input;
