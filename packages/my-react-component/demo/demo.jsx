import React from 'react';
import { render } from 'react-dom';

import { SplunkThemeProvider } from '@splunk/themes';
import { getUserTheme } from '@splunk/splunk-utils/themes';

import MyReactComponent from '../src/MyReactComponent';

getUserTheme
    .then((theme) => {
        const containerEl = document.getElementById('main-component-container');
        const splunkTheme = {
            family: 'enterprise',
            colorScheme: theme,
            density: 'comfortable',
        };
        render(
            <SplunkThemeProvider {...splunkTheme}>
                <MyReactComponent name="World" />
            </SplunkThemeProvider>,
            containerEl
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
