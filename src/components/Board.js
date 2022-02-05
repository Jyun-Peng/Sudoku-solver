import { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const BoardWrapper = styled.div`
    width: min(36rem, 100vw);
    aspect-ratio: 1/1;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr;
    gap: 1%;
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

const SquareContainer = styled.div`
    padding-right: ${(props) => ((props.idx + 1) % 3 === 0 && (props.idx + 1) % 9 !== 0 ? '9.090909%' : 'none')};
    padding-bottom: ${(props) =>
        Math.floor(props.idx / 9) === 2 || Math.floor(props.idx / 9) === 5 ? '9.090909%' : 'none'};
`;

function Board() {
    const [squareState, setSquareState] = useState(defaultBoard);

    const handleClick = function (row, col) {
        const currState = squareState.slice(0);
        let currValue = currState[col];
        if (currValue === '.') currValue = '1';
        else if (currValue === '9') currValue = '.';
        else currValue = (parseInt(currValue, 10) + 1).toString(10);

        currState[col] = currValue;
        setSquareState(currState);
    };
    return (
        <BoardWrapper>
            {squareState.map((val, idx) => {
                return (
                    <SquareContainer idx={idx}>
                        <Square val={val} row={0} col={idx} handleClick={handleClick} />
                    </SquareContainer>
                );
            })}
        </BoardWrapper>
    );
}

export default Board;
