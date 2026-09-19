export const loanData = {
  Personal: {
    maxAmount: 1000000,
    minAmount: 50000,
    minTenure: 12,
    maxTenure: 60,
    purposes: [
      "Medical",
      "Education",
      "Marriage",
      "Travel",
      "Personal Expense",
    ],
  },

  Home: {
    maxAmount: 10000000,
    minAmount: 500000,
    minTenure: 60,
    maxTenure: 360,
    purposes: [
      "Home Purchase",
      "Home Construction",
      "Home Renovation",
      "Plot Purchase",
    ],
  },

  Business: {
    maxAmount: 5000000,
    minAmount: 100000,
    minTenure: 12,
    maxTenure: 120,
    purposes: [
      "Working Capital",
      "Business Expansion",
      "Equipment Purchase",
      "Inventory",
    ],
  },
};