import { IconButton } from "../Buttons";
import { OutlineStyle, OutlineContainer } from "./Outliner.styles";
import { UilLayerGroup } from '@iconscout/react-unicons'

const Outliner = () => {
    return (
        <OutlineContainer>
            <IconButton>
                <UilLayerGroup></UilLayerGroup>
            </IconButton>
            <OutlineStyle>
                <h1 style={{color:"#000"}}>
                    This is the Outliner
                </h1>
            </OutlineStyle>
        </OutlineContainer>
            
    )
}

export default Outliner