import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
// import './PersonalHeatmap.css';

class PersonalHeatmap extends React.Component {
  render() {
    return (
      <Table textAlign='center' celled collapsing padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              1
            </Table.HeaderCell>
            <Table.HeaderCell>
              2
            </Table.HeaderCell>
            <Table.HeaderCell>
              3
            </Table.HeaderCell>
            <Table.HeaderCell>
              4
            </Table.HeaderCell>
            <Table.HeaderCell>
              5
            </Table.HeaderCell>
            <Table.HeaderCell>
              6
            </Table.HeaderCell>
            <Table.HeaderCell>
              7
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell positive>
              <Icon name='checkmark' color='green' />
            </Table.Cell>
            <Table.Cell negative>
              <Icon name='close' color='red' />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default PersonalHeatmap;