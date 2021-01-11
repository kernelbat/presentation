import React from 'react';
import { Row, Col, Container, Card, ListGroup, ListGroupItem, Table } from 'reactstrap'
import Fruits from 'components/fruitData'
const data = [{
  name: 'Avocado',
  title: 'Lorem ipsum',
  subtitle: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
  image: 'avocado.png',
  bg: 'bg-warning',
  text: "text-success"
},
{
  name: 'Avocado',
  title: 'Lorem ipsum',
  subtitle: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
  image: 'orange.png',
  text: "text-primary",
  bg: ''
}, {
  name: 'Avocado',
  title: 'Lorem ipsum',
  subtitle: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
  image: 'avocado.png',
  bg: 'bg-success',
  text: "text-warning"
}
]
const ingredients = [{
  name: "Total fat 0.3g",
  value: '0%'
},
{
  subname: 'Saturated fat 0.1g',
  value: "0%"
},
{
  name: "Sodium",
  subname: '1 mg',
  value: "0%"
},
{
  name: "Total carbohydrate",
  subname: "23g",
  value: "8%"
},
{
  subname: "Dietary fibre 2.6g",
  value: "9%"
},
{
  name: "Protien",
  subname: "1.1g",
  value: "2%"
}
]
const App = () => {
  return <div className='app'>
    <Container>
      <div className='app-container'>
        <Row className='p-5'>
          <div>
            <h6><i className='zmdi zmdi-minus-circle'></i> | Healthy Fruits</h6>
          </div>
          {data.map((val, i) => <Fruits key={i} value={val} index={i} />)}
          <Col sm={12} lg={12} md={12} x={12} className='absolute'>
            <Row>
              <Col sm={12} lg={12} md={12} x={12}>
                <Card className='shadow p-3 mb-5 bg-white rounded1'>
                  <h5>Nutrition fact</h5>
                  <Col sm={12} lg={12} md={12} x={12} className='row justify-content-between '>

                    <div> <h6>Serving size</h6></div>
                    <div> <h6>100g</h6>

                    </div>
                  </Col>
                  <hr className='seperator-bolder' />
                  <h6>Amount per serving</h6>

                  <Col sm={12} lg={12} md={12} x={12} className='row justify-content-between '>
                    <div> <h4>Calories</h4></div>
                    <div> <h6>89</h6>

                    </div>
                  </Col>
                  <hr className='seperator-bolder' />

                  <Table>
                    <tbody >
                      {ingredients.map((val, i) => <tr key={i}>
                        <th align='left' scope="row">{val.name && <b>{val.name}</b>}{val.subname}</th>

                        <td align='right'>{val.value}</td>
                      </tr>

                      )}
                    </tbody>
                    <tbody className='seperator-bolder w-100'>
                      {ingredients.map((val, i) => <tr key={i}>
                        <th align='left' scope="row">{val.name && <b>{val.name}</b>}{val.subname}</th>

                        <td align='right'>{val.value}</td>
                      </tr>

                      )}
                    </tbody>


                  </Table>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col sm={12} lg={12} md={12} x={12}>
            <ul className='text-primary' type='disc'>
              <li><h5>Delivery with love and care for you to relish</h5></li>
            </ul>
            <hr className='seperator-bolder' />
          </Col>
          <Col sm={12} lg={12} md={12} x={12}>
            <h6> About demo group</h6>
            <p className='text-muted'>Richard McClintock, a Latin scholar from Hampden-Sydney College, is credited with discovering the source behind the ubiquitous filler text. In seeing a sample of lorem ipsum, his interest was piqued by consectetur—a genuine, albeit rare, Latin word. Consulting a Latin dictionary led McClintock to a passage from De Finibus Bonorum et Malorum (“On the Extremes of Good and Evil”), a first-century B.C. text from the Roman philosopher Cicero.</p>
            <hr className='seperator-bolder' />
          </Col>

        </Row>
      </div>
    </Container>
  </div>
}
export default App