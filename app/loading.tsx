"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="flex h-full items-center justify-center p-3 pl-4  ">
      <BounceLoader color="#22c55e" size={40} />
    </Box>
  );
};

export default Loading;
