import React, { useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Tab, Button, Grid } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TabProps {
    value: string;
    label: string;
}

interface PanelsProps {
    value: string;
    child?: React.ReactNode;
}

export default function Closeable() {
  const [selectTab, setSelectedTab] = useState('1');
  const [tabs,setTabs] = useState<TabProps[]>([]);
  const [panels,setPanels] = useState<PanelsProps[]>([]);
  const [tabIndex, setTabIndex] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleTabOptions = (newTab: TabProps, newPanel: PanelsProps) => {
    setTabs([...tabs, newTab]);
    setPanels([...panels, newPanel]);
    setSelectedTab(`${tabIndex}`);
    setTabIndex(tabIndex + 1);
  }

  const createBlueBox = () => {
    //alert('Creating a new tab');

    const newTab: TabProps = {
        value: `${tabIndex}`,
        label: `Blue Box ${tabIndex}`
    };

    const newPanel: PanelsProps = {
        value:`${tabIndex}`,
        child: (
            <div style={{height: '300px', width: '300px', backgroundColor: 'blue'}}></div>
        )
    }

    handleTabOptions(newTab, newPanel);
  }

  const createRedBox = () => {
    //alert('Creating a new tab');

    const newTab: TabProps = {
        value: `${tabIndex}`,
        label: `Red Box ${tabIndex}`
    };

    const newPanel: PanelsProps = {
        value:`${tabIndex}`,
        child: (
            <div style={{height: '300px', width: '300px', backgroundColor: 'red'}}></div>
        )
    }

    handleTabOptions(newTab, newPanel);
  }

  const handleTabClose = (value:string) => {
    const tabArray = tabs.filter(t => t.value !== value);
    setTabs(tabArray);

    const panelArray = panels.filter(p => p.value !== value);
    setPanels(panelArray);

    setSelectedTab('0');
  }

  return (    
    <TabContext value={selectTab}>    
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="New Closeable Tab" value="0" />      
            {tabs.map(tab => (
                <Tab 
                    icon={<CloseIcon onClick={() => handleTabClose(tab.value)}/>}
                    iconPosition='end'
                    key={tab.value} 
                    label={tab.label} 
                    value={tab.value} 
                />
            ))}      
        </TabList>    
        <TabPanel value="0">      
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Button 
                        onClick={createBlueBox}
                        variant='contained' 
                        color='primary'>
                        Create Blue Box
                    </Button>       
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button 
                        onClick={createRedBox}
                        variant='contained' 
                        color='secondary'>
                        Create Red Box
                    </Button>       
                </Grid>
            </Grid>
                 
        </TabPanel>    
        {panels.map(panel => (
            <TabPanel key={panel.value} value={panel.value}>
                {panel.child}
            </TabPanel>
        ))}    
    </TabContext>    
  );
}