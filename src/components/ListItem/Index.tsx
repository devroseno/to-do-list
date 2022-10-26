import * as C from './Styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item, onChange}: Props) => {

    return(
        <C.Container done={item.done}>
            <input
            type="checkbox"
            checked={item.done}
            onChange={event => onChange(item.id, event.target.checked)}
            />
            <label>{item.name} - {item.done.toString()}</label>
        </C.Container>
    );

}

