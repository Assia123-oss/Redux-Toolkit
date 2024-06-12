import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {
    const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
     {username}
    </div>
  )
}

export default Contact
