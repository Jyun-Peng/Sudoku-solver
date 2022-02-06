import { useEffect, useState } from 'react';
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
    padding: 3rem 0;
`;
const BoardContainer = styled.div`
    margin-bottom: 2rem;
`;
const ButtonGroup = styled.div`
    width: min(25.4rem, 90vw);
    display: flex;
    gap: 1rem;
`;
const StyledTitle = styled.h1`
    margin: 0 0 2rem 0;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 0.15rem;
    color: var(--red);
    text-align: center;
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
    const [emptyState, setEmptyState] = useState([]);
    const [solvedState, setSolvedState] = useState(false);

    const storeEmptyState = function () {
        const emptyList = [];
        boardState.forEach((v, idx) => {
            if (v === '.') emptyList.push(idx);
        });
        setEmptyState(emptyList);
    };
    const handleBoardClick = function (val, idx) {
        console.log(val);
        const currState = boardState.slice(0);
        currState[idx] = val === 0 ? '.' : val.toString(10);
        setBoardState(currState);
    };
    const handleSolve = function () {
        const board = transformer.to2dArray(boardState, 9);
        // console.log(board);
        const state = solveSudoku(board);
        if (state) {
            storeEmptyState();
            setBoardState(transformer.to1dArray(board));
            setSolvedState(true);
        } else window.alert('No solution!');
    };
    const handleReset = function () {
        setBoardState(defaultBoard);
        setSolvedState(false);
    };

    return (
        <div className="App">
            <StyledWrapper>
                <StyledTitle>Sudoku Solver</StyledTitle>
                <BoardContainer>
                    <Board
                        state={boardState}
                        emptyState={emptyState}
                        solved={solvedState}
                        handleClick={handleBoardClick}
                    />
                </BoardContainer>
                <ButtonGroup>
                    <SolveButton handleClick={handleSolve} disable={solvedState} />
                    <ResetButton handleClick={handleReset} />
                </ButtonGroup>
            </StyledWrapper>
        </div>
    );
}

export default App;
