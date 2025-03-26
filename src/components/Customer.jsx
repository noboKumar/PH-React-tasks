import React, { use } from "react";

const Customer = ({ customerPromise }) => {
  const customers = use(customerPromise);
  return (
    <div>
      <h1>Customers: {customers.length}</h1>
      {customers.map((customer) => (
        <>
          <h2>customer name: {customer.name}</h2>
          <h3>customer email: {customer.email}</h3>
        </>
      ))}
    </div>
  );
};

export default Customer;
