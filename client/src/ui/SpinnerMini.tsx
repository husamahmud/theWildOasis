import { BiLoaderAlt } from 'react-icons/bi'

const SpinnerMini = () => {
  return (
    <div role="status">
      <BiLoaderAlt className="animate-spin-linear h-6 w-6 text-white" />
    </div>
  )
}

export default SpinnerMini
