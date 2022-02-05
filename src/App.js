import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/Board';
import SolveButton from './components/button/Button';

const StyledWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--rice);

    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
`;
const BoardContainer = styled.div`
    margin-bottom: 2rem;
`;

const defaultBoard = [
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
    '.',
];

function App() {
    const [boardState, setBoardState] = useState(defaultBoard);

    const handleClick = function (idx) {
        const currState = boardState.slice(0);
        let currValue = currState[idx];
        if (currValue === '.') currValue = '1';
        else if (currValue === '9') currValue = '.';
        else currValue = (parseInt(currValue, 10) + 1).toString(10);

        currState[idx] = currValue;
        setBoardState(currState);
    };

    return (
        <div className="App">
            <StyledWrapper>
                <BoardContainer>
                    <Board state={boardState} handleClick={handleClick} />
                </BoardContainer>
                <SolveButton />
            </StyledWrapper>
        </div>
    );
}

export default App;
