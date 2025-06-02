import React from 'react';
import "./styles.scss";
import Status, { EStatus } from '../Status';

interface IDataSource {
  id: string;
  name: string;
  userId: string;
  phoneNumber: string;
  address: string;
  position: string;
  email: string;
  status: number;
}

interface ITable {
  loading: boolean;
  dataSource: IDataSource[];
  onClick: (item: IDataSource) => void;
}

const STATUS: Record<number, EStatus> = {
  1: EStatus.active,
  2: EStatus.notActive,
  3: EStatus.block
}

const HeaderName = ["STT", "Họ tên", "Mã nhân viên", "Sô điện thoại", "Vùng", "Chức vụ", "Email", "Trạng thái hợp lệ", "Hành động"]

const Table: React.FC<ITable> = (props) => {
  const { dataSource = [], onClick, loading } = props;

  return (
    <table className='table'>
      <thead>
        <tr className='table__header'>
          {
            HeaderName?.map((name, index) => {
              const isFirst = index === 0;
              const isLast = index === HeaderName.length - 1;
              const styles = isFirst || isLast ? "--center" : "";
              return <th key={index} className={styles}>{name}</th>
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          !loading && dataSource?.map((item: IDataSource) => {
            const {
              id,
              name,
              userId,
              phoneNumber,
              address,
              position,
              email,
              status
            } = item;

            return (
              <tr key={item.id} className='table__item'>
                <td className='--center'>{id}</td>
                <td>{name}</td>
                <td>{userId}</td>
                <td>{phoneNumber}</td>
                <td>{address}</td>
                <td>{position}</td>
                <td>{email}</td>
                <td><Status type={STATUS[status as number]} /></td>
                <td className='--center'>
                  <button
                    disabled={!onClick}
                    className='btn-view'
                    onClick={() => onClick(item)}>
                    <img src='/images/eyes.svg' />
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      {
        loading && (
          <tfoot>
            <tr>
              <td colSpan={9}>
                <img className='loading' src='/images/loading.gif' alt='loading-gif'/>
              </td>
            </tr>
          </tfoot>
        )
      }
    </table>
  )
}

export default Table;