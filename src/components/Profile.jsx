import React from 'react';
import css from './Profile.module.css'
import clsx from "clsx";
export default function Profile({name, tag, location,image, stats}){
return(
    <div className={clsx(css.profileCard)}>
     <div className={clsx(css.profileTextCard)}>
      <img className={clsx(css.profileImage)}
       src={image}
       alt={name}
      />
      <p className={clsx(css.profileName)}>{name}</p>
      <p className={clsx(css.profileTagAndLocation)}>{tag}</p>
      <p className={clsx(css.profileTagAndLocation)}>{location}</p>
     </div>
    
     <ul className={clsx(css.profileList)}>
      <li className={clsx(css.profileListItem)}>
       <span className={clsx(css.textOfList)}>Followers</span>
       <span className={clsx(css.valueOfList)}>{stats.followers}</span>
      </li>
      <li className={clsx(css.profileListItem)}>
       <span className={clsx(css.textOfList)}>Views</span>
       <span className={clsx(css.valueOfList)}>{stats.views}</span>
      </li>
      <li className={clsx(css.profileListItem)}>
       <span className={clsx(css.textOfList)}>Likes</span>
       <span className={clsx(css.valueOfList)}>{stats.likes}</span>
      </li>
     </ul>
    </div> 
)
}

