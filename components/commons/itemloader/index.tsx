import React from 'react'
import '../../../static/styles/scss/commons/itemloader/index.scss'
// import '../../../static/styles/index.scss'

const ItemLoader: React.FunctionComponent = () => (
    <div className='loaderWrapper'>
        <div className='outline'>
            <div className='circle'></div>
        </div>
    </div>
);

export default React.memo(ItemLoader);