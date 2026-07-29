# Putting It Together

A simple React assignment that displays information about people using reusable components and props.

Each person has a birthday button that increases their age by one.

## Features

- Displays first name and last name
- Displays age
- Displays hair color
- Uses props to pass person information
- Uses the `useState` Hook to manage age
- Increases the age when the button is clicked

## Technologies Used

- React
- JavaScript
- JSX
- CSS
- Vite

## Main Concepts

### Props

Props are used to pass data from `App.jsx` to the `PersonCard` component.

Example:

```jsx
<PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
```
