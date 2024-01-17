import StatsCard from "./components/StatsCard";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import ActivityList from "./components/ActivityList";

import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import RecentProductsList from "./components/RecentProductsList";

// TODO: use an action to get the data from the server
const activityList = [
  {
    date: "Hoy",
    dateTime: "2023-03-22",
    transactions: [
      {
        id: 1,
        invoiceNumber: "00012",
        href: "#",
        amount: "$7,600.00 USD",
        tax: "$500.00",
        status: "Pago",
        client: "Reform",
        description: "Website redesign",
        icon: ArrowUpCircleIcon,
      },
      {
        id: 2,
        invoiceNumber: "00011",
        href: "#",
        amount: "$10,000.00 USD",
        status: "Para retirar",
        client: "Tom Cook",
        description: "Salary",
        icon: ArrowDownCircleIcon,
      },
      {
        id: 3,
        invoiceNumber: "00009",
        href: "#",
        amount: "$2,000.00 USD",
        tax: "$130.00",
        status: "Vencido",
        client: "Tuple",
        description: "Logo design",
        icon: ArrowPathIcon,
      },
    ],
  },
  {
    date: "Ayer",
    dateTime: "2023-03-21",
    transactions: [
      {
        id: 4,
        invoiceNumber: "00010",
        href: "#",
        amount: "$14,000.00 USD",
        tax: "$900.00",
        status: "Pago",
        client: "SavvyCal",
        description: "Pedido cajas de aceite",
        icon: ArrowUpCircleIcon,
      },
    ],
  },
];
const recentProductsList = [
  {
    id: 1,
    name: "Tuple",
    imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "SavvyCal",
    imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
  {
    id: 3,
    name: "Reform",
    imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
    lastInvoice: {
      date: "January 23, 2023",
      dateTime: "2023-01-23",
      amount: "$7,600.00",
      status: "Paid",
    },
  },
];

export default function Dashboard() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="lg:pl-72">
          <NavBar />
          <main className="py-10">
            <div className="mx-auto flex max-w-full flex-col gap-y-12 px-4 sm:px-6 lg:px-8">
              <StatsCard />
              <ActivityList activityList={activityList} />
              <RecentProductsList recentProductsList={recentProductsList} />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
