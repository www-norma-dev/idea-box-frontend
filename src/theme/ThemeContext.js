import React from 'react';

export default React.createContext({
    themeUsed: 'light',
    updateTheme: (name) => {}
});