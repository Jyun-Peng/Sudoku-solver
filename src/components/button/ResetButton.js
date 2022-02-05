import styled from 'styled-components';
import { FiRefreshCcw } from 'react-icons/fi';

const ButtonWrapper = styled.div`
    width: 4.4rem;
    padding-bottom: 0.8rem;
    background-color: var(--gray-dark);
    border-radius: 1rem;

    user-select: none;
    cursor: pointer;
`;
const ButtonSurface = styled.div`
    padding: 1rem 0;
    background-color: var(--gray-light);
    border-radius: inherit;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
    text-align: center;
`;
function ResetButton({ handleClick }) {
    return (
        <ButtonWrapper onClick={handleClick}>
            <ButtonSurface>
                <FiRefreshCcw />
            </ButtonSurface>
        </ButtonWrapper>
    );
}

export default ResetButton;
