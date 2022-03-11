import React, { useState } from 'react'
import ReactFlow, { 
    removeElements, addEdge, MiniMap,
    Controls, Background
 } from 'react-flow-renderer'
import { InputTensor } from '../Nodes'
import { WorkStyle } from './Work.styles'

const initElements = [
    {
        id:"1",
        type:"input_tensor",
        data:{
            label: 'React Flow'
        }, 
        position: {x:100, y:100},
    },
    {
        id:"2",
        type:"input_tensor",
        data:{
            label: 'React Flow'
        }, 
        position: {x:200, y:200},
    },
    {
        id:"3",
        type:"input_tensor",
        data:{
            label: 'React Flow'
        }, 
        position: {x:200, y:0},
    }, 
    {
        id:"e1-2",
        source:'1',
        target:'2'
    }, 
]
const customNodes = {
    input_tensor: InputTensor,
}
const onLoad = (reactFlowInstance) => {
    console.log('Flow loaded: ', reactFlowInstance)
    reactFlowInstance.fitView()
}


const Work = () => {

    const [elements, setElements] = useState(initElements)

    const onElementsRemove = (elementsToRemove) => {
        setElements((els) => removeElements(elementsToRemove, els))
    }

    const onConnect = (params) => {
        setElements((els) => addEdge(params,els))
    }


    return (

        <WorkStyle>
            <ReactFlow
                elements={elements}
                onElementsRemove={onElementsRemove}
                onConnect={onConnect}
                onLoad={onLoad}
                snapToGrid={true}
                snapGrid={[15,15]}
                nodeTypes={customNodes}
            >
                <MiniMap
                    nodeStrokeColor={
                        (n) => {
                            if (n.style?.background) return n.style.background
                            if (n.type === 'input') return '#0041d0'
                            if (n.type === 'output') return '#ff0072'
                            if (n.type === 'default') return '#1a192b'

                            return '#eee'
                        }
                    }
                    nodeColor={(n)=> {
                        if (n.style?.background) return n.style.background
                        return '#fff'
                    }}
                    nodeBorderRadius={2}
                >
                </MiniMap>
                <Controls></Controls>
                <Background color="#aaa" gap={16}></Background>
            </ReactFlow>
        </WorkStyle>
    )
}

export default Work