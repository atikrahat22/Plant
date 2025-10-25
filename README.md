# 🎮 GameHub - A Game Library

**Assignment Category: assignment_9_category_Lotus**

**An engaging online library for discovering and supporting game developers. Users can browse indie games, see detailed information, and install if they like them.**

🚀 **Live URL:** [GameHub Demo](https://your-deployment-url.netlify.app) *(Replace with your actual deployment URL)*

## ✨ Assignment Requirements Status

### ✅ **All Requirements Implemented:**

#### 🏠 **Homepage Features**
- ✅ **Interactive Banner**: Slider with 3+ slides showcasing featured games with auto-play and navigation
- ✅ **Popular Games Section**: Top 6 games sorted by rating in beautiful card layout
- ✅ **Newsletter Section**: Subscription form with email validation and success feedback
- ✅ **Responsive Design**: Works perfectly on mobile, tablet, and desktop

#### 🎯 **Game Details Page (Protected)**
- ✅ **Complete Game Information**: All details from JSON including descriptions, ratings, developers
- ✅ **Download Links**: Direct links to official game stores
- ✅ **Authentication Required**: Protected route with login redirect
- ✅ **Modern UI**: Gradient cards with hover effects and animations

#### 📚 **All Reviews & Categories**
- ✅ **Browse All Games**: Complete 16-game library with filtering and sorting
- ✅ **Category System**: Filter by FPS, Battle Royale, RPG, Sports, Action, MOBA, Sandbox
- ✅ **Sorting Options**: Sort by rating or name
- ✅ **Search & Navigation**: Easy navigation between sections

#### 🔐 **Authentication System**
- ✅ **Email/Password Registration**: Full name, email, photo URL with validation
- ✅ **Password Requirements**: Uppercase, lowercase, minimum 6 characters
- ✅ **Google Authentication**: One-click login with Google
- ✅ **Profile Management**: View and update user information
- ✅ **Logout Functionality**: Proper logout with state management

#### 📧 **Forgot Password**
- ✅ **Email Pre-filling**: Auto-fills email from login page
- ✅ **Gmail Integration**: Redirects to Gmail after sending reset email
- ✅ **User-Friendly Interface**: Clear instructions and feedback

#### 🎨 **Modern UI/UX**
- ✅ **Urban Theme**: Vibrant neon colors with dark aesthetic
- ✅ **Gradient Animations**: Smooth color transitions and hover effects
- ✅ **Framer Motion**: Advanced animations and page transitions
- ✅ **Glassmorphism Effects**: Modern card designs with backdrop blur
- ✅ **Responsive Design**: Mobile-first approach with all device optimization

#### 🛠️ **Technical Stack**
- ✅ **React 19**: Modern React with hooks and concurrent features
- ✅ **React Router DOM**: Client-side routing with protected routes
- ✅ **Framer Motion**: Animation library for smooth transitions
- ✅ **Firebase**: Authentication and secure configuration
- ✅ **Environment Variables**: Secure Firebase keys management

#### 🔧 **Development Tools**
- ✅ **Vite**: Fast build tool and development server
- ✅ **ESLint**: Code linting and formatting
- ✅ **Git**: Version control with meaningful commit history (10+ commits)
- ✅ **Dynamic Titles**: Tab title changes based on current page

#### 📱 **Additional Features**
- ✅ **404 Page**: Beautiful custom not found page with animations
- ✅ **Update Profile Route**: Complete profile management system
- ✅ **Unique Images**: All 16 games have unique, high-quality images
- ✅ **Newsletter Form**: Functional subscription with validation

---

## ✨ Key Features

### 🏠 Homepage
- **Interactive Banner**: Slider with 3+ slides showcasing featured games
- **Popular Games Section**: Top-rated games displayed in beautiful card layout
- **Newsletter Section**: Subscription form for game updates
- **Responsive Design**: Works perfectly on all devices

### 🎯 Game Details Page (Protected)
- **Complete Game Information**: All details from JSON data including descriptions, ratings, developers
- **Download Links**: Direct links to official game stores
- **Authentication Required**: Protected route that redirects to login if not authenticated
- **Modern UI**: Gradient cards with hover effects and animations

### 📚 All Reviews & Categories
- **Browse All Games**: Complete game library with filtering and sorting
- **Category System**: Filter games by FPS, Battle Royale, RPG, Sports, etc.
- **Sorting Options**: Sort by rating or name
- **Search & Navigation**: Easy navigation between different sections

### 🔐 Authentication System
- **Email/Password Registration**: Full name, email, photo URL, password with validation
- **Password Requirements**:
  - Must contain uppercase letter
  - Must contain lowercase letter
  - Minimum 6 characters
- **Google Authentication**: One-click login with Google
- **Profile Management**: View and update user information
- **Logout Functionality**: Proper logout with state management

### 📧 Forgot Password
- **Email Pre-filling**: Automatically fills email from login page
- **Gmail Integration**: Redirects to Gmail after sending reset email
- **User-Friendly Interface**: Clear instructions and feedback

### 🎨 Modern UI/UX
- **Urban Theme**: Vibrant neon colors with dark aesthetic
- **Gradient Animations**: Smooth color transitions and hover effects
- **Framer Motion**: Smooth page transitions and animations
- **Glassmorphism Effects**: Modern card designs with backdrop blur
- **Responsive Design**: Mobile-first approach with tablet and desktop optimization

## 🛠️ Technical Stack

### Frontend
- **React 19** - Modern React with hooks and concurrent features
- **React Router DOM** - Client-side routing with protected routes
- **Framer Motion** - Animation library for smooth transitions
- **CSS3** - Custom styling with gradients, animations, and responsive design

### Backend & Authentication
- **Firebase Authentication** - Email/password and Google OAuth
- **Environment Variables** - Secure configuration management

### Development Tools
- **Vite** - Fast build tool and development server
- **ESLint** - Code linting and formatting
- **Git** - Version control with meaningful commit history

## 📦 npm Packages Used

```json
{
  "dependencies": {
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.9.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}
```

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/gamehub.git
   cd gamehub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` file with your Firebase credentials:
   ```env
   VITE_API_KEY=your_firebase_api_key
   VITE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_PROJECT_ID=your_project_id
   VITE_STORAGE_BUCKET=your_project.appspot.com
   VITE_SENDER_ID=your_messaging_sender_id
   VITE_APP_ID=your_app_id
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🔧 Firebase Configuration

### 1. Create Firebase Project
- Go to [Firebase Console](https://console.firebase.google.com)
- Create a new project or use existing one
- Enable Authentication service

### 2. Get Configuration Keys
- Go to Project Settings (⚙️ gear icon)
- Scroll to "Your apps" section
- Click "Web" app icon (</>)
- Copy the configuration object

### 3. Environment Variables Setup
Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```

### 4. Authentication Setup
- Enable Email/Password authentication in Firebase Console
- Enable Google Authentication provider
- Add authorized domains (for Netlify/Surge deployment)

## 🌐 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify
3. Add environment variables in Netlify dashboard
4. Add your domain to Firebase authorized domains

### Alternative Hosting
- **Vercel**: Connect your GitHub repository
- **Surge**: Use `surge dist` command
- **Firebase Hosting**: Use Firebase CLI

### Important Notes for Deployment
- ✅ **SPA Routing**: Configure hosting to serve `index.html` for all routes
- ✅ **Environment Variables**: Set up environment variables in hosting platform
- ✅ **Firebase Authorized Domains**: Add your hosting domain to Firebase Console
- ✅ **Build Optimization**: Project is optimized for production builds

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Banner.jsx      # Hero banner with image slider
│   ├── GameCard.jsx    # Game preview cards with animations
│   ├── Header.jsx      # Navigation with auth state
│   └── Footer.jsx      # Site footer
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page with popular games
│   ├── GameDetails.jsx # Individual game details (protected)
│   ├── AllReviews.jsx  # Browse all games with filters
│   ├── Categories.jsx  # Category-based game browsing
│   ├── Login.jsx       # Authentication login
│   ├── Register.jsx    # User registration
│   ├── Profile.jsx     # User profile management
│   ├── UpdateProfile.jsx # Profile update form
│   ├── ForgotPassword.jsx # Password reset functionality
│   └── NotFound.jsx    # 404 error page
├── context/            # React context providers
│   └── AuthContext.jsx # Authentication state management
├── firebase/           # Firebase configuration
│   └── firebase.config.js # Firebase initialization
├── data/               # Static data
│   └── games.json      # Game information database
└── routes/             # Route protection
    └── PrivateRoute.jsx # Protected route wrapper
```

## 🎮 Game Database

The application includes **16 premium games** across various categories:

### FPS Games
- PlayerUnknown's Battlegrounds (4.5⭐)
- Call of Duty: Mobile (4.6⭐)
- Valorant (4.6⭐)
- Overwatch 2 (4.1⭐)
- Counter-Strike 2 (4.8⭐)

### Battle Royale
- Fortnite (4.4⭐)
- Apex Legends (4.5⭐)

### Sports
- FIFA 24 (4.3⭐)
- Rocket League (4.4⭐)

### RPG & Adventure
- Cyberpunk 2077 (4.2⭐)
- The Legend of Zelda: Breath of the Wild (4.9⭐)
- Genshin Impact (4.7⭐)

### MOBA
- League of Legends (4.7⭐)
- Dota 2 (4.6⭐)

### Sandbox & Action
- Minecraft (4.8⭐)
- Grand Theft Auto V (4.7⭐)

## 🎨 UI/UX Features

### Visual Design
- **Dark Theme**: Modern dark aesthetic with neon accents
- **Gradient Backgrounds**: Dynamic color gradients throughout
- **Glassmorphism**: Backdrop blur effects on cards and forms
- **Neon Colors**: Vibrant pinks, cyans, and purples
- **Smooth Animations**: Framer Motion transitions

### Interactive Elements
- **Hover Effects**: Cards lift and glow on hover
- **Button Animations**: Shimmer effects and color transitions
- **Loading States**: Smooth transitions (removed for instant experience)
- **Responsive Navigation**: Mobile-optimized header and navigation

### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels and semantic HTML
- **High Contrast**: Clear text contrast ratios
- **Touch-Friendly**: Large touch targets for mobile

## 🔐 Security Features

- **Environment Variables**: Sensitive keys stored securely
- **Firebase Authentication**: Secure OAuth implementation
- **Input Validation**: Client-side and server-side validation
- **Password Security**: Strong password requirements
- **Protected Routes**: Authentication-based access control

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices (320px+)
- **Tablet Support**: Perfect layout for tablets (768px+)
- **Desktop Enhanced**: Full feature experience on desktop (1200px+)
- **Adaptive Grid**: Responsive game grid system
- **Touch Optimized**: Mobile-friendly interactions

## 🚦 Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

### Code Quality
```bash
npm run lint
```

## 📄 License

This project is developed as part of a coding assignment and is available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For any issues or questions, please refer to the documentation or create an issue in the repository.

---

**Built with ❤️ using React, Firebase, and modern web technologies**
