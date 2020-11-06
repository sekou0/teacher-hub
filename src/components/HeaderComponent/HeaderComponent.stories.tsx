/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderComponent from './HeaderComponent';

function loginHandler(message: string) {
    alert(message);
}

storiesOf('HeaderComponent', module)
    .add('default', () => <HeaderComponent title="Anonymous" buttonHook={loginHandler} loggedIn={false} />)
    .add('Logged In', () => <HeaderComponent title="Your Name" buttonHook={loginHandler} loggedIn={true} />);
