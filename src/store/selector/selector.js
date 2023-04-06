import { createSelector } from '@reduxjs/toolkit';

export const select = {
  customers: state => state.customers.customers,
  filter: state => state.filter.filter,
  burgerMenuIsOpen: state => state.burger.menuOpen,
};

export const reselect = {
  filterCusomer: createSelector(
    [select.filter, select.customers], // Arguments
    (keyword, customers) => {
      if (keyword.length) {
        return customers.filter(
          ({ name, company, phone, email, country, status }) =>
            name.includes(keyword) ||
            status.includes(keyword) ||
            company.includes(keyword) ||
            phone.includes(keyword) ||
            email.includes(keyword) ||
            country.includes(keyword)
        );
      }
      return customers;
    }
  ),
};
