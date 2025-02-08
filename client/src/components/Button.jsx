// Button Component
const Button = ({ children, type = 'button', className, onClick }) => {
    return (
      <button
        type={type}
        className={`py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 ${className} cursor-pointer`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

  export default Button;
  
 