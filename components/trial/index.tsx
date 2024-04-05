import {Button, Divider, Input, Text} from '@nextui-org/react';
import React from 'react';
import {Flex} from '../styles/flex';

export const Trial = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               px: '$6',
            }}
            justify={'center'}
            direction={'column'}
            align={'center'}
         >
            <Text h3>Sign up to our newsletter</Text>
           <Flex
              css={{
                 gap: '20px',
                 pt: '30px',
              }}
              wrap={'wrap'}
           >
              <Input placeholder="Enter your email address" size="lg" />
              <Button>Stay up to date </Button>
           </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
