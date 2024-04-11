import React from 'react';
import {Divider, Table, Text} from "@nextui-org/react";
import {Flex} from '../styles/flex';

export const Comparison = () => {
  return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
                'pt': '40px',
                'px': '$6',
                'pb': '$6',
                '@md': {
                   px: '100px',
                },
            }}
         >
            <Text h2 css={{textAlign: 'center', pb:'10px'}}>
               Current HS cameras are not mass-useable - MosaicX is.
            </Text>

            <Table aria-label="Example static collection table" css={{
                width: '800px',
                flexDirection: 'column',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: "center",
                fontSize: '20px',
                pt: '$10',
            }}>
              <Table.Header>
                <Table.Column css={{textAlign: 'center', fontSize: '30px'}}>Feature</Table.Column>
                <Table.Column css={{textAlign: 'center', fontSize: '30px'}}>HS Camera </Table.Column>
                <Table.Column css={{textAlign: 'center', fontSize: '30px'}}>MosaicX </Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row key="1">
                  <Table.Cell>Price</Table.Cell>
                  <Table.Cell>$40,000</Table.Cell>
                  <Table.Cell>$20</Table.Cell>
                </Table.Row>
                <Table.Row key="2">
                  <Table.Cell>Speed</Table.Cell>
                  <Table.Cell>minutes</Table.Cell>
                  <Table.Cell>miliseconds</Table.Cell>
                </Table.Row>
                <Table.Row key="3">
                  <Table.Cell>Spatial resolution</Table.Cell>
                  <Table.Cell>Low</Table.Cell>
                  <Table.Cell>High</Table.Cell>
                </Table.Row>
                <Table.Row key="4">
                  <Table.Cell> # channels</Table.Cell>
                  <Table.Cell>Hundreds</Table.Cell>
                  <Table.Cell>Hundreds</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
         </Flex>
    <Divider
       css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
    />
  </>
  );
};
