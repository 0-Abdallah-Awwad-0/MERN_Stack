import Tabs from "./components/Tabs";

function App() {
  const tabsArray = [
    {
      label: "Tab 1",
      content: "This is the content for Tab 1",
    },
    {
      label: "Tab 2",
      content: "This is the content for Tab 2",
    },
    {
      label: "Tab 3",
      content: "This is the content for Tab 3",
    },
  ];

  return (
    <div>
      <h1>Tabs Assignment</h1>

      <Tabs tabs={tabsArray} />
    </div>
  );
}

export default App;