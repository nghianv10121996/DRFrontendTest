import React from 'react';
import "./styles.scss";

export interface IDropdownItem {
  id: string;
  label: string;
  value: string;
}

interface IDropdown {
  opened?: boolean;
  selectValue: string;
  placeholder?: string;
  options: IDropdownItem[]
  onChange?: (data: IDropdownItem) => void;
  onClick?: () => void;
}

const Dropdown: React.FC<IDropdown> = (props) => {
  const { opened, selectValue, options, onChange, placeholder = "select Item", onClick } = props;

  return (
    <div className='dropdown'>
      <div className='dropdown__header' onClick={onClick}>
        <p className={`dropdown__header-title ${selectValue ? "--active" : ""}`}>{selectValue || placeholder}</p>
        <img className={`dropdown__header-icon ${opened ? "--active" : ""}`} src='/images/arrow-down.svg' />
        {
          opened && (
            <div className='dropdown__content'>
              {options?.map((item: IDropdownItem, index) => {
                const active = item.value === selectValue;
                return <p key={index} onClick={() => onChange?.(item)} className={`dropdown__content-item ${active ? "--active" : ""}`}>{item.label}</p>
              })}
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Dropdown;