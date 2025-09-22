import type { Product } from "../../src/components/Product";

const initProduct: Product[] =  [
    
       {
    id: 1,
    nameProduct: "Laptop Acer Aspire 5",
    description: "Laptop văn phòng với hiệu năng ổn định, màn hình Full HD 15.6 inch.",
    price: 15990000,
    quantity: 10,
    image: "https://tse2.mm.bing.net/th/id/OIP.VYj9m_83UMD3nis6Ko3OSwHaFX?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    nameProduct: "Chuột Logitech M331",
    description: "Chuột không dây yên tĩnh, thiết kế công thái học.",
    price: 399000,
    quantity: 25,
    image: "https://tse2.mm.bing.net/th/id/OIP.VYj9m_83UMD3nis6Ko3OSwHaFX?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 3,
    nameProduct: "Tai nghe Sony WH-CH520",
    description: "Tai nghe Bluetooth với âm thanh rõ nét và thời lượng pin dài.",
    price: 1290000,
    quantity: 15,
    image: "https://tse2.mm.bing.net/th/id/OIP.VYj9m_83UMD3nis6Ko3OSwHaFX?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    nameProduct: "Bàn phím cơ DareU EK87",
    description: "Bàn phím cơ TKL switch D blue, đèn LED RGB.",
    price: 890000,
    quantity: 20,
    image: "https://tse2.mm.bing.net/th/id/OIP.VYj9m_83UMD3nis6Ko3OSwHaFX?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 5,
    nameProduct: "Màn hình LG UltraGear 24GN600",
    description: "Màn hình gaming 144Hz, tấm nền IPS, độ phân giải Full HD.",
    price: 3990000,
    quantity: 8,
    image: "https://tse2.mm.bing.net/th/id/OIP.VYj9m_83UMD3nis6Ko3OSwHaFX?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
  ]
interface Action {
    type : string,
    payload: Product;
}

export const ProductReducer = (state = initProduct, action: Action) => {
  switch (action.type) {
    case "listProduct":
      return state;
    case "addToCart":
      { const oder = action.payload;
        console.log(oder);
        

      const findProduct = state.find((element) => element.id === oder.id)

      if (findProduct) {
      return state.map((item) => item.id === oder.id ? {...item, quantity: item.quantity + 1}: item);  
      } 
      return [...state, {...oder, quantity : 1}]
    }
    default:
      return state;
  }
};
