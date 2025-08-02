# Wallet Management System API
# Name : TakaPay
A Node.js + Express + MongoDB backend system for a Mobile Financial Service (MFS) application. It supports user authentication, wallet management, money transactions (send, top-up, withdraw), and role-based access for Users, Agents, and Admins.


## 🚀 Features

- ✅ User registration and login
- ✅ Wallet creation (automatically upon user creation)
- ✅ Add money (top-up)
- ✅ Withdraw money
- ✅ Send money to another user
- ✅ View transaction history
- ✅ Admin: Approve/suspend agents

## ⚙️ Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/Sarajit-mondal/TakaPay-Api.git
cd TakaPay-Api
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
### flow .env.example file
Create a `.env` file in the root directory with the following:

```
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
DB_URL=your_mongodb_connection_string_here

# JWT Configuration
BCRYPT_SALT_ROUND=10
JWT_ACCESS_SECRET=your_access_token_secret_here
JWT_ACCESS_EXPIRES=1d
JWT_REFRESH_SECRET=your_refresh_token_secret_here
JWT_REFRESH_EXPIRES=30d
```

4. **Run the server**
```bash
npm run dev
```

## 📮 API Endpoints

### API BASE URL 
```
https://taka-pay-api.vercel.app
```

### Auth

- `POST /api/v1/user/create` – Register a new user
```json
{
  "name": "John Doe",
  "phone": "01700000000",
  "password": "123456",
  "nidNumber": 1234567890
}
```

- `POST /api/v1/auth/login` – Login user
```json
{
  "phone": "01700000000",
  "password": "123456"
}
```

### Wallet

- `GET /api/v1/wallet/:userId` – Get wallet by user ID
- `PATCH /api/v1/wallet/add-money` – Top-up wallet
```json
{
  "toUserId": "userId_here",
  "amount": 100
}
```

- `PATCH /api/v1/wallet/withdraw` – Withdraw money from wallet
```json
{
  "fromUserId": "userId_here",
  "amount": 50
}
```

- `PATCH /api/v1/wallet/send-money` – Send money to another user
```json
{
  "fromUserId": "sender_id",
  "toUserId": "receiver_id",
  "amount": 50
}
```

- `GET /api/v1/wallet/transactions/:userId` – Get transaction history

### Admin

- `PATCH /api/v1/admin/approve-agent/:id`
- `PATCH /api/v1/admin/suspend-agent/:id`

## 📫 Testing

Use [Postman](https://www.postman.com/) to test these endpoints. Import the collection and test with valid JSON requests.

---

© 2025 Digital Wallet API. All rights reserved.