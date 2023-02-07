import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'
// Define o tipo para a props
type Props = {
    item: Item
}


export const ListItem = ({ item }: Props) => {
    const [isChecked, setisChecked] = useState(item.done)
    return (
        <C.container done={isChecked}>
            <input type="checkbox"
            id={`item-${item.id}`}
            checked={isChecked}
            onChange={e=> setisChecked(e.target.checked)}
            />
            <label htmlFor={`item-${item.id}`}>{item.name}</label>
        </C.container>
    )
}
export default ListItem;