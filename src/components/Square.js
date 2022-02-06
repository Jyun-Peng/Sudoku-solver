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
function Square({ val, handleClick, idx, isAnswer = false }) {
    return (
        <SquareWrapper isEmpty={val === '.' ? true : false} onClick={() => handleClick(idx)} isAnswer={isAnswer}>
            <SquareSurface isEmpty={val === '.' ? true : false} isAnswer={isAnswer}>
                <span>{val !== '.' && val}</span>
            </SquareSurface>
        </SquareWrapper>
    );
}

export default Square;
