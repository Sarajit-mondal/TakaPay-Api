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
#### API-URL
```
https://taka-pay-api.vercel.app/api/v1/user/create
```
```json
{
  "name": "jit mandal", //required  all 
  "phone": "01700000000", //must bangldesh format +88 or 01
  "password": "12345",  // mush 5 digits
  "nidNumber": 1234567890 /// must 10 digits  not up 17
}
```

- `POST /api/v1/auth/login` – Login user
#### API-URL
```
https://taka-pay-api.vercel.app/api/v1/auth/login
```

#### user login
```json
{
  "phone": "01700000000", //must bangldesh format +88 or 01
   "password": "12345",  // mush 5 digits
}
```
#### admin login
```json
{
  "phone": "01990925968", //must bangldesh format +88 or 01
   "password": "12345",  // mush 5 digits
}
```

### Wallet
- `GET /api/v1/wallet/:userId` – Get one user wallet
#### API-URL
### only can see admin
```
https://taka-pay-api.vercel.app/api/v1/wallet/:userId
```
- `GET /api/v1/wallet` – Get  all user wallet
#### API-URL
### only can see admin
```
https://taka-pay-api.vercel.app/api/v1/wallet
```


- `PATCH /api/v1/wallet/add-money` – Top-up wallet
#### API-URL
### Only can add user
```
https://taka-pay-api.vercel.app/api/v1/wallet/add-money
```
```json
{
   "toUserId": "_id here", // reciver userId like won Id
   "amount": 100, //must 50 or up
   "method": "BANK" // "BANK" | "CARD"
}
```

- `PATCH /api/v1/wallet/withdraw` – Withdraw money from wallet

#### API-URL
### Only user can withdraw. only with agent
```
https://taka-pay-api.vercel.app/api/v1/wallet/withdraw
```
```json
```json
{
   "fromUserId": "_id here agent", // sender userId like won Id
   "toUserId": "_id here user", // reciver userId like agent Id
   "amount": 100, //must 50 or up
}
```

- `PATCH /api/v1/wallet/send-money` – Send money to another user

#### API-URL
### agent can send money only with user. But user can send money only with user
```
https://taka-pay-api.vercel.app/api/v1/wallet/send-money
```

```json
{
   "fromUserId": "_id here agent", // sender userId like won Id
   "toUserId": "_id here user", // reciver userId like agent Id
   "amount": 100, //must 50 or up
}
```
### Admin
- `GET /api/v1/wallet/transactions` – Get all transaction history 
#### API-URL
### only can admin
```
https://taka-pay-api.vercel.app/api/v1/transactions
```

- `PATCH /api/v1/admin/user-block/:id`
#### API-URL
### only can admin update 
```
https://taka-pay-api.vercel.app/api/v1/admin/user-block/:id
```

```json
{
  "isActive": "BLOCKED"      //"BLOCKED" or "UNBLOCKED"
}

```


- `PATCH /api/v1/admin/agent-suspend/:id`
#### API-URL
### only can admin update 
```
https://taka-pay-api.vercel.app/api/v1/admin/agent-suspend/:id
```

```json
{
  "status": "SUSPEND"        //"APPROVE" or "SUSPEND"
}

```

## 📫 Testing

Use [Postman](https://www.postman.com/) to test these endpoints. Import the collection and test with valid JSON requests.

---

© 2025 Digital Wallet API. All rights reserved.