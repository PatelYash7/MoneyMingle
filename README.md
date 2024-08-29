


# MoneyMingle

**MoneyMingle** is a modern financial application designed to simplify wallet-to-wallet money transfers. With a focus on ease of use and security, MoneyMingle allows users to manage their finances efficiently. The project is built using Next.js, PostgreSQL, Prisma, Turborepo, Tailwind CSS, and NextAuth. It is structured into three main apps: the **User App** for wallet transfers, the **Bank Server** for adding funds to wallets, and a pending **Merchant App** that will handle automatic transfers to merchant bank accounts.

## Features

- **User App**: 
  - Transfer money easily between wallets.
  - Authentication and user management using NextAuth.
  
- **Bank Server**:
  - Adds money to the user's wallet from their bank account.

- **Merchant App** (Pending):
  - Automatically transfers wallet money into the merchant's bank account.

## Tech Stack

- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma
- **Database**: PostgreSQL
- **Authentication**: NextAuth
- **Monorepo Management**: Turborepo

## Project Structure

The project is organized into a Turborepo with the following apps:

1. **User App**: 
   - Handles wallet-to-wallet transfers and user operations.
   - Integrated with NextAuth for authentication.
   - Uses Tailwind CSS for styling.

2. **Bank Server**:
   - Manages bank-related operations.
   - Adds money to user wallets from the bank.

3. **Merchant App** (Pending):
   - Will handle automatic transfers from the merchant's wallet to their bank account.

