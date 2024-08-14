import React from 'react';
import css from './Transaction.module.css';
import clsx from "clsx";
export default function TransactionHistory({items}){
  return(<table>
  <thead>
    <tr className={clsx(css.tableRowOfHeaders)}>
      <th className={clsx(css.tableHeader)}>Type</th>
      <th className={clsx(css.tableHeader)}>Amount</th>
      <th className={clsx(css.tableHeader)}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(item=>{
       return(<tr className={clsx(css.tableRow)} key={item.id}>
        <td className={clsx(css.tableItemType,css.tableItem)}>{item.type}</td>
        <td className={clsx(css.tableItem, css.tableItemAmount)}>{item.amount}</td>
        <td className={clsx(css.tableItem, css.tableItemCurrency)}>{item.currency}</td>
      </tr>)
    })
    }  
  </tbody>
</table>
  )

}