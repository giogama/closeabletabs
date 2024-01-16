import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Dynamic from './Dynamic';
import Closeable from './Closeable';

export default function Layout() {
  const [selectTab, setSelectedTab] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  return (    
    <TabContext value={selectTab}>    
        <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Static" value="1" />
            <Tab label="Dynamic" value="2" />
            <Tab label="Closeable" value="3" />
        </TabList>    
        <TabPanel value="1">Content Static</TabPanel>
        <TabPanel value="2"><Dynamic/></TabPanel>
        <TabPanel value="3"><Closeable/></TabPanel>
    </TabContext>    
  );
}