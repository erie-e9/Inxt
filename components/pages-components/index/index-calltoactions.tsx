import React, { useState } from 'react'
// import { Modal } from 'antd'
import Button from 'antd/lib/button'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style/css'
// @ts-ignore
// import ModalCSS from 'antd/lib/modal/style/index.css'
// import '../../../static/styles/index.scss'
import ItemLazyLoader from '../../commons/lazyloader'

const CallToActions: React.FunctionComponent = () => {
    const [ loadingLeft, setloadingLeft ]: any = useState(false)
    const [ loadingRight, setloadingRight ]: any = useState(false)
    const [ visible, setvisible ]: any = useState(false)

    const _enterLoadingLeft = () => {
        setloadingLeft(!loadingLeft)
        setvisible(!visible)
    }

    const _enterLoadingRight = () => {
        setloadingRight(!loadingRight)
        setvisible(!visible)
    }

    const _handleOk = () => {
        setvisible(!visible)
    }
    
    const _handleCancel = () => {
        setvisible(!visible)
    }
    
    return(
        <div style={{ minHeight: 30}}>
            <ItemLazyLoader proprootMargin={150}>
                <div className='callToActions'>
                    <div className='CalltoActionButton' >
                        <Button type='dashed' size='small'
                            loading={loadingLeft} onClick={() => _enterLoadingLeft()}>
                            <span>Call to action 2</span>
                        </Button>
                    </div>
                    <div className='CalltoActionButton' >
                        <Button type='dashed' size='small'
                            loading={loadingRight} onClick={() => _enterLoadingRight()}>
                            <span>Call to action 3</span>
                        </Button>
                    </div>
                </div>
                <div>
                    <Modal
                        width={300}
                        title='Modal'
                        visible={visible}
                        onOk={_handleOk}
                        onCancel={_handleCancel}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </ItemLazyLoader>
        </div>
    )
}

export default React.memo(CallToActions);
