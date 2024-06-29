import Form from '../../ui/Form.tsx'
import FormRow from '../../ui/FormRow.tsx'
import Input from '../../ui/Input.tsx'
import Textarea from '../../ui/Textarea.tsx'
import Button from '../../ui/Button.tsx'

const AddCabin = () => {
  return (
    <Form>
      <FormRow>
        <label className="text-2xl font-medium" htmlFor="name">
          Cabin name
        </label>
        <Input type="text" id="name" />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <Input type="text" id="maxCapacity" />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="regularPrice">
          Regular price
        </label>
        <Input type="number" id="regularPrice" />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="discount">
          Discount
        </label>
        <Input type="number" id="discount" />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="description">
          Description for website
        </label>
        <Textarea id="description" />
      </FormRow>

      <FormRow>
        <label className="text-2xl font-medium" htmlFor="image">
          Cabin photo url
        </label>
        <Input type="text" id="image" />
      </FormRow>

      <FormRow hasButton={true}>
        <Button variant="secondary" type="reset">
          Cancel
        </Button>
        <Button type="button">Add cabin</Button>
      </FormRow>
    </Form>
  )
}

export default AddCabin
