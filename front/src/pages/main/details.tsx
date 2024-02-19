import { IntersectionEdit } from '../../components/no_traffic/IntersectionEdit'
import { Intersection } from '../../models/Intersection'
import { observer } from 'mobx-react-lite'
import { useParams } from 'react-router-dom'

export const DetailsPage = () => {
  const { intersection_id } = useParams()

  console.log(intersection_id)
  const intersection = Intersection.get(parseInt(intersection_id)) as Intersection

  return (
    <IntersectionEdit obj={intersection}/>
  )
}
