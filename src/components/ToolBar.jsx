import SubmitButton from "../components/SubmitButton"

export default function ToolBar({content,onSubmit,buttonText,isLoading}) {
  return (
    <div className="flex flex-col gap-3">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
    {content}
    </div>
    <SubmitButton width="w-full" onClick={onSubmit} isLoading={isLoading}>
      {buttonText}
    </SubmitButton>
  </div>
  )
}
