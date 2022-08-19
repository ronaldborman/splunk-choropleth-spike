import React from 'react';
import { DashboardContextProvider } from '@splunk/dashboard-context'
import DashboardCore from '@splunk/dashboard-core'
import AbsoluteLayoutViewer from '@splunk/dashboard-layouts/AbsoluteLayoutViewer'
import TestDataSource from '@splunk/datasources/TestDataSource'
import { SplunkThemeProvider } from '@splunk/themes'
import AreaClickHandler from './AreaClickHandler'
import ChoroplethSvg from '@splunk/visualizations/ChoroplethSvg'
import definition from './definition1'

console.log(definition)

const Preset = {
  dataSources: {
    'ds.test': TestDataSource
  },
  eventHandlers: {
    'area.click.handler': AreaClickHandler
  },
  layouts: {
    absolute: AbsoluteLayoutViewer
  },
  visualizations: {
    'splunk.choropleth.svg': ChoroplethSvg
  }
}

function Dashboard(props) {
  return (
    <SplunkThemeProvider family="enterprise" colorScheme="light" density="comfortable">
      <DashboardContextProvider>
        <DashboardCore
          width="100%"
          preset={Preset}
          definition={definition}
        />
      </DashboardContextProvider>
    </SplunkThemeProvider>
  );
}

export default Dashboard;
