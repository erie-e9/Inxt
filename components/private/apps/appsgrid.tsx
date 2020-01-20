import React, { Component } from 'react'
import appsgriditems from '../../../utils/appsgriditems'
// import { Card, Modal } from 'antd'
import Card from 'antd/lib/card'
import 'antd/lib/card/style/css'
import Modal from 'antd/lib/modal'
import 'antd/lib/modal/style/css'
import '../../../static/styles/scss/pages-style/private/appsgrid/index.scss'
import { FacebookIcon, InstagramIcon, MessengerIcon, WhatsAppIcon, YoutubeIcon, TwitterIcon, SkypeIcon, SnapchatIcon, 
    ShopifyIcon, PayPalIcon, AmazonIcon, PinterestIcon, EbayIcon, MercadolibreIcon } from '../../../utils/styled-components-global'

interface IState {
    items: any[];
    visible: boolean;
    // subitems:InxtAppGridSubItems[];
}

interface IProps {

}

export default class AppsGrid extends Component<IProps, IState> {

    public state: IState;
    constructor(props: IProps) {
        super(props);
        this.state = {
            items: [],
            visible: false
            // subitems: [],
        };
    }

    componentDidMount(): any {
        this.setState({
            items: appsgriditems['items']
        });
    }

    _switchicon(icon: any) {
        switch (icon) {
            case 'facebook':
                return <FacebookIcon />;
                break;
            case 'instagram':
                return <InstagramIcon />;
                break;
            case 'messenger':
                return <MessengerIcon />;
                break;
            case 'whatsapp':
                return <WhatsAppIcon />;
                break;
            case 'youtube':
                return <YoutubeIcon />;
                break;
            case 'twitter':
                return <TwitterIcon />;
                break;
            case 'skype':
                return <SkypeIcon />;
                break;
            case 'snapchat':
                return <SnapchatIcon />;
                break;
            case 'paypal':
                return <PayPalIcon />;
                break;
            case 'amazon':
                return <AmazonIcon />;
                break;
            case 'pinterest':
                return <PinterestIcon />;
                break;
            case 'ebay':
                return <EbayIcon />;
                break;
            case 'shopify':
                return <ShopifyIcon />;
                break;
            case 'mercadolibre':
                return <MercadolibreIcon />;
                break;
        
            default:
                break;
        }
    }

    _showModal = () => {
        this.setState({
          visible: true,
        });
    };

    // @ts-ignore
    _handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };
    
    // @ts-ignore
    _handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    render(): JSX.Element {
        return (
            <>
                <div className='appgrid-container'>
                    <Card title='Tools' size='small'
                        style={{ marginLeft: 10, marginRight: 10 }} 
                        bordered={false}
                        hoverable={true}>
                            {
                                // @ts-ignore
                                this.state.items.map((element, i) => {
                                    if (Array.isArray(element.socialnetworks)) {
                                       return (
                                            // @ts-ignore
                                            element.socialnetworks.map((app) => {
                                                const gridStyle: any = {
                                                    // width: '33%',
                                                    width: `${100 / element.socialnetworks.length}%`,
                                                    textAlign: 'center',
                                                };
                                                
                                                return (
                                                    <Card.Grid style={gridStyle} key={app.key} >
                                                        <span onClick={this._showModal}>
                                                        { this._switchicon(app.icon) }
                                                        </span>
                                                    </Card.Grid>
                                                );
                                            })
                                        )
                                    }
                                })
                            }
                    </Card>
                    <Modal
                        width={300}
                        title='Modal'
                        visible={this.state.visible}
                        onOk={this._handleOk}
                        onCancel={this._handleCancel}
                        >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </div>
            </>
        );
    }
}