# Dashboard App

This is a simple React application featuring a Dashboard component composed of two cards: a Sales Card and an Orders Card. The app demonstrates how to use the Context API to share data between components.

# Features

- Dashboard Component: Displays the total revenue by aggregating sales and orders data.
- Sales Card Component: Shows the total sales.
- Orders Card Component: Shows the total orders.
- Context API: Used to manage and share data between the Sales Card and Orders Card components, ensuring that both cards can access the necessary data to calculate and display the total revenue on the Dashboard.

# Installation

Clone the repository or simply copy and paste code into your editor directly.

# Project Structure

learn/
│
├── context-api/
|   |__ app.js
│   ├── dashboard.js
│   ├── sales-card.js
│   └── orders-card.js
│
└── ...


context-api/dashboard.js: Contains the Dashboard component that aggregates data from the Sales and Orders cards.

context-api/SalesCard.js: Displays the total sales.

context-api/OrdersCard.js: Displays the total orders.

# How It Works

The DashbordContext is created in the dashboard.js file and is provided to the Dashboard and its child components.
The SalesCard and OrdersCard components access the shared data using the useContext hook.
The Dashboard component calculates and displays the total revenue by summing the sales and orders totals.

$ Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue to suggest improvements.

[Preview](./basic-dashboard.png)
