const ErrorMesage = ({ title, visible }) => {
  return visible && <h4 className="error-message">{title}</h4>;
};

export default ErrorMesage;
