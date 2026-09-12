# API Documentation - Festival Video Hub

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require a Bearer token in the Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### Register User
```http
POST /auth/register
Content-Type: application/json

{
  "email": "student@example.com",
  "password": "secure_password",
  "firstName": "John",
  "lastName": "Doe",
  "userType": "student",
  "ageGroup": "13-18",
  "parentalConsentEmail": "parent@example.com" // for users under 18
}

Response (201):
{
  "id": 1,
  "email": "student@example.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "student@example.com",
  "password": "secure_password"
}

Response (200):
{
  "id": 1,
  "email": "student@example.com",
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

#### Logout
```http
POST /auth/logout
Authorization: Bearer <token>

Response (200):
{
  "message": "Logged out successfully"
}
```

### Videos

#### Get All Videos
```http
GET /videos?page=1&limit=20&school_id=1&sort=newest

Response (200):
{
  "data": [
    {
      "id": 1,
      "title": "School Dance Performance",
      "description": "Amazing dance performance",
      "videoUrl": "https://...",
      "thumbnailUrl": "https://...",
      "views": 1234,
      "likes": 456,
      "rating": 4.5,
      "uploadedBy": { "id": 5, "name": "John Doe" },
      "school": { "id": 1, "name": "Delhi Public School" },
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

#### Upload Video
```http
POST /videos
Authorization: Bearer <token>
Content-Type: multipart/form-data

FormData:
- title: "School Performance"
- description: "Our school's performance"
- performanceType: "dance"
- eventId: 1
- tags: "dance,performance,festival"
- video: <file>
- thumbnail: <file>
- requiresParentalConsent: false

Response (201):
{
  "id": 1,
  "title": "School Performance",
  "videoUrl": "https://...",
  "uploadedBy": 5,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

#### Get Video Details
```http
GET /videos/:id

Response (200):
{
  "id": 1,
  "title": "School Dance Performance",
  "description": "Amazing dance performance",
  "videoUrl": "https://...",
  "duration": 300,
  "views": 1234,
  "likes": 456,
  "rating": 4.5,
  "uploadedBy": { "id": 5, "name": "John Doe", "avatar": "..." },
  "school": { "id": 1, "name": "Delhi Public School" },
  "event": { "id": 1, "title": "Annual Festival" },
  "comments": [
    {
      "id": 1,
      "user": { "id": 10, "name": "Jane Smith" },
      "text": "Amazing performance!",
      "likes": 23,
      "createdAt": "2024-01-15T11:00:00Z"
    }
  ]
}
```

#### Update Video
```http
PUT /videos/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Updated Title",
  "description": "Updated description",
  "performanceType": "music",
  "tags": "music,performance"
}

Response (200):
{
  "id": 1,
  "title": "Updated Title",
  "description": "Updated description"
}
```

#### Delete Video
```http
DELETE /videos/:id
Authorization: Bearer <token>

Response (200):
{
  "message": "Video deleted successfully"
}
```

### Comments

#### Get Video Comments
```http
GET /comments/video/:videoId?page=1&limit=20

Response (200):
{
  "data": [
    {
      "id": 1,
      "user": { "id": 10, "name": "Jane Smith", "avatar": "..." },
      "text": "Amazing performance!",
      "likes": 23,
      "isApproved": true,
      "createdAt": "2024-01-15T11:00:00Z"
    }
  ]
}
```

#### Add Comment
```http
POST /comments
Authorization: Bearer <token>
Content-Type: application/json

{
  "videoId": 1,
  "text": "Amazing performance!"
}

Response (201):
{
  "id": 1,
  "videoId": 1,
  "userId": 10,
  "text": "Amazing performance!",
  "createdAt": "2024-01-15T11:00:00Z"
}
```

#### Delete Comment
```http
DELETE /comments/:id
Authorization: Bearer <token>

Response (200):
{
  "message": "Comment deleted successfully"
}
```

### Schools

#### Get All Schools
```http
GET /schools?page=1&limit=20&search=Delhi&sort=popular

Response (200):
{
  "data": [
    {
      "id": 1,
      "name": "Delhi Public School",
      "location": "New Delhi",
      "state": "Delhi",
      "city": "New Delhi",
      "logo": "https://...",
      "videosCount": 45,
      "followersCount": 1200,
      "verified": true,
      "createdAt": "2023-01-01T00:00:00Z"
    }
  ]
}
```

#### Get School Profile
```http
GET /schools/:id

Response (200):
{
  "id": 1,
  "name": "Delhi Public School",
  "description": "Leading school in Delhi",
  "location": "Pushp Vihar, Delhi",
  "email": "info@dps.edu.in",
  "phone": "+91-11-XXXX-XXXX",
  "logo": "https://...",
  "videosCount": 45,
  "followersCount": 1200,
  "verified": true,
  "videos": [...]
}
```

#### Get School Videos
```http
GET /schools/:id/videos?page=1&limit=20

Response (200):
{
  "data": [...],
  "pagination": {...}
}
```

### Events

#### Get All Events
```http
GET /events?page=1&limit=20&upcoming=true&school_id=1

Response (200):
{
  "data": [
    {
      "id": 1,
      "title": "Annual Festival 2024",
      "description": "Our annual school festival",
      "eventDate": "2024-03-15",
      "startTime": "09:00:00",
      "endTime": "17:00:00",
      "location": "School Auditorium",
      "school": { "id": 1, "name": "Delhi Public School" },
      "isLive": false,
      "participantsCount": 500,
      "viewsCount": 2500,
      "createdAt": "2024-01-01T10:00:00Z"
    }
  ]
}
```

#### Create Event
```http
POST /events
Authorization: Bearer <token>
Content-Type: application/json

{
  "title": "Annual Festival 2024",
  "description": "Our annual school festival",
  "eventDate": "2024-03-15",
  "startTime": "09:00:00",
  "endTime": "17:00:00",
  "location": "School Auditorium",
  "eventType": "festival"
}

Response (201):
{
  "id": 1,
  "title": "Annual Festival 2024",
  "createdAt": "2024-01-01T10:00:00Z"
}
```

## WebSocket Events (Socket.io)

### Join Video Room
```javascript
socket.emit('join-video', videoId);
```

### Send Comment (Real-time)
```javascript
socket.emit('send-comment', {
  videoId: 1,
  userId: 5,
  userName: 'John Doe',
  comment: 'Amazing performance!'
});

// Listen for new comments
socket.on('new-comment', (comment) => {
  console.log(comment);
});
```

### Send Reaction (Emoji)
```javascript
socket.emit('react', {
  videoId: 1,
  userId: 5,
  reaction: '👍' // or '❤️', '😂', '🔥', etc.
});

// Listen for reactions
socket.on('new-reaction', (reaction) => {
  console.log(reaction);
});
```

### Join Live Stream
```javascript
socket.emit('join-live-stream', streamId);

// Listen for stream updates
socket.on('stream-updated', (data) => {
  console.log(data);
});
```

## Error Responses

```json
{
  "error": "Error message",
  "code": "ERROR_CODE",
  "details": "Additional error details"
}
```

Common HTTP Status Codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

API endpoints are rate-limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

Headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 87
X-RateLimit-Reset: 1234567890
```
