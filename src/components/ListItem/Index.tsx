import * as C from './Styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item
}

export const ListItem = ({item}: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleStateTask = () => {

    }

    return(
        <C.Container done={isChecked}>
            <input
            type="checkbox"
            checked={isChecked}
            onChange={event => setIsChecked(event.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    );
}

