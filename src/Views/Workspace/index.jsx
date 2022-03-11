import React from 'react'
import { HeadMainBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import {Main} from '../../Components/Main'
import Splitter from '../../Components/Splits'
import Aside from '../../Components/Aside'
import Footer from '../../Components/Footer'
import Work from '../../Components/Work'
import Outliner from '../../Components/Outliner'
import { GUTTER } from '../../Constants'
import { useRef } from 'react'

const Workspace = () => {

    const ref = useRef();

    return (
        <HeadMainBody>
            <GeneralHeader></GeneralHeader>
            <Main>
                <Splitter 
                    gutterSize={GUTTER}
                    direction = "horizontal"
                    sizes={[15,85]}
                    minSize={20}
                    id="aside_splitter"
                    ref={ref}
                >
                    <Aside></Aside>
                    <Splitter 
                        gutterSize={GUTTER}
                        style={{flexDirection:"column"}}
                        direction="vertical"
                        sizes={[80,20]}
                        id="splitter_footer"
                    >
                        <Splitter
                            gutterSize={GUTTER}
                            style={{flexDirection:"row"}}
                            direction="horizontal"
                            sizes={[85,15]}
                            id="work_outliner"
                        >
                            <Work></Work>
                            <Outliner></Outliner>
                        </Splitter>
                        <Footer></Footer>
                    </Splitter>
                </Splitter>
            </Main>
        </HeadMainBody>
    )
}

export default Workspace