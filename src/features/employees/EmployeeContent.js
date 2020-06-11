import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Information from 'components/Information';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  appBar: {
    boxShadow: 'none',
  },
}));

export default function EmployeeContent(props) {
  const classes = useStyles();
  const { data, sections } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Informações" {...a11yProps(0)} />
          <Tab label="Contrato" {...a11yProps(1)} />
          <Tab label="Interno" {...a11yProps(2)} />
          <Tab label="Gráficos" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Information section={sections.information} data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Information section={sections.contract} data={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Information section={sections.internal} data={data} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box p={2}>Em desenvolvimento</Box>
      </TabPanel>
    </div>
  );
}
