import React from 'react'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'

import FormRow from '../../ui/FormRow.tsx'
import Button from '../../ui/Button.tsx'

import { CabinI } from '../../types/cabins.interface.ts'
import useCreateCabin from './useCreateCabin.ts'
import useUpdateCabin from './useUpdateCabin.ts'

const CreateEditCabin: React.FC<{
  closeForm: () => void
  cabinToEdit?: CabinI
}> = ({ closeForm, cabinToEdit = {} }) => {
  const { ...cabinValues } = cabinToEdit
  const isEditSession = Object.keys(cabinValues).length > 0

  const { register, handleSubmit, formState } = useForm<CabinI>({
    defaultValues: isEditSession ? cabinValues : {},
  })
  const { errors } = formState
  const { createCabin, isCreating } = useCreateCabin()
  const { updateCabin, isUpdating } = useUpdateCabin()
  const isSubmitting = isCreating || isUpdating

  const onSubmit = (data: CabinI) => {
    const cabinData = {
      ...data,
      maxCapacity: +data.maxCapacity,
      regularPrice: +data.regularPrice,
      discount: +data.discount,
    }

    if (isEditSession) {
      updateCabin(
        { ...cabinData },
        {
          onSuccess: () => toast.success('Cabin updated successfully!'),
          onError: (err) => toast.error(err.message),
        },
      )
    } else {
      createCabin(
        { ...cabinData },
        {
          onSuccess: () => toast.success('New cabin added successfully!'),
          onError: (err) => toast.error(err.message),
        },
      )
    }

    closeForm()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[50rem] overflow-hidden rounded-md bg-grey-0 px-16 pb-10 pt-2 text-xl"
    >
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="cabinNumber">
          Cabin number
          {errors.cabinNumber && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.cabinNumber.message as string}
            </p>
          )}
        </label>

        <input
          type="text"
          id="cabinNumber"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('cabinNumber', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxCapacity">
          Maximum capacity
          {errors.maxCapacity && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.maxCapacity.message as string}
            </p>
          )}
        </label>
        <input
          type="text"
          id="maxCapacity"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="regularPrice">
          Regular price
          {errors.regularPrice && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.regularPrice.message as string}
            </p>
          )}
        </label>
        <input
          type="text"
          id="regularPrice"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('regularPrice', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Price should be at least 1',
            },
          })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="discount">
          Discount
          {errors.regularPrice && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.regularPrice.message as string}
            </p>
          )}
        </label>
        <input
          type="text"
          id="discount"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('discount', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="description">
          Description for website
          {errors.regularPrice && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.regularPrice.message as string}
            </p>
          )}
        </label>
        <input
          type="text"
          id="description"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="image">
          Cabin photo url
          {errors.image && (
            <p className="text-2xl font-semibold text-red-700">
              {errors.image.message as string}
            </p>
          )}
        </label>
        <input
          type="text"
          id="image"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('image', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow hasButton={true}>
        <Button variant="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isEditSession ? 'Edit cabin' : 'Add cabin'}
        </Button>
      </FormRow>
    </form>
  )
}

export default CreateEditCabin
