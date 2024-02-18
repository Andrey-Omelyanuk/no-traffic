import { observer } from 'mobx-react-lite'
import { Query } from 'mobx-orm'
import { Intersection } from '@/models/Intersection'


export interface IntersectionListProps {
    options: Query<Intersection>
    onSelect?: (intersection_id: number) => void
}


export const IntersectionList = observer((props: IntersectionListProps) => {
    return (
        <div> test </div>
        // <Sel
        //     options={options}
        //     label='Ledger Class'
        //     placeholder='Choose ledger class'
        //     {...props}
        // />
    )
})
