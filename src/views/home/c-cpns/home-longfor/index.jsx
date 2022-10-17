import PropTypes from 'prop-types';
import React, { memo } from 'react';

import SectionHeader from '@/components/section-header';
import LongForItem from '@/components/longfor-item';
import ScrollView from '@/base-ui/scroll-view';
import { LongForWrapper } from './style';

const HomeLongFor = memo((props) => {
  const { infoData } = props;

  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className="longfor-list">
        <ScrollView>
          {
            infoData.list.map((item) => <LongForItem itemData={item} key={item.city} />)
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  );
});

HomeLongFor.aa = {
  infoData: PropTypes.object,
};

export default HomeLongFor;
