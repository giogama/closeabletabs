import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Button } from '@mui/material';

interface TabProps {
    value: string;
    label: string;
}

interface PanelsProps {
    value: string;
    child?: React.ReactNode;
    children?: string | React.ReactNode  | React.ReactNode [] | (() => React.ReactNode );
}

export default function Dynamic() {
  const [selectTab, setSelectedTab] = useState('1');
  const [tabs,setTabs] = useState<TabProps[]>([]);
  const [panels,setPanels] = useState<PanelsProps[]>([]);
  const [tabIndex, setTabIndex] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const createNewTab = () => {
    //alert('Creating a new tab');

    const newTab: TabProps = {
        value: `${tabIndex}`,
        label: `Dynamic Tab ${tabIndex}`
    };

    const newPanel: PanelsProps = {
        value:`${tabIndex}`,
        child: (
            <div>Hello I am dynamic tab {tabIndex}</div>
        ),
        children: (
            <div>Hello I am dynamic tab {tabIndex}</div>
        )
    }

    setTabs([...tabs, newTab]);
    setPanels([...panels, newPanel]);
    setSelectedTab(`${tabIndex}`);
    setTabIndex(tabIndex + 1);
  }

  return (    
    <TabContext value={selectTab}>    
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Create New" value="0" />      
            {tabs.map(tab => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}      
        </TabList>    
        <TabPanel value="0">            
            <Button 
                onClick={createNewTab}
                variant='contained' 
                color='primary'>
                Create Dynamic Tab
            </Button>            
        </TabPanel>    
        {panels.map(panel => (
            <TabPanel key={panel.value} value={panel.value}>
                {panel.child}
            </TabPanel>
        ))}    
    </TabContext>    
  );
}