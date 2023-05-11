export const Label: React.FC<LabelProperties> = ({
  stylingClass = "defaultLabelStylingClass",
  inputId,
  text,
}) => {
  return (
    <label htmlFor={inputId} className={stylingClass}>
      {text}
    </label>
  );
};

interface LabelProperties {
  stylingClass?: string;
  inputId: string;
  text: string;
}
