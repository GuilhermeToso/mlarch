import styled from "styled-components";

export const BarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;    
`

export const ToolBar =styled(BarContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4,1fr) 4fr repeat(2,1fr);
    grid-template-areas:
        "new open clean done none tensorflow pytorch"
`

export const DoneBar = styled(BarContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4,1fr) 6fr;
    grid-template-areas:
        "show export cancel delete none"
`