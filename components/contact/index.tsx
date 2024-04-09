import {Button, Textarea, Divider, Input, Link, Text} from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const ContactUs = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex direction={'column'} align={'center'}>
          <Text h2>
            Want to work with us?
          </Text>
          <Text span css={{ pb: '1px', color: '$blue600', fontSize: '30px' }}>
              Contact Us
          </Text>
        </Flex>

        <Flex
          css={{
              gap: '2rem',
              width: '60%',
              'flexDirection': 'column' }}
          wrap={'wrap'}
          justify={'center'}

        >
                <Input placeholder="Enter your email address" size="lg" css={{ width: '350px' }} />
                <Input placeholder="Title" size="lg" />
                <Textarea placeholder="Your message to us" rows={5} size="lg" />

            <Button css={{ width: '100px' }}>Submit </Button>






        </Flex>
      </Flex>

      <Divider
        css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
      />
    </>
  );
};
