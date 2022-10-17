import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef } from 'react';

import { IndicatorWrapper } from '@/base-ui/indicator/style';

const Indicator = memo((props) => {
  const { selectIndex = 0 } = props;
  const contentRef = useRef();

  useEffect(() => {
    // 1. 获取selectIndex 对应的 item
    const selectItemEl = contentRef.current.children[selectIndex];
    const itemLeft = selectItemEl.offsetLeft;
    const itemWidth = selectItemEl.clientWidth;

    // 2，content 的宽度
    const contentWidth = contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;

    // 获取 selectIndex 要滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

    // 4. 特殊情况处理
    if (distance < 0) distance = 0; // 左边特殊情况处理

    const totalDistance = contentScroll - contentWidth;
    if (distance > totalDistance) distance = totalDistance; // 右边特殊情况处理

    // 5. 改变位置
    contentRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);
  return (
    <IndicatorWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
