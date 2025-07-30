const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product:'Socks',
            brand: 'TungShop',
            selectedVariant: 0,
            onSale: true,  //code challenge
            details: ["80% cotton", "20% polyester","Gender-neutral"],
            variants: [
                { id: 1904, color: "green", image: './assets/images/socks_green.jpg', quantity:50 },
                { id: 1805, color: "blue", image: './assets/images/socks_blue.jpg', quantity:0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateVariant(index){
            this.selectedVariant = index
        }
    },
    computed: {
        titile() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },

        //code challenge
        onSaleMessage() {
            return this.onSale ? this.brand + ' ' + this.product + ' is on sale (result from code challenge)' : ''
    }
    }
})
