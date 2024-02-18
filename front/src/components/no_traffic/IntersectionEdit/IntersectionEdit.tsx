import { observer } from 'mobx-react-lite'
import { Intersection } from '../../../models/Intersection'
import { useEffect, useState } from 'react'


export interface IntersectionEditProps {
  obj: Intersection | null
}


export const IntersectionEdit = observer((props: IntersectionEditProps) => {
  const [obj, setObj] = useState<Intersection>(() => {
    return props.obj ? props.obj : new Intersection()
  })

  useEffect(() => {
    return setObj(props.obj ? props.obj : new Intersection())
  }, [props.obj])

  return (
    <div>
      <div> {obj.name} </div> 
      <div> Streets: </div>
      {obj.streetsInIntersection.map((item, i) =>
        <div style={{display: 'flex',  gap: 5}} key={i}>
          <span>{ item.street.city.name }</span> - <span>{ item.street.name }</span>
        </div>
      )}
      <button> {props.obj ? 'Save' : 'Create'}</button>
    </div>
  )
})
