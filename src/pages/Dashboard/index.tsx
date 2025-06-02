import Button, { EButton } from '@/components/Button';
import Dropdown, { IDropdownItem } from '@/components/Dropdown';
import Empty from '@/components/Empty';
import Pagination from '@/components/Pagination';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import { PAGE_SIZE, SELECT_NONE_OPTIONS, STATUS } from '@/constants';
import { LoadingContext } from '@/contexts/LoadingContext';
import { useGetEmployeeList } from '@/hooks/useGetEmployeeList';
import useGetProvince from '@/hooks/useGetProvince';
import Layout from '@/layout';
import React, { useContext, useState } from 'react';
import "./styles.scss";
import useIsFirstRender from '@/hooks/useIsFirstRender';

const Dashboard: React.FC = () => {
  const [province, setProvince] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [searchText, setSearchText] = useState<string>("")
  const [openedProvince, setOpenedProvince] = useState<boolean>(false);
  const [openedStatus, setOpenedStatus] = useState<boolean>(false);
  const [page, setPage] = useState(1);

  const { loading: loadingPage, setLoading } = useContext(LoadingContext);

  const [dataProvince] = useGetProvince();
  const isFirstLoad = useIsFirstRender();
  const {
    data: dataEmployees,
    total,
    loading
  } = useGetEmployeeList({
    page: page,
    pageSize: PAGE_SIZE,
    province: province,
    status: STATUS?.find(i => i.label === status)?.id ?? "",
    name: searchText,
    cb: (loading) => {
      if(isFirstLoad) {
        setLoading(loading);
      }
    }
  });

  const handleClick = () => {
    alert("click!")
  }

  const handleChangeText = (text: string) => {
    setPage(1);
    setSearchText(text);
  }

  const handleChangeProvince = (data: IDropdownItem) => {
    setProvince(data.value);
    setPage(1);
  }

  const handleChangeStatus = (data: IDropdownItem) => {
    setStatus(data.label);
    setPage(1);
  }

  const isEmpty = total === 0;

  return (
    <Layout>
      <div className='dashboard'>
        <div className='dashboard__container'>
          <div className='dashboard__header'>
            <div className={`dashboard__header-search ${isEmpty ? "--reset" : ""}`}>
              <SearchInput value={searchText} onChangeText={handleChangeText} />
            </div>

            {
              !isEmpty && <div className='line'></div>
            }

            <div className='dashboard__header-btn-group'>
              {
                !isEmpty && (<Button type={EButton.outlined} text="Tải lên nhân viên" icon={<img src='/images/upload.svg' />} onClick={handleClick} />)
              }
              {
                !isEmpty && <Button type={EButton.outlined} text="Xuất danh sách tài khoản" onClick={handleClick} icon={<img src='/images/download.svg' />} />
              }
              <Button type={EButton.default} text="Tạo mới" onClick={handleClick} icon={<img src='/images/add.svg' />} />
            </div>
          </div>
          {
            !isEmpty && (

              <div className='dashboard__filter'>
                <h3 className='dashboard__filter-title'>Bộ lọc: </h3>
                <Dropdown
                  opened={openedStatus}
                  selectValue={status}
                  options={STATUS}
                  placeholder='Trạng thái'
                  onClick={() => { setOpenedStatus(!openedStatus) }}
                  onChange={handleChangeStatus}
                />
                <Dropdown
                  opened={openedProvince}
                  selectValue={province}
                  placeholder='Vùng'
                  options={[SELECT_NONE_OPTIONS, ...dataProvince]}
                  onClick={() => { setOpenedProvince(!openedProvince) }}
                  onChange={handleChangeProvince}
                />
              </div>
            )
          }

          {isEmpty && <Empty />}

          {!isEmpty && (
            <div className='dashboard__table'>
              <Table loading={loading} dataSource={dataEmployees ?? []} onClick={handleClick} />
            </div>
          )}

          {
            !isEmpty && (
              <div className='dashboard__pagination'>
                <div className='dashboard__pagination-total'>
                  <span className="text">Hiển thị</span>
                  <span className='number'>{total}</span>
                  <span className='text'>Nhân viên</span>
                </div>
                <Pagination currentPage={page} onChange={setPage} total={total} pageSize={PAGE_SIZE} />
              </div>
            )
          }
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard;