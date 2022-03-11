import React from 'react'
import { GeneralBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import { PricingMain } from '../../Components/Main'
import { Title } from '../../Components/Texts'

function Pricing() {
  return (
      <GeneralBody>
          <GeneralHeader></GeneralHeader>
          <PricingMain>
            <Title>Pricing Page</Title>
          </PricingMain>
      </GeneralBody>
  )
}

export {Pricing}