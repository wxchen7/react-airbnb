import React, {memo, useEffect} from 'react'
import {useDispatch} from "react-redux";


import EntireFilter from "@/views/entire/entire-filter";
import EntireRooms from "@/views/entire/entire-rooms";
import EntirePagination from "@/views/entire/entire-pagination";
import {fetchRoomListAction} from "@/store/modules/entire/actionCreators";
import {EntireWrapper} from "./style";

const Entire = memo((props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
  )
})

Entire.propTypes = {}

export default Entire
