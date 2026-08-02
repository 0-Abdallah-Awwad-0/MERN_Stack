import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        <p>{tabs[selectedTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;