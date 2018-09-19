/* Images */
import images from '../images/images';

/* Services */
class ProductsService {
    static products() {
        return new Promise((resolve) => {
            return resolve([{
                id: 0,
                checked: false,
                image: images.Insights,
                title: 'Insights',
                description: 'The best ecommerce overview in Latin America',
                value: 89.90
            },{
                id: 1,
                checked: false,
                image: images.Aliexpress,
                title: 'Aliexpress',
                description: 'Pratical guide for to do excellent purchases in Aliexpress',
                value: 89.90
            },{
                id: 2,
                checked: false,
                image: images.ClothesSizes,
                title: 'Clothes sizes',
                description: 'Complete guide about clothes sizes from China',
                value: 89.90
            }])
        }, 3000)
    }
}

export default ProductsService;