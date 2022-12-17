export interface IFormField {
  label: string;
  fieldName: string;
  fieldType: string;
  fieldValue: string;
  placeholder: string;
  values: IDropdown[]; // TO FILL DROPDOWN
}

export interface IDropdown {
  displayValue: string;
  internalValue: string;
}

export interface IUser {
  userName: string;
}
