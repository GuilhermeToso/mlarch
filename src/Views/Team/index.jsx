import React from 'react'
import { GeneralBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import { TeamMain } from '../../Components/Main'
import { Title } from '../../Components/Texts'

function Team() {
  return (
      <GeneralBody>
          <GeneralHeader></GeneralHeader>
          <TeamMain>
            <Title>Team Page</Title>
          </TeamMain>
      </GeneralBody>
  )
}

export {Team}