import { Button, Input, TextField } from "@mui/material"
import { useState } from "react"
import InputMask from 'react-input-mask';
import Modal from '../Modal/Modal'


type Props = {
  onFinish: () => any
}

const CallToActionStep: React.FC<Props> = ({onFinish}) => {
  return (
    <div className="flex flex-row align-middle w-full h-full" onClick={onFinish}>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="">
          Procurando crédito rápido para impulsionar o seu negócio?
        </h1>

        <p className="mt-4">
          Faça seu cadastro e solicite sua proposta agora!!
        </p>
      </div>

      <div className="flex-1 text-right">
        gmm
      </div>
    </div>
  )
}

export default CallToActionStep