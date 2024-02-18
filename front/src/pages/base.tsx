import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import settings from '../services/settings'


export const BasePage = observer(() => {
  return (
    <div>
      { !settings.is_ready
          ? <div> loading </div>
          : <Outlet/>
      }
    </div>
  )
})
