import { useState } from "react"
import CallToActionStep from "../CallToActionStep/CallToActionStep"
import FormStep from "../FormStep/FormStep"

const Widget: React.FC = () => {
  const [step, setStep] = useState('call-to-action')

  return (
    <div className="wrapper widget border bg-white border-gray-200 rounded-xl w-full h-full flex align-middle justify-center">
        {step  === 'call-to-action' && (
          <CallToActionStep onFinish={() => setStep('form-step')}/>
        )}

        {step  === 'form-step' && <FormStep/>}
    </div>
  )
}

export default Widget