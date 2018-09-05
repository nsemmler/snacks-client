import React from 'react';
import {
  CustomInput,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

const SnackForm = ({handleEditSnack, handleAddSnack, singleSnack}) => {

  const snack = {
    id: singleSnack
      ? singleSnack.id
      : "",
    name: singleSnack
      ? singleSnack.name
      : "",
    description: singleSnack
      ? singleSnack.description
      : "",
    price: singleSnack
      ? Number(singleSnack.price)
      : "",
    img: singleSnack
      ? singleSnack.img
      : "",
    is_perishable: singleSnack
      ? singleSnack.is_perishable
      : ""
  }

  return (<Form className="form-horizontal well" onSubmit={event => {
      event.preventDefault();
      snack.id
        ? handleEditSnack(snack.id, event.target.title.value, event.target.description.value, event.target.price.value, event.target.img.value, (event.target.is_perishable.value || false))
        : handleAddSnack(event.target.title.value, event.target.description.value, event.target.price.value, event.target.img.value, (event.target.is_perishable.value || false));
    }}>

    <FormGroup>
      <Label for="title">Snack Name</Label>
      <Input type="textarea" defaultValue={snack.name} name="title" id="title" required="required"/>
    </FormGroup>

    <FormGroup>
      <Label for="description">Snack Description</Label>
      <Input type="textarea" defaultValue={snack.description} name="description" id="description" required="required"/>
    </FormGroup>
    <FormGroup>
      <Label for="url">Url</Label>
      <Input type="url" name="img" defaultValue={snack.img} id="img" placeholder="url" required="required"/>
    </FormGroup>

    <FormGroup>
      <Label for="price">Snack Price?</Label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
        <Input name="price" id="name" defaultValue={snack.price} placeholder="Amount" type="number" required="required"/>
        <InputGroupAddon addonType="append">.00</InputGroupAddon>
      </InputGroup>
    </FormGroup>
    <FormGroup>
      <Label for="is_perishable">Is your snack perishable?</Label>
      <div>
        <CustomInput value="true" type="radio" id="true" name="is_perishable" label="Yes" inline="inline"/>
        <CustomInput value="false" type="radio" id="false" name="is_perishable" label="No" inline="inline"/>
      </div>
    </FormGroup>

    <FormGroup check="check">
      <Col sm={{
          size: 10,
          offset: 0
        }}>
        <Button>{
            snack.id
              ? `Edit`
              : `Add`
          }</Button>
      </Col>
    </FormGroup>
  </Form>);
}

export default SnackForm
