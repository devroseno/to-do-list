import { useState, KeyboardEvent } from 'react';
import * as C from './styles';
import { FaPlusCircle } from 'react-icons/fa';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState('');

    const handleKeyUp = (event: KeyboardEvent) => {
        if((event.code === 'Enter' || event.code === 'NumpadEnter') && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }

    }

    return(
        <C.Container>
            <div className="iconAdd"><FaPlusCircle/></div>
            <input
                required
                type="text"
                placeholder="Adicione uma nova tarefa"
                value={inputText}
                onChange={event=>setInputText(event.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
};