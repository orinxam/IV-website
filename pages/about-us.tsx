import { Divider, Text, Image, Link } from '@nextui-org/react';
import React, { useState } from 'react';
import {Box} from '../components/styles/box';
import {Flex} from '../components/styles/flex';
import {Layout} from "../components/navbar/layout";

const AboutUs = () => {
  // Define team member data
  const teamMembers = [
    {
      name: 'Fedja',
      imageSrc: 'fedja.png',
      linkedin: 'https://www.linkedin.com/in/fedja-bobanović-4745013/',
      title: 'Fedja - CTO',
    },
    {
      name: 'Arnold',
      imageSrc: 'arnold.png',
      linkedin: 'https://www.linkedin.com/in/arnold-giske-a64234113/',
      title: 'Arnold - CEO',
    },
    {
      name: 'Max',
      imageSrc: 'Max_head_round.pdf',
      linkedin: 'https://www.linkedin.com/in/maximilian-niroomand/',
      title: 'Max - Head of AI',
    },
  ];

  // @ts-ignore
    return (
  <Layout>
      <Text h2 css={{ textAlign: 'center', marginTop: '50px' }}>
        Leadership Team
      </Text>

      <Flex
        css={{
          gap: '200px',
          px: '300px',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          '@sm': {
            flexDirection: 'row',
            mt: '70px',
          },
        }}
        justify={'center'}
      >
        {teamMembers.map((member, index) => (
          <Box key={index}>
            <Link href={member.linkedin}>
              <Image
                src={member.imageSrc}
                alt={member.name}
                width="250px"
                height="250px"
                objectFit="contain"
                cursor="pointer"
              />
            </Link>
            <Text css={{ textAlign: 'center', marginTop: '20px'}}>{member.title}</Text>
          </Box>
        ))}
      </Flex>
  </Layout>
  );
};

export default AboutUs;
