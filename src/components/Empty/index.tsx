import React from 'react';
import "./styles.scss";

const Empty = () => {
  return (
    <div className="empty">
      <img src="/images/empty.png" alt="empty-icon" />
      <p className="empty__text">Danh sách trống</p>
    </div>
  )
}

export default Empty;