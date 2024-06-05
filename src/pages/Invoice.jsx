import React from "react";
import { useAuth } from "../context/AuthProvider";

const Invoice = () => {
  const { user } = useAuth();

  return (
   <>
   <h1>Invoice</h1>
   </>
  );
};

export default Invoice;
