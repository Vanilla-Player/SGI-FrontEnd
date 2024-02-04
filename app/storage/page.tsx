import React from "react";
import StorageList from "./components/StorageList";

const Storage: React.FC = () => {
  return (
    <>
      <div
        className={`flex w-full flex-col items-center justify-center gap-x-12 sm:max-w-[calc(100%)] sm:flex-row`}
      >
        <StorageList />
      </div>
    </>
  );
};

export default Storage;
