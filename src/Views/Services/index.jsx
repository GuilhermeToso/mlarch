import React from 'react'
import { GeneralBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import { ServicesMain } from '../../Components/Main'
import { Title } from '../../Components/Texts'

function Services() {
  return (
      <GeneralBody>
          <GeneralHeader></GeneralHeader>
          <ServicesMain>
            <Title>Services Page</Title>
          </ServicesMain>
      </GeneralBody>
  )
}

export {Services}