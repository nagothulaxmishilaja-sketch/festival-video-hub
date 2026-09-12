# Festival Video Hub - Contributing Guide

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git

### Setup Development Environment

1. **Clone the repository**
```bash
git clone https://github.com/nagothulaxmishilaja-sketch/festival-video-hub.git
cd festival-video-hub
```

2. **Install dependencies**
```bash
# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

3. **Setup environment variables**
```bash
# Backend
cp backend/.env.example backend/.env.local

# Frontend
cp frontend/.env.example frontend/.env.local
```

4. **Setup database**
```bash
cd backend
npm run migrate
npm run seed  # Optional: Add sample data
cd ..
```

5. **Start development servers**
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Using Docker

### Build and Run with Docker Compose
```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379
- Backend API on port 5000
- Frontend on port 3000

### View Logs
```bash
docker-compose logs -f
```

### Stop Services
```bash
docker-compose down
```

## Code Style

### JavaScript/Node.js
- Use ES6+ syntax
- Use `const` and `let`, avoid `var`
- Use async/await over callbacks
- Follow ESLint configuration

```bash
npm run lint
```

### Naming Conventions
- **Variables/Functions**: camelCase
- **Classes/Components**: PascalCase
- **Constants**: UPPER_SNAKE_CASE
- **Database Tables**: snake_case
- **Database Columns**: snake_case

## Git Workflow

### Branch Naming
```
feature/description    - New features
bugfix/description     - Bug fixes
docs/description       - Documentation
refactor/description   - Refactoring
test/description       - Test improvements
```

### Commit Messages
```
type(scope): subject

Body (optional)

Footer (optional)
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style
- `refactor`: Refactoring
- `test`: Test additions
- `chore`: Maintenance

Examples:
```
feat(videos): add video upload functionality
fix(auth): resolve login validation issue
docs(api): update API documentation
```

## Pull Request Process

1. **Create a branch** from `main`
```bash
git checkout -b feature/your-feature-name
```

2. **Make your changes** and commit
```bash
git add .
git commit -m "feat(feature): description"
```

3. **Push to your fork**
```bash
git push origin feature/your-feature-name
```

4. **Open a Pull Request**
   - Provide clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure tests pass

5. **Review Process**
   - Address review comments
   - Keep commits clean
   - Ensure CI passes

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Run Tests with Coverage
```bash
npm test -- --coverage
```

## Project Structure

```
festival-video-hub/
├── backend/
│   ├── src/
│   │   ├── index.js           # Main entry point
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Business logic
│   │   ├── models/            # Database models
│   │   ├── middleware/        # Express middleware
│   │   ├── utils/             # Utility functions
│   │   ├── socket/            # WebSocket handlers
│   │   └── database/          # Database setup
│   ├── tests/                 # Test files
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/             # Next.js pages
│   │   ├── components/        # React components
│   │   ├── styles/            # CSS files
│   │   ├── lib/               # Utility functions
│   │   └── hooks/             # Custom hooks
│   ├── public/                # Static files
│   ├── Dockerfile
│   └── package.json
│
├── database/
│   ├── schema.sql             # Database schema
│   └── seed.sql               # Sample data
│
├── docs/
│   ├── API.md                 # API documentation
│   ├── SETUP.md               # Setup guide
│   └── CONTRIBUTING.md        # Contributing guide
│
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Database Migrations

### Create a Migration
```bash
cd backend
npm run migrate
```

Update the migration file in `src/database/migrations.js`

### Rollback
```bash
npm run migrate:rollback
```

## Debugging

### Backend
```bash
cd backend
node --inspect src/index.js
```
Then open `chrome://inspect` in Chrome DevTools.

### Frontend
- Use React DevTools browser extension
- Check browser console for errors
- Use Next.js debug logs: `DEBUG=* npm run dev`

## Common Issues

### Database Connection Error
- Ensure PostgreSQL is running
- Check `.env.local` credentials
- Verify database exists

### Port Already in Use
```bash
# Find process using port
lsof -i :3000  # or :5000

# Kill process
kill -9 <PID>
```

### Node Modules Issues
```bash
rm -rf node_modules package-lock.json
npm install
```

## Support

- Create an issue for bugs
- Discuss features in discussions
- Check existing issues first
- Be respectful and constructive

## Code of Conduct

Be respectful, inclusive, and constructive. No harassment, discrimination, or toxicity.

---

Happy coding! 🚀
