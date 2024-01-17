import {
  CalendarIcon,
  ChartBarSquareIcon,
  ChartPieIcon,
  HomeIcon,
  ReceiptRefundIcon,
  ShoppingBagIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Transportistas", href: "#", icon: UsersIcon, current: false },
  { name: "Calendario", href: "#", icon: CalendarIcon, current: false },
  { name: "Graficas", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Reportes", href: "#", icon: ChartPieIcon, current: false },
  { name: "Productos", href: "#", icon: ShoppingBagIcon, current: false },
  { name: "Pedidos", href: "#", icon: ReceiptRefundIcon, current: false },
];
