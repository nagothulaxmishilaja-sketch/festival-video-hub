# Festival Video Hub - Setup Guide

## Quick Start

### Prerequisites
- Node.js 18.0 or higher
- PostgreSQL 14 or higher
- Docker & Docker Compose (optional)
- Git

### Option 1: Using Docker (Recommended)

1. **Clone the repository**
```bash
git clone https://github.com/nagothulaxmishilaja-sketch/festival-video-hub.git
cd festival-video-hub
```

2. **Create environment files**
```bash
cp backend/.env.example backend/.env.local
cp frontend/.env.example frontend/.env.local
```

3. **Update environment variables**

Edit `backend/.env.local`:
```
DB_PASSWORD=secure_password_here
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Start services**
```bash
docker-compose up -d
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Database: localhost:5432

### Option 2: Local Setup

1. **Clone the repository**
```bash
git clone https://github.com/nagothulaxmishilaja-sketch/festival-video-hub.git
cd festival-video-hub
```

2. **Setup PostgreSQL**

**On macOS (with Homebrew):**
```bash
brew install postgresql
brew services start postgresql
```

**On Ubuntu/Debian:**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**On Windows:**
- Download from https://www.postgresql.org/download/windows/
- Run the installer

3. **Create database**
```bash
psql -U postgres
CREATE DATABASE festival_hub;
\q
```

4. **Setup Redis** (optional, for caching)

**On macOS:**
```bash
brew install redis
brew services start redis
```

**On Ubuntu/Debian:**
```bash
sudo apt-get install redis-server
sudo systemctl start redis-server
```

5. **Setup Backend**
```bash
cd backend
cp .env.example .env.local

# Update .env.local with your settings
# Install dependencies
npm install

# Run migrations
npm run migrate

# Start server
npm run dev
```

6. **Setup Frontend** (in a new terminal)
```bash
cd frontend
cp .env.example .env.local

# Install dependencies
npm install

# Start development server
npm run dev
```

7. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Configuration

### Backend Environment Variables

```bash
# Server
NODE_ENV=development
PORT=5000

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=festival_user
DB_PASSWORD=festival_pass
DB_NAME=festival_hub

# Redis (for caching)
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-key-min-32-chars
JWT_EXPIRE=7d

# Cloudinary (video storage)
CLOUDINARY_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# App URL
APP_URL=http://localhost:3000
APP_NAME=Festival Video Hub
```

### Frontend Environment Variables

```bash
# API endpoint
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Video Storage Setup

### Using Cloudinary (Recommended)

1. **Sign up at https://cloudinary.com**

2. **Get your credentials** from the dashboard
   - Cloud Name
   - API Key
   - API Secret

3. **Update environment variables**
```bash
CLOUDINARY_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4. **Restart the backend**
```bash
npm run dev
```

## Database Setup

### Run Migrations
```bash
cd backend
npm run migrate
```

### Seed Sample Data (Optional)
```bash
npm run seed
```

This will create:
- Sample users
- Sample schools
- Sample events
- Sample videos

## Development

### File Structure
```
backend/src/
├── index.js              # Entry point
├── routes/               # API routes
│   ├── auth.routes.js
│   ├── videos.routes.js
│   ├── comments.routes.js
│   ├── events.routes.js
│   └── schools.routes.js
├── controllers/          # Business logic
├── models/               # Database models
├── middleware/           # Express middleware
├── socket/               # WebSocket handlers
└── database/             # Database setup

frontend/src/
├── pages/                # Next.js routes
├── components/           # React components
├── styles/               # CSS files
├── lib/                  # Utilities
└── hooks/                # Custom React hooks
```

### API Testing

Use Postman or curl to test endpoints:

```bash
# Register user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123",
    "firstName": "John",
    "lastName": "Doe"
  }'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@example.com",
    "password": "password123"
  }'
```

## Troubleshooting

### Port Already in Use
```bash
# Find and kill process
lsof -i :3000  # or :5000, :5432
kill -9 <PID>
```

### Database Connection Error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql  # Linux
brew services list              # macOS

# Check credentials in .env.local
# Test connection
psql -h localhost -U festival_user -d festival_hub
```

### Node Modules Issues
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

### Docker Issues
```bash
# Stop all containers
docker-compose down

# Rebuild images
docker-compose build --no-cache

# Start fresh
docker-compose up -d
```

## Production Deployment

### Using AWS

1. **Create RDS PostgreSQL database**
2. **Create ElastiCache Redis cluster**
3. **Deploy on EC2 or ECS**
4. **Setup CloudFront for video delivery**
5. **Configure Route 53 DNS**

### Using Heroku

```bash
# Install Heroku CLI
# Login
heroku login

# Create app
heroku create festival-video-hub

# Add PostgreSQL
heroku addons:create heroku-postgresql:standard-0

# Set environment variables
heroku config:set JWT_SECRET=your-secret

# Deploy
git push heroku main
```

## Performance Tips

1. **Enable Redis caching** for frequently accessed data
2. **Use CDN** for video delivery (Cloudinary handles this)
3. **Implement pagination** for large datasets
4. **Add database indexes** on frequently queried columns
5. **Use compression** for API responses

## Security Checklist

- [ ] Change default passwords
- [ ] Use strong JWT_SECRET (min 32 chars)
- [ ] Enable HTTPS in production
- [ ] Setup firewall rules
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting
- [ ] Add input validation
- [ ] Setup CORS properly
- [ ] Use CSRF tokens
- [ ] Sanitize user inputs

## Support

For issues or questions:
1. Check this guide
2. Check GitHub issues
3. Create a new issue with details
4. Join our community discussions

---

Happy coding! 🚀
