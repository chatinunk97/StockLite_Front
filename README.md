
# Stock Lite - WMS and POS System

**Stock Lite** is a web-based solution that combines Warehouse Management System (WMS) and Point of Sale (POS) functionalities to streamline inventory management and transaction processes for small and medium-sized enterprises (SMEs). It provides essential features without the complexity and high costs of traditional systems, ensuring efficient stock management and real-time order tracking.

## Key Features

### User Management
- **Roles**: Super Admin, Employee, and Supervisor.
  - **Employee**: Access POS to assist customers and handle transactions.
  - **Supervisor**: Access WMS and POS to manage stock, receiving orders, and shelf placements.
- **Login**: Username/password authentication

### Warehouse Management System (WMS)
- **Inbound Workflow**: 
  - Create stock orders from suppliers and add product details.
  - Batch import stock via Excel (optional).
- **Inventory Management**:
  - Search and filter stock records by product, order ID, supplier, etc.
  - Assign stock to shelves, allowing real-time synchronization with POS.

### Point of Sale (POS)
- **Outbound Workflow**:
  - Scan product barcodes to add items to the cart.
  - Calculate total price and process payment.
  - Update shelf records in real-time after sale.
  - Optional Online/Offline order toggle.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chatinunk97/StockLite_Front.git
   ```

2. Navigate to the project directory and install dependencies:
   ```bash
   cd stock-lite
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Install backend server: \
    Stock Lite API Repository [here](https://github.com/chatinunk97/StockLite_API)
## System Requirements
- Node.js v12 or higher
- Database (e.g., PostgreSQL) for data storage

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
