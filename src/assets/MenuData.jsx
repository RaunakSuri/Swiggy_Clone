const MenuData = {
  1: {
    name: "Dabba & Co.",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/uwny9zuejmpvoznipn3c",
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: 1,
            isVeg: true,
            name: "Paneer Butter Masala",
            price: 249,
            description: "Rich and creamy paneer curry with Indian spices.",
            image:
              "https://jalojog.com/wp-content/uploads/2024/03/Paneer_Butter_Masala.jpg",
          },
          {
            id: 2,
            isVeg: true,
            name: "Dal Makhani",
            price: 199,
            description:
              "Slow-cooked black lentils finished with butter and cream.",
            image:
              "https://jalojog.com/wp-content/uploads/2024/03/Paneer_Butter_Masala.jpg",
          },
          {
            id: 3,
            isVeg: true,
            name: "Paneer Biryani",
            price: 229,
            description: "Aromatic basmati rice cooked with paneer and spices.",
            image:
              "https://jalojog.com/wp-content/uploads/2024/03/Paneer_Butter_Masala.jpg",
          },
        ],
      },
      {
        title: "Thali",
        items: [
          {
            id: 4,
            isVeg: true,
            name: "Special Veg Thali",
            price: 299,
            description:
              "Complete Indian meal with dal, sabzi, roti, rice and dessert.",
            image:
              "https://i0.wp.com/www.ramasrey.com/wp-content/uploads/2021/06/Classic-Veg-Thali-1.jpg?fit=1500%2C967&ssl=1",
          },
          {
            id: 5,
            isVeg: true,
            name: "Paneer Thali",
            price: 329,
            description:
              "Delicious paneer-based thali with assorted Indian dishes.",
            image:
              "https://i0.wp.com/www.ramasrey.com/wp-content/uploads/2021/06/Classic-Veg-Thali-1.jpg?fit=1500%2C967&ssl=1",
          },
        ],
      },
    ],
  },

  2: {
    name: "Thalaiva Biryani",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/b2jeywla2n5b8h25ey1p",
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: 101,
            isVeg: false,
            name: "Chicken Biryani",
            price: 299,
            description:
              "Fragrant basmati rice layered with juicy chicken and spices.",
            image:
              "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
          },
          {
            id: 102,
            isVeg: false,
            name: "Mutton Biryani",
            price: 399,
            description: "Aromatic biryani prepared with tender mutton.",
            image:
              "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
          },
          {
            id: 103,
            isVeg: true,
            name: "Veg Biryani",
            price: 249,
            description:
              "Flavorful basmati rice cooked with vegetables and spices.",
            image:
              "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg",
          },
        ],
      },
      {
        title: "Chicken Specials",
        items: [
          {
            id: 104,
            isVeg: false,
            name: "Chicken Tikka",
            price: 279,
            description: "Grilled chicken pieces marinated in Indian spices.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDXZDXKyR7xN1Y25dpKNv4HZHskFjvI6oAFF4XABeUQ&s=10",
          },
          {
            id: 105,
            isVeg: false,
            name: "Chicken Kebab",
            price: 259,
            description: "Juicy and flavorful chicken kebabs.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCDXZDXKyR7xN1Y25dpKNv4HZHskFjvI6oAFF4XABeUQ&s=10",
          },
        ],
      },
    ],
  },

  3: {
    name: "Subway",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9178c225-800c-4c49-9ce9-f9bd0dbcec91_5624.jpg",
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: 201,
            isVeg: true,
            name: "Veggie Delite Sub",
            price: 169,
            description: "Fresh vegetables served in your choice of bread.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 202,
            isVeg: true,
            name: "Paneer Tikka Sub",
            price: 229,
            description: "Paneer tikka with fresh vegetables and sauces.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 203,
            isVeg: false,
            name: "Chicken Teriyaki Sub",
            price: 249,
            description:
              "Tender chicken with teriyaki sauce and fresh veggies.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
      {
        title: "Wraps",
        items: [
          {
            id: 204,
            isVeg: false,
            name: "Chicken Seekh Wrap",
            price: 249,
            description: "Chicken seekh with vegetables and signature sauces.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 205,
            isVeg: true,
            name: "Paneer Tikka Wrap",
            price: 219,
            description: "Spicy paneer tikka wrapped with fresh vegetables.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
      {
        title: "Sides",
        items: [
          {
            id: 206,
            isVeg: true,
            name: "Nachos",
            price: 99,
            description: "Crunchy nachos served with delicious dip.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 207,
            isVeg: true,
            name: "Cookies",
            price: 60,
            description: "Freshly baked Subway cookies.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
    ],
  },

  4: {
    name: "KFC",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/ac2c93dd-eae5-4a74-80c6-4f7a02b7bf1c_243625.JPG",
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: 301,
            isVeg: false,
            name: "Chicken Zinger Burger",
            price: 219,
            description: "Crispy chicken fillet with fresh lettuce and sauce.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 302,
            isVeg: false,
            name: "Chicken Bucket",
            price: 399,
            description: "Crispy fried chicken pieces perfect for sharing.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 303,
            isVeg: false,
            name: "Chicken Popcorn",
            price: 249,
            description: "Bite-sized crispy chicken pieces.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
      {
        title: "Burgers",
        items: [
          {
            id: 304,
            isVeg: false,
            name: "Classic Chicken Burger",
            price: 179,
            description:
              "Crispy chicken patty with fresh vegetables and sauce.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 305,
            isVeg: false,
            name: "Double Chicken Burger",
            price: 299,
            description: "Double chicken patty loaded with signature sauce.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
      {
        title: "Chicken Buckets",
        items: [
          {
            id: 306,
            isVeg: false,
            name: "6 Pc Chicken Bucket",
            price: 549,
            description: "Six pieces of delicious crispy fried chicken.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
          {
            id: 307,
            isVeg: false,
            name: "Family Chicken Bucket",
            price: 799,
            description:
              "A generous bucket of crispy chicken for the whole family.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkb8Es3srlpMf66W3LFkmYYrJgOob3U-tUtUbmyWdl9GvwLINmYXDXLkFs&s=10",
          },
        ],
      },
    ],
  },

  5: {
    name: "La Pino'z Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/2b2a5a64-d2a9-43bf-a047-278d72005564_21001.JPG",
    categories: [
      {
        title: "Recommended",
        items: [
          {
            id: 401,
            isVeg: true,
            name: "Farm Villa Pizza",
            price: 299,
            description: "Loaded with fresh vegetables and cheese.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
          {
            id: 402,
            isVeg: true,
            name: "Cheese Burst Pizza",
            price: 349,
            description: "Delicious pizza with a rich cheese-filled crust.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
          {
            id: 403,
            isVeg: true,
            name: "Paneer Tikka Pizza",
            price: 329,
            description: "Spicy paneer tikka topped with mozzarella cheese.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
        ],
      },
      {
        title: "Pizzas",
        items: [
          {
            id: 404,
            isVeg: true,
            name: "Margherita Pizza",
            price: 249,
            description:
              "Classic pizza topped with tomato sauce and mozzarella.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
          {
            id: 405,
            isVeg: true,
            name: "Mexican Green Wave",
            price: 329,
            description: "Spicy Mexican-style pizza with fresh vegetables.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
          {
            id: 406,
            isVeg: false,
            name: "Chicken Tikka Pizza",
            price: 379,
            description: "Chicken tikka topped with cheese and special sauces.",
            image:
              "https://www.shutterstock.com/image-photo/veg-extravaganza-loaded-flavorful-pizza-600w-2700208497.jpg",
          },
        ],
      },
      {
        title: "Sides",
        items: [
          {
            id: 407,
            isVeg: true,
            name: "Garlic Bread",
            price: 149,
            description: "Crispy garlic bread with herbs and butter.",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSkQkfHuack8HJ5FRp-RAupqERD2v9Km9ICeo7hIFwcmWF39ZzQM37fHX&s=10",
          },
          {
            id: 408,
            isVeg: true,
            name: "Cheesy Dip",
            price: 69,
            description: "Creamy cheesy dip.",
            image:
              "https://b.zmtcdn.com/data/dish_photos/48a/a325ca68cb886844e4864a43f7cdf48a.jpeg",
          },
        ],
      },
    ],
  },
};

export default MenuData