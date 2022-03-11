import React from 'react'
import { GeneralBody } from '../../Components/Body'
import {GeneralHeader} from '../../Components/Header'
import { SignInMain } from '../../Components/Main'
import { Title } from '../../Components/Texts'

function SignIn() {
  return (
      <GeneralBody>
          <GeneralHeader></GeneralHeader>
          <SignInMain>
            <Title>Sign In Page</Title>
          </SignInMain>
      </GeneralBody>
  )
}

export {SignIn}