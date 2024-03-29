import React, { memo, useState } from 'react';
import classNames from 'classnames';

import filterData from '@/assets/data/filter_data.json';
import { FilterWrapper } from './style';

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    // 移除操作
    if (newItems.includes(item)) {
      const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
      newItems.splice(itemIndex, 1);
    } else {
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item) => (
            <div
              className={classNames('item', { active: selectItems.includes(item) })}
              key={item}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          ))
        }
      </div>
    </FilterWrapper>
  );
});

export default EntireFilter;
