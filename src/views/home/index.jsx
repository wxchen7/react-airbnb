import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {fetchHomeDataAction} from "@/store/modules/home";
import {isEmptyObject} from "@/utils";
import HomeBanner from "@/views/home/c-cpns/home-banner"
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2";
import HomeSectionV3 from "@/views/home/c-cpns/home-section-v3";
import HomeLongFor from "@/views/home/c-cpns/home-longfor";
import {HomeWrapper} from "./style";

const Home = memo(() => {
  // 从redux中获取数据
  const {goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo} = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  // 派发异步事件：发起网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}/>}
        {isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo}/>}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>}
      </div>
    </HomeWrapper>
  )
})

export default Home
