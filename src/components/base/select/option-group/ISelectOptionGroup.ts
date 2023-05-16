import ISelectOption from "../base/ISelectOption";

export default interface ISelectOptionGroup {
  label: string;
  options: Array<ISelectOption>;
}
