import { observer } from 'mobx-react-lite'
import { Model, QueryX } from 'mobx-orm'
import { Street } from '../../../models/Street'


export interface StreetSelectProps {
  obj: Model 
  field: string
  options: QueryX<Street>
}


export const StreetSelect= observer((props: StreetSelectProps) => {
  const { obj, field, options } = props
  return (
    <select>
      { options.items.map((item: Street, i) => {
        return <option value={item.id} selected={obj[field]===item.id}>{`${item.city.name} - ${item.name}`}</option>
      })}
    </select>
  )
})
