const flats = [
  {
    id: 1,
    userId: "A",
    flatname: "Noida 130",
    address: "Noida Sector 130",
    tenantName: "Sneha",
    tenantPhone: "6874983927",
    rent: 4000,
    startUnit: 32,
    pricePerUnit: 8,
    startDate: "01-02-2022",
    security: 8000,
  },
  {
    id: 2,
    userId: "B",
    flatname: "Noida 131",
    address: "Noida Sector 131",
    tenantName: "Sneha",
    tenantPhone: "6874983927",
    rent: 1000,
    startUnit: 56,
    pricePerUnit: 10,
    startDate: "01-02-2002",
    security: 8000,
  },
];

const payments = [
  {
    id: 100,
    flatId: 1,
    date: "01-02-2022",
    amount: 4500,
  },
  {
    id: 101,
    flatId: 1,
    date: "01-02-2022",
    amount: 3000,
  },
  {
    id: 102,
    flatId: 1,
    date: "01-02-2022",
    amount: 4000,
  },
  {
    id: 103,
    flatId: 1,
    date: "01-02-2022",
    amount: 4000,
  },
  {
    id: 104,
    flatId: 1,
    date: "01-02-2022",
    amount: 4000,
  },
  {
    id: 105,
    flatId: 1,
    date: "01-02-2022",
    amount: 4000,
  },
  {
    id: 106,
    flatId: 2,
    date: "01-02-2022",
    amount: 5000,
  },
  {
    id: 107,
    flatId: 2,
    date: "01-02-2022",
    amount: 6000,
  },
  {
    id: 108,
    flatId: 2,
    date: "01-02-2022",
    amount: 4550,
  },
];

const rents = [
  {
    id: 200,
    flatId: 1,
    rent: 4000,
    startUnit: 32,
    endUnit: 59,
    date: "01-03-2022",
  },
  {
    id: 201,
    flatId: 2,
    rent: 4000,
    startUnit: 59,
    endUnit: 87,
    date: "01-04-2022",
  },
  {
    id: 202,
    flatId: 3,
    rent: 4000,
    startUnit: 87,
    endUnit: 106,
    date: "01-05-2022",
  },
  {
    id: 203,
    flatId: 4,
    rent: 4000,
    startUnit: 106,
    endUnit: 140,
    date: "01-06-2022",
  },
  {
    id: 204,
    flatId: 5,
    rent: 4000,
    startUnit: 140,
    endUnit: 167,
    date: "01-07-2022",
  },
  {
    id: 205,
    flatId: 6,
    rent: 4000,
    startUnit: 167,
    endUnit: 180,
    date: "01-08-2022",
  },
  {
    id: 206,
    flatId: 7,
    rent: 4000,
    startUnit: 180,
    endUnit: 199,
    date: "01-09-2022",
  },
];

export function getFlats() {
  return flats;
}

export function getPayments() {
  return payments;
}

export function getRents() {
  return payments;
}
