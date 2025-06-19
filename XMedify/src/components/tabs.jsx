import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Padding } from '@mui/icons-material';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <Box sx={{ width: '100%', typography: 'body1', '& .MuiTab-root': {
    padding: 'unset', fontSize: '14px', fontWeight: '600'
  }, '& .MuiTabs-list': {
    display: 'flex', justifyContent: 'space-between',
  }, '& .Mui-selected': {outline: 'none'} }}>
    
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Find Doctors" value="1" />
            <Tab label="Hospitals" value="2" />
            <Tab label="Medicines" value="3" />
            <Tab label="Surgeries" value="4" />
            <Tab label="Software for Provider" value="5" />
            <Tab label="Facilities" value="6" />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
        <TabPanel value="6">Item Six</TabPanel> */}
      </TabContext>
    </Box>
  );
}