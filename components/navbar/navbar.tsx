import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';


export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Customers',
      'Pricing',
      'Company',
      'Legal',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
               position: 'fixed',
               top: '0px',
               zIndex: 999,
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
              <Link href="/">
                  <AcmeLogo />
                  <Text b color="inherit" hideIn="xs">
                    Intelligent Vision
                  </Text>
              </Link>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        MosaicX
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="IV features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="fast"
                        showFullDescription
                        description="MosaicX takes images in miliseconds."
                        icon={icons.flash}
                     >
                        Fast
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="reliable"
                        showFullDescription
                        description="Our state-of-the-art AI platform reconstructs spectra at incredibel accuracy."
                        icon={icons.activity}
                     >
                        Reliable
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="cheap"
                        showFullDescription
                        description="MosaicX costs a fraction of a conventional HS camera."
                        icon={icons.flash}
                     >
                        Cheap
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="Diverse"
                        showFullDescription
                        description="Application areas are broad and integration is robust."
                        icon={icons.server}
                     >
                        +99% Uptime
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="applicable"
                        showFullDescription
                        description="Implementable in various camera-making procedures such as CMOS."
                        icon={icons.user}
                     >
                        Applicable
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link href="/../applications">Applications</Navbar.Link>
               <Navbar.Link href="/../about-us">About Us</Navbar.Link>
               <Navbar.Link href="/../faq">FAQ</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <Navbar.Link href="#contact-us">
               <Button auto flat >
                  Contact us
               </Button>
            </Navbar.Link>

            <ModalLogin />

            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
