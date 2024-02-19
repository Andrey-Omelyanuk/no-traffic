import { useState } from 'react'
import { QueryX } from 'mobx-orm'
import { Link } from "react-router-dom"
import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { Intersection } from '../../models/Intersection'
import { IntersectionList } from '../../components/no_traffic/IntersectionList'
import { Loading } from '../../components/core/loading'
// 
import { StreetInIntersection } from '../../models/StreetInIntersection'

export const MainPage = observer(() => {
  const [allInterseptionsQuery] = useState(() => Intersection.getQueryXCacheSync({
    // relations: ['streetsInIntersection.street.city'],
    autoupdate: true
  }) as QueryX<Intersection>)
  const [allStreetsInInterseptionQuery] = useState(() => StreetInIntersection.getQueryX({
    relations: ['street.city'],
    autoupdate: true
  }) as QueryX<StreetInIntersection>)

  return (
    <div>
      { !allInterseptionsQuery.isReady || !allStreetsInInterseptionQuery.isReady
          ? <Loading/>
          : <div style={{display: 'flex', padding: '15px', gap: '20px'}} >
              <div>
                <Link to="/intersection/null/"> Create New </Link>
                <IntersectionList query={allInterseptionsQuery} />
              </div>
              <Outlet/>
            </div>
      }
    </div>
  )
})
