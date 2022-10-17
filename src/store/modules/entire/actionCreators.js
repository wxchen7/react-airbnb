import * as actionTypes from './constants';
import { getEntireRoomList } from '@/services/modules/entire';

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

export const fetchRoomListAction = (page = 0) => async (dispatch, getState) => {
  // 修改currentPage
  dispatch(changeCurrentPageAction(page));

  // 根据页码获取最新数据
  const { currentPage } = getState().entire;
  // 发送网络请求前 isLoading设为true
  dispatch(changeIsLoadingAction(true));
  const res = await getEntireRoomList(currentPage * 20);
  // 获取结果后 isLoading设为false
  dispatch(changeIsLoadingAction(false));

  // 获取到最新的数据，保存到redux的store中
  const roomList = res.list;
  const { totalCount } = res;
  dispatch(changeRoomListAction(roomList));
  dispatch(changeTotalCountAction(totalCount));
};
