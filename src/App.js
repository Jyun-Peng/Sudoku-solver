import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './components/Board';

const StyledWrapper = styled.div`
    min-height: 100vh;
    background-color: var(--rice);
`;
const BoardContainer = styled.div`
    text-align: center;
    padding-top: 4rem;
`;

const EmptyBoard = [
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
];
function App() {
    return (
        <div className="App">
            <StyledWrapper>
                <BoardContainer>
                    <Board />
                </BoardContainer>
            </StyledWrapper>
        </div>
    );
}

export default App;
