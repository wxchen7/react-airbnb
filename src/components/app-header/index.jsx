import React, { memo } from 'react';

import HeaderLeft from '@/components/app-header/c-cpns/header-left';
import HeaderCenter from '@/components/app-header/c-cpns/header-center';
import HeaderRight from '@/components/app-header/c-cpns/header-right';
import { HeaderWrapper } from './style';

const AppHeader = memo(() => (
  <HeaderWrapper>
    <HeaderLeft />
    <HeaderCenter />
    <HeaderRight />
  </HeaderWrapper>
));

export default AppHeader;
