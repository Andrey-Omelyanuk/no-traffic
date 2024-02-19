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

  const onSave = () => {
    // TODO: add loading
    obj.save() 
  }
  const onDelete = () => {
    // TODO: add loading
    obj.delete()
  }

  const onNameChange = (event) => {
    obj.name = event.target.value 
  }

  return (
    <div>
      <label>
        Name: <input type="string" value={obj.name} onChange={onNameChange}/>
      </label>
      {/* <input> */}
      <div>
        Location: <span> Lan: { obj.latitude }</span> - <span> Lng: { obj.longitude }</span>
      </div>
      <div> Streets: </div>
      {obj.streetsInIntersection.map((item, i) =>
        <div style={{display: 'flex',  gap: 5}} key={i}>
          <span>{ item.street.city.name }</span> - <span>{ item.street.name }</span>
        </div>
      )}
      <button onClick={onSave}> {props.obj ? 'Save' : 'Create'}</button>
      {props.obj && <button onClick={onDelete}>{'Delete'}</button>}
    </div>
  )
})
