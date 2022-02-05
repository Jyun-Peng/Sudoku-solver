import styled from 'styled-components';

const ButtonWrapper = styled.div`
    width: min(20rem, 80vw);
    padding-bottom: 0.8rem;
    background-color: var(--red);
    border-radius: 1rem;

    user-select: none;
    cursor: pointer;
`;
const ButtonSurface = styled.div`
    padding: 1rem 0;
    background-color: var(--orange);
    border-radius: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--red-dark);
    text-align: center;
`;
function SolveButton({ handleClick }) {
    return (
        <ButtonWrapper onClick={handleClick}>
            <ButtonSurface>Solve</ButtonSurface>
        </ButtonWrapper>
    );
}

export default SolveButton;
