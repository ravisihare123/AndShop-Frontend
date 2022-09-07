// fashion img 
import img1 from '../../assets/img/product-image/product1.png'
import img2 from '../../assets/img/product-image/product2.png'
import img3 from '../../assets/img/product-image/product3.png'
import img4 from '../../assets/img/product-image/product4.png'
import img5 from '../../assets/img/product-image/product5.png'
import img6 from '../../assets/img/product-image/product6.png'
import img7 from '../../assets/img/product-image/product7.png'
import img8 from '../../assets/img/product-image/product8.png'
import img9 from '../../assets/img/product-image/product9.png'
import img10 from '../../assets/img/product-image/product10.png'

// furniture img 
import imgf1 from '../../assets/img/furniture/product/1.jpg'
import imgf2 from '../../assets/img/furniture/product/2.jpg'
import imgf3 from '../../assets/img/furniture/product/3.jpg'
import imgf4 from '../../assets/img/furniture/product/4.jpg'
import imgf5 from '../../assets/img/furniture/product/5.jpg'
import imgf6 from '../../assets/img/furniture/product/6.jpg'
import imgf7 from '../../assets/img/furniture/product/7.jpg'
import imgf8 from '../../assets/img/furniture/product/8.jpg'
import imgf9 from '../../assets/img/furniture/product/9.jpg'
import imgf10 from '../../assets/img/furniture/product/10.jpg'

// electronics img 
import imge1 from '../../assets/img/electronics/product/1.jpg'
import imge2 from '../../assets/img/electronics/product/2.jpg'
import imge3 from '../../assets/img/electronics/product/3.jpg'
import imge4 from '../../assets/img/electronics/product/4.jpg'
import imge5 from '../../assets/img/electronics/product/5.jpg'
import imge6 from '../../assets/img/electronics/product/6.jpg'
import imge7 from '../../assets/img/electronics/product/7.jpg'
import imge8 from '../../assets/img/electronics/product/8.jpg'
import imge9 from '../../assets/img/electronics/product/9.jpg'
import imge10 from '../../assets/img/electronics/product/10.jpg'

// pharmacy img 
import Pro1 from '../../assets/img/pharmacy/product/pro-1.png'
import Pro2 from '../../assets/img/pharmacy/product/pro-2.png'
import Pro3 from '../../assets/img/pharmacy/product/pro-3.png'
import Pro4 from '../../assets/img/pharmacy/product/pro-4.png'


export const ProductData = [
    {
        id: 1,
        labels: "Trending",
        category: "fashion",
        img: img1,
        hover_img: img10,
        title: "Green Dress For Woman",
        price: 38,
        description: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
        rating: {
            rate: 3.9,
            count: 30
        },
        color: [
            {
                color: "green",
                img: img8,
                quantity: 1,
            },
            {
                color: "red",
                img: img9,
                quantity: 1,
            },
            {
                color: "blue",
                img: img7,
                quantity: 1,
            },
        ]
    },
    {
        id: 2,
        labels: "45% OFF",
        category: "fashion",
        img: img2,
        hover_img: img9,
        title: "T-Shirt For Men",
        price: 72,
        description: `Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus.`,
        rating: {
            rate: 3.3,
            count: 80
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img10,
                quantity: 1,
            },
            {
                color: "blue",
                img: img5,
                quantity: 1,
            },
        ]
    },
    {
        id: 3,
        labels: "50% OFF",
        category: "fashion",
        img: img3,
        hover_img: img7,
        title: "V-Neck Dress",
        price: 34,
        description: `Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in 
        faucibus orci luctus et ultrices posuere cubilia Curae;`,
        rating: {
            rate: 4.9,
            count: 156
        },
        color: [
            {
                color: "green",
                img: img6,
                quantity: 1,
            },
            {
                color: "red",
                img: img7,
                quantity: 1,
            },
            {
                color: "blue",
                img: img8,
                quantity: 1,
            },
        ]
    },
    
]