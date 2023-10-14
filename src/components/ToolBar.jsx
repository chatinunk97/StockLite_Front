import SubmitButton from "../components/SubmitButton"

export default function ToolBar({content,onSubmit,buttonText}) {
  return (
    <div className="flex flex-col gap-3">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {content}
    </div>
    <SubmitButton width="w-full" onClick={onSubmit}>
      {buttonText}
    </SubmitButton>
  </div>
  )
}
