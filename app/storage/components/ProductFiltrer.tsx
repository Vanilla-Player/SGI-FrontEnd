"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const filtrerOptions = [
  { name: "None" },
  { name: "Localizacion" },
  { name: "ID" },
  { name: "Producto" },
];

export default function ProdcutFiltrer() {
  const [selected, setSelected] = useState(filtrerOptions[0]);
  return (
    <div>
      <form className="flex w-full items-center justify-around">
        <label className="text-center">
          Filtrar por
          <div className="w-full">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">{selected.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {filtrerOptions.map((option, optionIdx) => (
                      <Listbox.Option
                        key={optionIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-[#7851BD] text-white" : "text-gray-900"
                          }`
                        }
                        value={option}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {option.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </label>
        <label className="w-1/4">
          {/* Este filtro deberia ser por alguna expresion ingresada*/}
          <input
            className="w-full rounded-[30px] border-[2px] border-[#EDEDED] bg-white px-5 py-3 focus-within:border-[#7851BD]"
            placeholder="Buscar"
          ></input>
        </label>
      </form>
    </div>
  );
}
