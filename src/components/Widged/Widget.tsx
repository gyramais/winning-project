import { useState } from "react"
import CallToActionStep from "../CallToActionStep/CallToActionStep"
import FormStep from "../FormStep/FormStep"
import './widget.css';

const Widget: React.FC = () => {
  const [step, setStep] = useState('call-to-action')

  return (
    <div className="flex align-middle justify-center w-full h-full m-auto">
      {step  === 'call-to-action' && (
        <CallToActionStep onFinish={() => setStep('form-step')}/>
      )}

      {step  === 'form-step' && (
        <div className="wrapper widget border bg-white border-gray-200 rounded-xl flex align-middle justify-center m-auto">
            <FormStep />
        </div>
      )}
    </div>
  )
}

export default Widget