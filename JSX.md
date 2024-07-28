JSX is a JavaScript syntax extension that allows you to describe what the UI should look like. It is a declarative way of creating React components, and it is often easier to read and write than pure JavaScript.

**Note**: To use JSX, you will need to transformer like Babel which will transform JSX into regular JS code.

Here is an example of the UserList component written in JSX:

```js
function UserList({ users }) {
  return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
  );
};
```

This code is equivalent to the following pure JavaScript code:

```js
function PureJSUserList ({ users }) {
  const usersElement = document.createElement('div');
  usersElement.innerHTML = `
    <ul>
      ${users.map((user) => `<li key=${user.id}>${user.name}</li>`).join('')}
    </ul>
  `;
  return usersElement;
};
```
**NOTE**: This is just an example of how we would have implemented it without JSX using plain JS

As you can see, JSX is a much more concise and readable way to write React components.
