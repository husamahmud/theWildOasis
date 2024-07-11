import React from 'react'

import useSettings from './useSettings.ts'
import useUpdateSettings from './useUpdateSettings.ts'

import FormRow from '../../ui/FormRow.tsx'
import Spinner from '../../ui/Spinner.tsx'
import toast from 'react-hot-toast'

const UpdateSettingsForm = () => {
  const {
    settings: { minBookingLen, maxBookingLen, maxGuests, breakfastCost } = {},
    isLoading,
  } = useSettings()
  const { updateSetting, isUpdating } = useUpdateSettings()

  if (isLoading) return <Spinner />

  const handleUpdate = (
    e: React.FocusEvent<HTMLInputElement>,
    field: string,
  ) => {
    const value = +e.target.value
    if (!value) return

    if (field === 'minBookingLen' && value < 1) {
      toast.error('Minimum booking length must be at least 1')
      return
    } else if (field === 'maxBookingLen' && value > 90) {
      toast.error('Maximum booking length must be at most 90')
      return
    } else if (field === 'maxGuests' && value < 1) {
      toast.error('Maximum guests must be at least 1')
      return
    } else if (field === 'breakfastCost' && value < 0) {
      toast.error('Breakfast cost must be at least 0')
      return
    }

    updateSetting({ [field]: +e.target.value })
  }

  return (
    <form className="w-[50rem] overflow-hidden rounded-md bg-grey-0 px-16 pb-10 pt-2 text-xl">
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="minBookingLen">
          Minimum nights/booking
        </label>

        <input
          type="number"
          id="minBookingLen"
          defaultValue={minBookingLen}
          onBlur={(e) => handleUpdate(e, 'minBookingLen')}
          disabled={isUpdating}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxBookingLen">
          Maximum nights/booking
        </label>

        <input
          type="number"
          id="maxBookingLen"
          disabled={isUpdating}
          defaultValue={maxBookingLen}
          onBlur={(e) => handleUpdate(e, 'maxBookingLen')}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxGuests">
          Maximum guests/booking
        </label>

        <input
          type="number"
          id="maxGuests"
          defaultValue={maxGuests}
          disabled={isUpdating}
          onBlur={(e) => handleUpdate(e, 'maxGuests')}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="breakfastCost">
          Breakfast price
        </label>

        <input
          type="number"
          id="breakfastCost"
          disabled={isUpdating}
          defaultValue={breakfastCost}
          onBlur={(e) => handleUpdate(e, 'breakfastCost')}
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
        />
      </FormRow>
    </form>
  )
}

export default UpdateSettingsForm
