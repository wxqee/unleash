'use strict';

const test = require('ava');
const User = require('./user');

test('should create user', t => {
    const user = new User({ name: 'ole', email: 'some@email.com' });
    t.is(user.name, 'ole');
    t.is(user.email, 'some@email.com');
    t.is(
        user.imageUrl,
        'https://gravatar.com/avatar/d8ffeba65ee5baf57e4901690edc8e1b?size=42&default=retro',
    );
});

test('should require email', t => {
    const error = t.throws(
        () => {
        const user = new User(); // eslint-disable-line
        },
        { instanceOf: Error },
    );

    t.is(error.message, 'Email "value" is required');
});

test('Should create user with only email defined', t => {
    const user = new User({ email: 'some@email.com' });

    t.is(user.email, 'some@email.com');
});
