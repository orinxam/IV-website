import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import {Divider, Text} from "@nextui-org/react";

export const Overlay = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
      <>
        <Text h2 css={{ textAlign: 'center', marginTop: '60px' }}>
          Can you spot the X?
        </Text>
      <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'row',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'column',
                  mt: '30px',
               },
            }}
            justify={'center'}
          >
         <Box
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
          >
        {isHovering ? (
          <Image src="/mock.png" width={500} height={300} alt="logo" />
        ) : (
          <Image src="/prism.jpeg" width={500} height={300} alt="logo" />
        )}
      </Box>
      <Divider css={{ position: 'relative', inset: '0p', left: '0', mt: '$10' }} />
      </Flex>
      </>
  );
};

