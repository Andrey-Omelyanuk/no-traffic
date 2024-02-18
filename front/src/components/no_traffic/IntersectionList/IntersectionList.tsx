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
      <Link to={`/intersection/${obj.id}/`}>
        {/* FIXME: don't use hardcore links, I use it because I have no time to do everything perfect */}
        <div>{ obj.name }</div>
        <div> Lng: { obj.longitude }</div>
        <div> Lan: { obj.latitude }</div>
        <div> City: { obj.city }</div>
      </Link>
  )
})

export interface IntersectionListProps {
  query: QueryX<Intersection>
}

export const IntersectionList = observer((props: IntersectionListProps) => {
  const { query } = props
  return (
    <div>
      {query.items.map((item, i) =>
        <IntersectionListItem obj={item}  key={i}/>
      )}
    </div>
  )
})
