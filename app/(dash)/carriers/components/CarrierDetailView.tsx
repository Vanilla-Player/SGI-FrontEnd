"use client";
// TODO: get dynamic data from the ID
import {
  CalendarDaysIcon,
  InformationCircleIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import CarrierReviewForm from "./CarrierReviewForm";

export default function CarrierDetailView({
  carrierId,
}: {
  carrierId?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleDetailViewClose = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("id");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative max-w-lg lg:col-start-3 lg:row-end-1">
      <h2 className="sr-only">{carrierId}</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <button
          onClick={() => handleDetailViewClose()}
          className="absolute right-6 top-4"
        >
          <XMarkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="inline-flex w-full justify-between text-xs font-semibold leading-6 text-gray-600">
              ID del transportista: {carrierId}
            </dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">
              Jonh Doe
            </dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Status</dt>
            <dd className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">
              Bueno
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <InformationCircleIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm font-medium leading-6 text-gray-900">
              jonhDoe@gmail.com
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">
              <time dateTime="2023-01-31">Enero 31, 2023</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <MapPinIcon
                className="h-6 w-5 text-gray-400"
                aria-hidden="true"
              />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">
              Rosario, Santa Fe, Argentina.
            </dd>
          </div>
        </dl>
        {/* TODO: Show only if there is not a rewiew linked to the invoice */}
        <CarrierReviewForm />
      </div>
    </div>
  );
}
