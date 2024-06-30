import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import FormRow from '../../ui/FormRow.tsx'
import Button from '../../ui/Button.tsx'

import { addCabin } from '../../services/cabins.api.ts'
import { CabinI } from '../../types/cabins.interface.ts'

const AddCabin = () => {
  const { register, handleSubmit, reset } = useForm()

  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: addCabin,
    onSuccess: () => {
      toast.success('New cabin added successfully!')
      queryClient.invalidateQueries({ queryKey: ['cabins'] })
      reset()
    },
    onError: err => toast.error(err.message),
  })

  const onSubmit = (data: CabinI) => {
    mutate({
      ...data,
      maxCapacity: +data.maxCapacity,
      regularPrice: +data.regularPrice,
      discount: +data.discount,
    })
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[60rem] overflow-hidden rounded-md border border-grey-100 bg-grey-0 px-16 py-10 text-xl">
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="cabinNumber">
          Cabin name
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
        </label>
        <input
          type="number"
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
        </label>
        <input
          type="number"
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
        </label>
        <input
          type="number"
          id="discount"
          className="rounded-md border border-grey-300 bg-grey-0 px-6 py-3 shadow-sm"
          {...register('discount', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="description">
          Description for website
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
        <Button type="submit">Add cabin</Button>
      </FormRow>
    </form>
  )
}

export default AddCabin
