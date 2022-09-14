import FormStep from "../FormStep/FormStep"

const Widget: React.FC = () => {
  return (
    <div className="bg-slate-100 w-full h-full p-8">
      <div className="wrapper widget border bg-white border-gray-200 rounded-xl w-full h-full flex align-middle justify-center">
          <FormStep/>
      </div>
    </div>
  )
}

export default Widget