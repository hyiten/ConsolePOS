exports.menuitems = [
  {
    id: 1,
    name: "noodles",
    items: [
      {
        id: 11,
        name: "noodle #1",
        price: 1.99,
        options: [
          { id: 1111, name: "spicy", addprice:0.1 },
          { id: 1112, name: "non-spicy", addprice:0 },
        ],
      },
      {
        id: 12,
        name: "noodle #2",
        price: 2.99,
        options: [
          { id: 1211, name: "spicy", addprice:0.1 },
          { id: 1212, name: "non-spicy",addprice:0 },
        ],
        options2: [
          { id: 1221, name: "dry", addprice:0 },
          { id: 1222, name: "soup", addprice:0.1 },
        ],
      },
      {
        id: 13,
        name: "noodle #3",
        price: 3.99,
        options: [
          { id: 1311, name: "spicy",addprice:0.1 },
          { id: 1312, name: "non-spicy",addprice:0 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "rice",
    items: [
      {
        id: 21,
        name: "rice #1",
        price: 1.99,
        options: [
          { id: 2111, name: "spicy",addprice:0.1 },
          { id: 2112, name: "non-spicy",addprice:0 },
        ],
        options2: [
          { id: 2121, name: "add egg",addprice:0.5 },
          { id: 2122, name: "extra rice",addprice:1 },
        ],
      },
      {
        id: 22,
        name: "rice #2",
        price: 2.99,
        options: [
          { id: 2211, name: "spicy",addprice:0.1 },
          { id: 2212, name: "non-spicy",addprice:0 },
        ],
        options2: [
          { id: 2221, name: "add egg",addprice:0.5 },
          { id: 2222, name: "extra rice",addprice:1 },
        ],
      },
      {
        id: 23,
        name: "rice #3",
        price: 3.99,
        options: [
          { id: 2311, name: "spicy",addprice:0.1 },
          { id: 2312, name: "non-spicy",addprice:0 },
        ],
        options2: [
          { id: 2321, name: "add egg",addprice:0.5 },
          { id: 2322, name: "extra rice",addprice:1 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "drinks",
    items: [
      {
        id: 31,
        name: "drinks #1",
        price: 1.99,
        options: [
          { id: 3111, name: "ice",addprice:1 },
          { id: 3112, name: "no-ice",addprice:0 },
        ],
      },
      {
        id: 12,
        name: "drinks #2",
        price: 2.99,
        options: [
          { id: 3211, name: "ice",addprice:1 },
          { id: 3212, name: "no-ice",addprice:0 },
        ],
        options2: [
          { id: 3221, name: "normal sugar",addprice:0 },
          { id: 3222, name: "less sugar",addprice:0 },
          { id: 3223, name: "more sugar",addprice:0 },
        ],

      },
      {
        id: 13,
        name: "drinks #3",
        price: 3.99,
        options: [
          { id: 3311, name: "ice",addprice:1 },
          { id: 3312, name: "no-ice",addprice:0 },
        ],
      },
    ],
  },
];
