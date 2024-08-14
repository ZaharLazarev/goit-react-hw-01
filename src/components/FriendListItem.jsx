import React from 'react';
import css from './FriendListItem.module.css';
import clsx from "clsx";
export default function FriendListItem({avatar,name,isOnline}){
   return(
  <div>
    <img className={clsx(css.FriendImage)} src={avatar} alt={name} width="48" />
    <p className={clsx(css.FriendName)}>{name}</p>
    {isOnline?<p className={clsx(css.online, css.isOnline)}>Online</p>:<p className={clsx(css.offline, css.isOnline)}>Offline</p>}
  </div>  
   )
}