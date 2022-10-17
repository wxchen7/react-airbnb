import axiosRequst from '..';

export function getEntireRoomList(offset = 0, size = 20) {
  return axiosRequst.get({
    url: 'entire/list',
    params: {
      offset,
      size,
    },
  });
}
