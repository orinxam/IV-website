import React from 'react';
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
} from '@nextui-org/react';

export const ModalLogin = () => {

   const [visible, setVisible] = React.useState(false);
   const [username, setUsername] = React.useState('');
   const [password, setPassword] = React.useState('');
   const [error, setError] = React.useState('');
   const [showPassword, setShowPassword] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle the state to show/hide the password
   };
   const handleSubmit = (e) => {
      // e.preventDefault();

      // Check if username and password are correct
      if (username === 'correctUsername' && password === 'correctPassword') {
         // Navigate to the new page or perform any other actions for successful login
         console.log('Login successful');
      } else {
         // Set error message for incorrect credentials
         setError('Incorrect username or password');
      }
   };

   return (
      <div>
         <Navbar.Link onClick={handler}>User login</Navbar.Link>
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={18}>
                  Welcome to the {' '}
                  <Text b size={18}>
                     mosAIc
                  </Text>
                  {' '}platform
               </Text>
            </Modal.Header>
            <Modal.Body>
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  value={username}
                  placeholder="Email"
                  onChange={(e) => setUsername(e.target.value)}
               />
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
               {password.length > 0 && (
               <button
                   onClick={togglePasswordVisibility} // Toggle password visibility on click
                   style={{
                      position: 'relative',
                      top: '-50px',
                      right: '-290px',
                      cursor: 'pointer',
                      border: 'none',
                      background: 'transparent',
                      padding: '0px',
                      width: '24px',
                      height: '24px',
                   }}
               >
                   <img
                       src={showPassword ? "/eye_off.svg" : "/eye.svg"} // Use different eye icons based on showPassword state
                       alt={showPassword ? "Hide password" : "Show password"}
                       style={{ width: '100%', height: '100%' }}
                   />
               </button>
               )}
               {error && (
                  <p style={{ color: 'red', marginTop: '-40px' }}>{error}</p>
               )}
               <Row justify="space-between">
                  <Checkbox>
                     <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
               </Row>
            </Modal.Body>
            <Modal.Footer>
               <Button auto flat color="error" onClick={closeHandler}>
                  Close
               </Button>
               <Button auto onClick={handleSubmit}>
                  Sign in
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
