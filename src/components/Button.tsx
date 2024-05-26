interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <div className="btn-wrapper">
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default Button;
