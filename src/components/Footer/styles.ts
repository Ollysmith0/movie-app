import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;

    cursor: pointer;
    display: inline-block;
    font-family: nunito,roboto,proxima-nova,"proxima nova",sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    min-height: 40px;

    outline: 0;
    padding: 12px 14px;
    margin: 1em;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    touch-action: manipulation;
    vertical-align: middle;

    &:hover,
    &:active {
        background-color: initial;
        background-position: 0 0;
        color: #FF4742;
    }

    &:active {
        opacity: .5;
    }
`