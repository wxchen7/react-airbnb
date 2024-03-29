import PropTypes from 'prop-types';
import React, { memo, useCallback, useState } from 'react';

import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
import { SectionV2Wrapper } from './style';

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const { infoData } = props;

  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0];
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);

  // 事件处理函数
  const tabClickHandle = useCallback((index, name) => {
    setName(name);
  }, []);

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms
        roomList={infoData.dest_list?.[name]}
        itemWidth="33.3%"
      />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
