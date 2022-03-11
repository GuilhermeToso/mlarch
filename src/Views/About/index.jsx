import React from 'react'
import { GeneralBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import { AboutMain } from '../../Components/Main'
import { Title } from '../../Components/Texts'

function About() {
  return (
      <GeneralBody>
          <GeneralHeader></GeneralHeader>
          <AboutMain>
            <Title>About Page</Title>
          </AboutMain>
      </GeneralBody>
  )
}

export {About}