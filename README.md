# Property Rental Platform

A full-stack property rental web application built with Next.js 14.  
Users can browse, search, and manage property listings, interact with maps, and communicate with each other.

---

##  Features

-  Authentication with Google (NextAuth)
-  Authorization & protected routes
-  Property listings (CRUD functionality)
-  Multiple image upload (Cloudinary integration)
-  Property search & filtering
-  Interactive maps (Mapbox)
-  Internal messaging with unread notifications
-  Bookmark / save properties
-  Fully responsive design
-  Server Actions & API routes
-  Loading states & toast notifications
-  Custom 404 page

---

##  Tech Stack

**Frontend:**
- Next.js 14
- React
- Tailwind CSS

**Backend:**
- Node.js (via Next.js API routes / Server Actions)
- MongoDB
- Mongoose

**Authentication:**
- NextAuth (Google Provider)

**Integrations & Libraries:**
- Cloudinary (image storage)
- Mapbox (maps)
- React Toastify
- React Spinners
- Photoswipe
- React Share

---

##  Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/property-rental-app.git
cd property-rental-app

### 2. Install dependencies
```bash
npm install

### 3. Create a .env.local file and add:
```bash
MONGODB_URI = your_mongodb_connection
NEXT_PUBLIC_DOMAIN  = http://localhost:3000
NEXT_PUBLIC_API_DOMAIN  =http://localhost:3000/api
GOOGLE_CLIENT_ID = your_google_client_id
GOOGLE_CLIENT_SECRET = your_google_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET= your_secret
CLOUDINARY_CLOUD_NAME= your_cloud_name
CLOUDINARY_API_KEY= your_api_key
CLOUDINARY_API_SECRET= your_api_secret
NEXT_PUBLIC_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png

### 4. Run the development server
```bash
npm run dev

App will be available at:
```bash
http://localhost:3000
