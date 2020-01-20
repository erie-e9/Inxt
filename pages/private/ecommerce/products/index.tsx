import { NextPage } from 'next'
// import Products from '../../../../components/private/ecommerce'
// import { ProductsService } from '../../../../services/ecommerce/products/product-service'

// @ts-ignore
const ProductsPage: NextPage = ({ models }) => <p>{models}</p>;

ProductsPage.getInitialProps = async () => {
    console.log('getInitialProps')

    // const productsServices = new ProductsService();
    // const models = await productsServices.getModels();
    const models: string = 'I am a product we'

    return { models };
}

export default ProductsPage