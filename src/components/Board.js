import { useState } from 'react';
import styled from 'styled-components';
import Square from './Square';

const BoardWrapper = styled.div`
    width: min(36rem, 95vw);
    aspect-ratio: 10/9;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1.1fr 1fr 1fr 1.1fr 1fr 1fr 1fr;
    gap: 1%;
`;

const SquareContainer = styled.div`
    padding-right: ${(props) => ((props.idx + 1) % 3 === 0 && (props.idx + 1) % 9 !== 0 ? '9.090909%' : 'none')};
    padding-bottom: ${(props) =>
        Math.floor(props.idx / 9) === 2 || Math.floor(props.idx / 9) === 5 ? '9.090909%' : 'none'};
`;

function Board({ state, handleClick }) {
    return (
        <BoardWrapper>
            {state.map((val, idx) => {
                return (
                    <SquareContainer idx={idx}>
                        <Square val={val} idx={idx} handleClick={handleClick} />
                    </SquareContainer>
                );
            })}
        </BoardWrapper>
    );
}

export default Board;
