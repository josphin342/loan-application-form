export const loanRules = {
  Personal: {
    label: "Personal Loan",

    amount: {
      min: 50000,
      max: 1000000,
    },

    tenure: {
      min: 12,
      max: 60,
    },

    purposes: [
      "Medical",
      "Education",
      "Marriage",
      "Travel",
      "Personal Expense",
    ],
  },

  Home: {
    label: "Home Loan",

    amount: {
      min: 500000,
      max: 10000000,
    },

    tenure: {
      min: 60,
      max: 360,
    },

    purposes: [
      "Home Purchase",
      "Home Construction",
      "Home Renovation",
      "Plot Purchase",
    ],
  },

  Business: {
    label: "Business Loan",

    amount: {
      min: 100000,
      max: 5000000,
    },

    tenure: {
      min: 12,
      max: 120,
    },

    purposes: [
      "Working Capital",
      "Business Expansion",
      "Equipment Purchase",
      "Inventory",
    ],
  },
};