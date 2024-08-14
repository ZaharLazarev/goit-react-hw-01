import css from './FriendList.module.css';
import clsx from "clsx";
import React from 'react';
import FriendListItem from "./FriendListItem"
export default function FriendList({friends}){
    return(
      <ul className={clsx(css.FriendList)}>
          {friends.map((friend)=>{
             return <li className={clsx(css.FriendListItem)} key = {friend.id}><FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} /></li>
          })}
      </ul>
    )
}
