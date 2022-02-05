import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/Board';
import SolveButton from './components/button/SolveButton';
import transformer from './functional/transformer';
import solveSudoku from './functional/solveSudoku';
import ResetButton from './components/button/ResetButton';

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

const ButtonGroup = styled.div`
    display: flex;
    gap: 1rem;
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

    const handleBoardClick = function (idx) {
        const currState = boardState.slice(0);
        let currValue = currState[idx];
        if (currValue === '.') currValue = '1';
        else if (currValue === '9') currValue = '.';
        else currValue = (parseInt(currValue, 10) + 1).toString(10);

        currState[idx] = currValue;
        setBoardState(currState);
    };

    const handleSolve = function () {
        const board = transformer.to2dArray(boardState, 9);
        console.log(board);
        const state = solveSudoku(board);
        if (state) setBoardState(transformer.to1dArray(board));
        else console.log("Can't solve!");
    };

    const handleReset = function () {
        setBoardState(defaultBoard);
    };

    return (
        <div className="App">
            <StyledWrapper>
                <BoardContainer>
                    <Board state={boardState} handleClick={handleBoardClick} />
                </BoardContainer>
                <ButtonGroup>
                    <SolveButton handleClick={handleSolve} />
                    <ResetButton handleClick={handleReset} />
                </ButtonGroup>
            </StyledWrapper>
        </div>
    );
}

export default App;
