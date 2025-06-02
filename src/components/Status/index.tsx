import React, { useMemo } from 'react';
import './styles.scss';

export enum EStatus {
  active = 'active',
  notActive = 'not active',
  block = 'block',
}

interface IStatus {
  type: EStatus
}

const Status: React.FC<IStatus> = (props) => {
  const { type } = props;

  const options = useMemo(() => {
    switch(type) {
      case EStatus.active:
        return {
          style: "--active",
          text: "Đang hoạt động"
        }
      case EStatus.notActive:
        return {
          style: "--not-active",
          text: "Chưa kích hoạt"
        }
      case EStatus.block:
        return {
          style: "--block",
          text: "Đã khóa tài khoản"
        }
    }
  }, [type]);

  return (
    <div className="status">
      <p className={`status__text ${options?.style}`}><span className={`status__dot ${options?.style}`}/>{options?.text}</p>
    </div>
  )
}

export default Status;