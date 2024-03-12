// Mock data
export const TABLE_DATA = [
  {
    title: "Seguro",
    description: "Seguro de mercancía",
    account: "LTC Wallet",
    balance: "-$4.012",
    dateFrom: "Mon, 20 May - 01:10",
    dateTo: "Mon, 25 May - 01:10",
    image: "/assets/admin/analytics-dashboard/table-icon1.svg",
    color: "red",
  },
  {
    title: "Electricidad",
    description: "Pago electricidad",
    account: "Banco Macro",
    balance: "-$2.092",
    dateFrom: "Mon, 20 May - 01:10",
    dateTo: "Mon, 25 May - 01:10",
    image: "/assets/admin/analytics-dashboard/table-icon2.svg",
    color: "red",
  },
  {
    title: "Pedido numero #123",
    description: "Pago a transportista + Pedido",
    account: "Banco Macro",
    balance: "+$1.089 ",
    dateFrom: "Mon, 20 May - 01:10",
    dateTo: "Mon, 25 May - 01:10",
    image: "/assets/admin/analytics-dashboard/table-icon3.svg",
    color: "green",
  },
];

export const CARRIERS_TABLE_DATA = [
  {
    id: 1,
    carrier: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastDateFrom: "Mon, 20 May - 01:10",
    estimateTime: "1h 20m",
    status: "Completed with no issues",
    duration: "1h 05m",
    price: "$1,000",
    averageRating: "4.8",
    hasReview: true,
  },
  {
    id: 2,
    carrier: {
      name: "John Doe",
      imageUrl:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastDateFrom: "Tue, 21 May - 02:30",
    estimateTime: "2h 30m",
    status: "Delayed due to weather",
    duration: "3h 00m",
    price: "$1,500",
    averageRating: "4.5",
    hasReview: false,
  },
  {
    id: 3,
    carrier: {
      name: "Jane Smith",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastDateFrom: "Wed, 22 May - 04:50",
    estimateTime: "1h 50m",
    status: "Completed with minor issues",
    duration: "1h 45m",
    price: "$1,200",
    averageRating: "4.7",
    hasReview: true,
  },
  {
    id: 4,
    carrier: {
      name: "Robert Johnson",
      imageUrl:
        "https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    lastDateFrom: "Thu, 23 May - 06:10",
    estimateTime: "2h 10m",
    status: "On time",
    duration: "2h 10m",
    price: "$1,300",
    averageRating: "4.9",
    hasReview: false,
  },
];
