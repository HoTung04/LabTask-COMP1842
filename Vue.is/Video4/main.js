const app = Vue.createApp({
    data() {
        return {
            product:'Tung Sell Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true,
            details: ["80% cotton", "20% polyester","Gender-neutral"],

            variants: [
                {
                    variantId: 1904,
                    variantColor: "green"
                },
                {
                    variantId: 1805,
                    variantColor: "blue"
                }
            ],
            sizes: ["S", "M", "L", "size up by Tung"] //code challenge
        }
    }
})
