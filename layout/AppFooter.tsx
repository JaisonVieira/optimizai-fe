/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            {/* <img src={`/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.png`} alt="Logo" width="200px"  className="mr-2" /> */}
            <img src={`/layout/images/logo-white.png`} alt="Logo" width="200px"  className="mr-2" />
        </div>
    );
};

export default AppFooter;
