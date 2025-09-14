# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hack Chain is a blockchain-based cybersecurity certification platform that issues, validates, and traces NFT-based certifications for ethical hacking and cybersecurity education. The project ensures transparent, immutable, and verifiable credentials through blockchain technology.

## Architecture

This is a monorepo structured as follows:

- **`/frontend`** - React + Vite application with TypeScript, Tailwind CSS, shadcn/ui components, and Web3 integration
- **`/backend`** - Node.js Express API server with Sequelize ORM, handles wallet verification and blockchain interactions
- **`/contracts`** - Solidity smart contracts managed with Foundry framework
- **`/shared`** - Shared utilities and constants
- **`/docs`** - Project documentation and technical specs

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, React Query, ethers.js
- **Backend**: Node.js, Express 5, Sequelize ORM, PostgreSQL/SQLite, bcrypt, dotenv
- **Smart Contracts**: Solidity 0.8.24, OpenZeppelin contracts, Foundry
- **Development**: ESLint, npm workspaces

## Common Development Commands

### Monorepo Commands (from root)
```bash
# Install all dependencies
npm install

# Bootstrap workspaces
npm run bootstrap

# Development servers
npm run dev:frontend    # Start frontend dev server
npm run dev:backend     # Start backend dev server
npm run dev:contracts   # Build contracts

# Production builds  
npm run build:frontend
npm run build:backend
npm run build:contracts

# Testing and quality
npm run lint           # Lint all workspaces
npm run format         # Format all workspaces
npm run coverage:contracts  # Smart contract test coverage
```

### Frontend Commands (in /frontend)
```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run build:dev # Development build
npm run lint      # ESLint
npm run preview   # Preview build
```

### Contracts Commands (in /contracts)
```bash
forge build      # Compile contracts
forge test        # Run tests
forge coverage    # Test coverage
forge script      # Deploy scripts
```

### Backend Commands (in /backend)
```bash
# Backend currently has minimal npm scripts
# Main entry point: node index.js
```

## Development Workflow

1. **Branch Strategy**: Always branch from `develop`, merge PRs into `develop`
2. **Prerequisites**: Node.js ≥18.0.0, npm ≥8.0.0
3. **Setup**: Clone repo → `npm install` → setup each workspace individually

## Key Smart Contract

The main contract is `HackTokenERC20.sol` - an ERC20 token with pausable transfers, minting, burning, and ownership management using OpenZeppelin libraries.

## Database Models

Backend includes Sequelize models for:
- Students
- Certificates  
- Issuers
- Recruiters

## API Structure

Backend exposes REST APIs under `/api/` for each entity:
- `/api/certificates`
- `/api/student` 
- `/api/issuer`
- `/api/recruiter`

## Testing Strategy

- Smart contracts use Foundry's testing framework
- Frontend and backend testing infrastructure exists but test scripts are minimal
- Smart contract tests are comprehensive with unit tests for admin, mint, and burn functionality