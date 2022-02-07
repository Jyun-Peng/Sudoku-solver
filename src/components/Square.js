import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const SquareWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    background-color: var(
        ${(props) => {
            if (props.isEmpty) return '--gray-dark';
            else if (props.isAnswer) return '--green-dark';
            else return '--cyan-dark';
        }}
    );

    user-select: none;
    cursor: pointer;
    overflow: hidden;
    transition: transform 0.2s;

    @media (hover: hover) {
        &:hover {
            filter: brightness(1.1);
            transform: translateY(-3%);
        }
    }

    &:active {
        transition: none;
        filter: brightness(1);
        transform: translateY(5%);
    }
`;
const SquareSurface = styled.div`
    width: 100%;
    height: 80%;
    border-radius: 0 0 0.25rem 0.25rem;
    background-color: var(
        ${(props) => {
            if (props.isEmpty) return '--gray-light';
            else if (props.isAnswer) return '--green';
            else return '--cyan';
        }}
    );

    & > span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--white);
    }
`;
function Square({ className, val, handleClick, idx, isAnswer = false }) {
    const handleMouseUp = function () {
        let currVal = val === '.' ? 0 : parseInt(val, 10);
        currVal = (currVal + 1) % 10;

        handleClick(currVal, idx);
    };

    return (
        <SquareWrapper
            className={className}
            isEmpty={val === '.' ? true : false}
            onMouseUp={() => handleMouseUp()}
            isAnswer={isAnswer}
        >
            <SquareSurface isEmpty={val === '.' ? true : false} isAnswer={isAnswer}>
                <span>{val !== '.' && val}</span>
            </SquareSurface>
        </SquareWrapper>
    );
}

export default Square;
