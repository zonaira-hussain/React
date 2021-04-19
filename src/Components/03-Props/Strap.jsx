
import {Container, Card, Button, CardTitle, CardText } from 'reactstrap';

const Strap =(props)=>{
    return (
        <Container>
          <br/>
          <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </Card>
          <br/>
          <Card body inverse color="primary">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
          <br/>
          <Card body inverse color="success">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
          <br/>
          <Card body inverse color="info">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
          <br/>
          <Card body inverse color="warning">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
          <br/>
          <Card body inverse color="danger">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
        </Container>
      );
    };

export default Strap