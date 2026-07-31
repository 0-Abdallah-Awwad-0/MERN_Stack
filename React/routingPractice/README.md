# Routing Practice

## Description
This project demonstrates basic routing in React using **React Router**. Different URLs render different content without reloading the page.

## Features
- Home route (`/home`) displays a welcome message.
- Dynamic route displays a number from the URL.
- Dynamic route displays a word from the URL.
- Styled route displays a word with dynamic text and background colors.

## Technologies Used
- React
- Vite
- React Router DOM
- JavaScript

## Routes

### Home
```
/home
```
Output:
```
Welcome
```

### Number
```
/4
```
Output:
```
The number is: 4
```

### Word
```
/hello
```
Output:
```
The word is: hello
```

### Styled Word
```
/hello/blue/red
```
Output:
- Text Color: Blue
- Background Color: Red

## What I Learned
- How to install and use React Router.
- How to create routes with `<Routes>` and `<Route>`.
- How to use URL parameters.
- How to retrieve route parameters with `useParams()`.
- How to conditionally display numbers and words using `isNaN()`.
- How to apply dynamic inline styling based on URL parameters.

## Author
Abdallah Awwad