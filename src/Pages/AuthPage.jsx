import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsmobile from '../aws-exports';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './HomePage'
import { Button } from '@aws-amplify/ui-react';
Amplify.configure(awsmobile);

const AuthPage = () => {
   
  return (
  <>
      <Authenticator>
      {({ signOut, user }) => (
        <main>
           
          <HomePage></HomePage>           
          <Button
  variation="primary"
  colorTheme="overlay"
  onClick={signOut}
  style={{ position: 'absolute', top: 0, right: 0 , marginTop: 20,marginRight: 20 }}
>
  SignOut
</Button>
          
        </main>
      )}
    </Authenticator>
  </>
  )
}

export default AuthPage