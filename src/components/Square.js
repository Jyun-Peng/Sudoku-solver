import styled from 'styled-components';

const SquareWrapper = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 0.25rem;
    background-color: var(${(props) => (props.isEmpty ? '--gray-dark' : '--red')});

    user-select: none;
    cursor: pointer;
    overflow: hidden;
`;
const SquareSurface = styled.div`
    width: 100%;
    height: 85%;
    border-radius: 0.25rem;
    background-color: var(${(props) => (props.isEmpty ? '--gray-light' : '--cyan')});

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
function Square({ val, handleClick, idx }) {
    return (
        <SquareWrapper isEmpty={val === '.' ? true : false} onClick={() => handleClick(idx)}>
            <SquareSurface isEmpty={val === '.' ? true : false}>
                <span>{val !== '.' && val}</span>
            </SquareSurface>
        </SquareWrapper>
    );
}

export default Square;
