"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { Input } from "@/components/Common/Input";
import Form from "@/components/Common/Form";
import { CARRIER_FIELDS } from "@/utils/constants/modals/carriers";
import { ICarrier } from "@/lib/interfaces";
import { useSupabaseClient } from "@/utils/supabase/client";

export default function CarrierCreateModalForm({
  toggleModal,
  open,
}: {
  toggleModal: () => void;
  open: boolean;
}) {
  const supabase = useSupabaseClient();
  const handleSubmit = async (data: ICarrier) => {
    const { error } = await supabase.from("carriers").insert(data);
    console.log(data);
    if (error) {
      console.log(error);
      return;
    }
    toggleModal();
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6">
                <div className="w-full">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <PlusCircleIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="max-w-2xl border-b border-gray-900/10 pb-6 pt-4 text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                      Informacion del transportista
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      Mantenga los datos del transportista actualizados.
                    </p>
                    <Form
                      className="mt-4 grid max-w-3xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
                      onSubmit={handleSubmit}
                      defaultValues={{}}
                    >
                      {CARRIER_FIELDS.map(
                        (el: {
                          name: string;
                          label: string;
                          className?: string | null;
                          validations?: any;
                        }) => (
                          <Input
                            name={el.name}
                            label={el.label}
                            className={el.className}
                            validations={el.validations}
                          />
                        )
                      )}
                      <div className="col-span-full mt-2 flex items-center justify-end gap-x-6">
                        <button
                          type="button"
                          className="text-sm font-semibold leading-6 text-gray-900"
                          onClick={() => toggleModal()}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                          Save
                        </button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
