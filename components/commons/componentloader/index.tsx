import React from 'react'
import '../../../static/styles/scss/commons/componentloader/index.scss'

const ComponentLoader: React.FunctionComponent = () => (
    <div className='loaderWrapperComponent'>
        <div className='loader'>Loading...</div>
    </div>
);

export default React.memo(ComponentLoader);