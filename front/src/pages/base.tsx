import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import settings from '../services/settings'
import { Loading } from '../components/core/loading'


export const BasePage = observer(() => {
  return (
    <div>
      { !settings.is_ready
          ? <Loading/>
          : <Outlet/>
      }
    </div>
  )
})
