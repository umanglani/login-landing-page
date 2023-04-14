import { useEffect, useState } from "react";
import "./tabs.scss";

const Tabs = (props) => {

    const [tabs, setTabs] = useState(props.tabList);

    const selectTab = (tb) => {
        const allTabs = tabs;
        allTabs.map(t => t.active = false);
        const tabItem = allTabs.find(t => t.key === tb.key);
        if (tabItem) {
            tabItem.active = true;
        }
        setTabs([...allTabs]);
    }            

    return <div className="flex-box-start v-center tabs-container">
        {tabs.map((tab) => {
        return <div onClick={() => selectTab(tab)}
            key={tab.key}
            className={tab.active ? 'tab-item active enable-hover' : 'tab-item enable-hover'}>{tab.title}
        </div>})
    }
    </div>;
}

export default Tabs;
