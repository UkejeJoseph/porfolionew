# Overview

This is a personal portfolio website built as a full-stack web application showcasing a developer's professional experience, skills, projects, and blog posts. The application follows a modern React-based architecture with Express.js backend, designed to present a comprehensive professional profile with features like project galleries, skill showcases, experience timelines, and blog integration.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a modern component-based architecture:

- **Routing**: Uses `wouter` for lightweight client-side routing with pages for About, Resume, Projects, Blog, and Contact
- **State Management**: Utilizes `@tanstack/react-query` for server state management and caching
- **Styling**: Implements **Tailwind CSS** with shadcn/ui component library for consistent design system
- **Component Structure**: Organized into reusable components with clear separation between UI components, layout components, and page components
- **Responsive Design**: Mobile-first approach with dedicated mobile menu and responsive layouts
- **Build Tool**: **Vite** for fast development and optimized production builds

## Backend Architecture

The backend uses a minimal **Express.js** server with TypeScript:

- **Server Framework**: Express.js with middleware for JSON parsing, CORS, and request logging
- **Database Layer**: Configured for **PostgreSQL** using **Drizzle ORM** with Neon Database serverless driver
- **Storage Interface**: Abstracted storage layer with both memory storage (for development) and database implementations
- **API Structure**: RESTful API design with `/api` prefix for all backend routes
- **Development Setup**: Hot reloading with Vite integration for seamless development experience

## Data Storage Solutions

- **Primary Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Connection**: Neon Database serverless driver for cloud-based PostgreSQL
- **Development Storage**: In-memory storage implementation for local development
- **Data Models**: Currently includes User model with extensible schema design

## Authentication and Authorization

The application includes basic user management infrastructure:

- **User Schema**: Defined with username/password fields and UUID primary keys
- **Storage Interface**: CRUD operations for user management
- **Extensible Design**: Ready for implementing authentication middleware and session management

## External Dependencies

- **Database**: Neon Database (PostgreSQL) for production data storage
- **UI Components**: Radix UI primitives for accessible component foundation
- **Fonts**: Google Fonts integration (Inter, DM Sans, Fira Code, Geist Mono)
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit integration for cloud-based development environment
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Date Handling**: date-fns for date formatting and manipulation
- **Image Assets**: External GitHub repository for storing and serving images and assets