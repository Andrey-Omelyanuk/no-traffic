import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import { QueryX } from 'mobx-orm'
import { Intersection } from '@/models/Intersection'

export interface IntersectionListItemProps {
  obj: Intersection
}

export const IntersectionListItem = observer((props: IntersectionListItemProps) => {
  const { obj } = props
  return (
    <li>
      <Link to={`/intersection/${obj.id}/`} style={{display: 'flex'}}>
        {/* FIXME: don't use hardcore links, I use it because I have no time to do everything perfect */}
        <div>{ obj.name }</div>
        <div> City: { obj.city }</div>
      </Link>
    </li>
  )
})

export interface IntersectionListProps {
  query: QueryX<Intersection>
}

export const IntersectionList = observer((props: IntersectionListProps) => {
  const { query } = props
  return (
    <ul>
      {query.items.map((item, i) =>
        <IntersectionListItem obj={item}  key={i}/>
      )}
    </ul>
  )
})
