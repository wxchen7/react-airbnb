import axiosRequest from '../index';

export function getHomeGoodPriceData() {
  return axiosRequest.get({
    url: '/home/goodprice',
  });
}

export function getHomeHighScoreData() {
  return axiosRequest.get({
    url: '/home/highscore',
  });
}

export function getHomeDiscountData() {
  return axiosRequest.get({
    url: '/home/discount',
  });
}

export function getHomeHotRecommendData() {
  return axiosRequest.get({
    url: '/home/hotrecommenddest',
  });
}

export function getHomeLongForData() {
  return axiosRequest.get({
    url: '/home/longfor',
  });
}

export function getHomePlusData() {
  return axiosRequest.get({
    url: '/home/plus',
  });
}
