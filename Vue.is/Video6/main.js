const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product:'Tung Sell Socks',
            image: './assets/images/socks_green.jpg',
            inStock: false,
            details: ["80% cotton", "20% polyester","Gender-neutral"],
            variants: [
                { id: 1904, color: "green", image: './assets/images/socks_green.jpg' },
                { id: 1805, color: "blue", image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})
