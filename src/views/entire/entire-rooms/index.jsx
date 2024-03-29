import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import RoomItem from '@/components/room-item';
import { RoomsWrapper } from './style';

const EntireRooms = memo(() => {
  // 从redux中获取roomList数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }), shallowEqual);

  return (
    <RoomsWrapper>
      <h2 className="title">
        {totalCount}
        多处住所
      </h2>
      <div className="list">
        {
          roomList.map((item) => (
            <RoomItem
              itemData={item}
              itemWidth="20%"
              key={item._id}
            />
          ))
        }
      </div>
      {isLoading && <div className="cover" />}
    </RoomsWrapper>

  );
});

export default EntireRooms;
