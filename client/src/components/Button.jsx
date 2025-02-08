const Button = ({ children, type = 'button', className, onClick, color = 'blue' }) => {
  const colorVariants = {
    blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-300',
    green: 'bg-green-500 hover:bg-green-600 focus:ring-green-300',
    purple: 'bg-purple-500 hover:bg-purple-600 focus:ring-purple-300',
  };

  const colorClasses = colorVariants[color] || colorVariants.blue;

  return (
    <button
      type={type}
      className={`py-2 px-4 rounded-md text-white focus:outline-none focus:ring-2 ${colorClasses} ${className} cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
