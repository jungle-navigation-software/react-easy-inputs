import { ReactNode } from "react";

const StylingWrapper: React.FC<StylingWrapperProperties> = ({
  children,
  stylingClass,
}) => {
  return <div className={stylingClass}>{children}</div>;
};

interface StylingWrapperProperties {
  children: ReactNode;
  stylingClass: string;
}

export default StylingWrapper;
