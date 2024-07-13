import FormRow from '../../ui/FormRow.tsx'
import Button from '../../ui/Button.tsx'

const UpdateUserDataForm = () => {
  return (
    <form className="mx-auto w-full rounded-lg bg-grey-0 px-16 py-10 shadow-md">
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="minBookingLen">
          Email address
        </label>

        <input
          type="number"
          id="minBookingLen"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxBookingLen">
          Full name
        </label>

        <input
          type="number"
          id="maxBookingLen"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxBookingLen">
          Avatar image
        </label>

        <input
          type="number"
          id="maxBookingLen"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <Button variant="primary">Update</Button>
        <Button variant="secondary">Cancel</Button>
      </FormRow>
    </form>
  )
}

export default UpdateUserDataForm
