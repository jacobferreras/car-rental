# Car Rental Web Application

A modern car rental platform built with Next.js, TypeScript, and Prisma. This project allows users to browse, book, and manage car rentals with a clean and responsive UI.

## Features

- Browse available vehicles with detailed information
- Book cars with date selection and confirmation
- User authentication (Kinde Auth integration)
- Contact and About pages
- Responsive design for desktop and mobile
- Modular component structure
- Custom React hooks for state management
- Prisma ORM for database access

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (or your preferred database)
- [Tailwind CSS](https://tailwindcss.com/) (if used)
- [Kinde Auth](https://kinde.com/) (for authentication)

## Project Structure

```
.
├── app/                # Next.js app directory (pages, API routes)
├── components/         # Reusable React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries (constants, Prisma client)
├── prisma/             # Prisma schema and client
├── public/             # Static assets (images, icons)
├── services/           # Service functions (API calls, business logic)
├── Types/              # TypeScript types and interfaces
├── package.json
├── tsconfig.json
└── README.md
```

## Folder Highlights

- `app/api/` - API routes for authentication, booking, cars, and permissions
- `components/common/` - Shared UI components (Navbar, Footer, etc.)
- `components/ui/` - Page-specific UI components
- `hooks/` - Custom hooks for bookings, cars, debounce, etc.
- `services/` - Business logic and API service functions
- `Types/` - TypeScript type definitions

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License

[MIT](LICENSE)
