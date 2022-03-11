import { Node } from "./Node.styles";
import { Handle, Position } from 'react-flow-renderer'

export const InputTensor = ({data}) => {
    return (
        <Node>
            <Handle
                type='source' position={Position.Bottom}
            ></Handle>
            <Handle
                type='target' position={Position.Top}
            ></Handle>
        </Node>
    )
}

export {Node}
