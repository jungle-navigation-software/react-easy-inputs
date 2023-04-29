const Label: React.FC<LabelProperties> = ({ stylingClass, inputId, text }) => {
  return (
    <label htmlFor={inputId} className={stylingClass}>
      {text}
    </label>
  );
};

interface LabelProperties {
  stylingClass: string;
  inputId: string;
  text: string;
}

export default Label;
