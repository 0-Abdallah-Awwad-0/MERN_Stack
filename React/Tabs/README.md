# Tabs React Assignment

## Description

This project is a simple React application that demonstrates how to create a reusable **Tabs component**.

The `Tabs` component accepts an array of objects through props. Each tab contains:

* `label` – the name displayed on the tab button.
* `content` – the content displayed when the tab is selected.

When the user clicks on a tab, React updates the state and displays the corresponding content.

## Features

* Reusable `Tabs` component
* Accepts an array of varying length
* Uses React `useState`
* Uses `map()` to display the tabs
* Clicking a tab displays the correct content
* Content updates immediately without refreshing the page

## Technologies Used

* React
* JavaScript
* HTML
* CSS

## Project Structure

```text
src/
├── components/
│   └── Tabs.jsx
├── App.jsx
└── main.jsx
```

## How It Works

The component uses `useState` to keep track of the currently selected tab.

```jsx
const [selectedTab, setSelectedTab] = useState(0);
```

The tabs are displayed using `map()`:

```jsx
tabs.map((tab, index) => (
  <button
    key={index}
    onClick={() => setSelectedTab(index)}
  >
    {tab.label}
  </button>
))
```

When a user clicks a tab, `setSelectedTab(index)` changes the selected tab.

The correct content is then displayed using:

```jsx
tabs[selectedTab].content
```

## Run the Project

Install the dependencies:

```bash
npm install
```

Start the project:

```bash
npm run dev
```


