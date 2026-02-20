# 🔐 User Authentication Mobile App

A modern **React Native + Expo** mobile application featuring a complete user authentication flow with beautiful UI. Built with **TypeScript**, **NativeWind (Tailwind CSS)**, **React Hook Form**, **Zustand**, and **React Navigation** for seamless user experience.

---

## 💻 Source Code

🔗 **GitHub Repository:** [https://github.com/aniltanriverdiler/user-authentication.git](https://github.com/aniltanriverdiler/user-authentication.git)

---

## ✨ Features

### 🔑 Authentication Flow
- ✅ **Welcome Screen:** Beautiful onboarding screen with background image
- ✅ **Login Screen:** Email and password login with form validation
- ✅ **Register Screen:** User registration with email, full name, password, and confirm password
- ✅ **Form Validation:** Required field validation using React Hook Form
- ✅ **Password Visibility Toggle:** Show/hide password functionality
- ✅ **State Management:** Zustand for authentication state management
- ✅ **Persistent Authentication:** User session persisted with AsyncStorage

### 🏠 Home Screen
- ✅ **User Greeting:** Personalized welcome message
- ✅ **Book a Ride:** Quick action button for booking rides
- ✅ **Service Options:** Ride, Package, Rentals, and Intercity service buttons
- ✅ **Recent Rides:** Display recent ride history with route, distance, date, and price
- ✅ **Logout Functionality:** Easy logout option

### 🎨 Design & UI
- 🌑 **Dark Theme:** Modern dark UI with custom color palette
- ✨ **Modern UI:** Styled with **NativeWind (Tailwind CSS)** for React Native
- 📱 **Responsive Design:** Optimized for iOS and Android devices
- 🎨 **Custom Components:** Reusable UI components (CheckBox, etc.)
- 🎯 **Smooth Navigation:** React Navigation with native stack and bottom tabs
- 🖼️ **Beautiful Graphics:** Custom background images and icons

### 📱 Mobile Features
- 📱 **Cross-Platform:** Works on both iOS and Android
- 💾 **Data Persistence:** Authentication state saved to AsyncStorage
- ⚡ **Fast Performance:** Optimized React Native components
- 🎯 **Native Feel:** Uses native components for authentic mobile experience
- 🔄 **React Hook Form:** Efficient form state management and validation
- 🧭 **Deep Linking:** Automatic deep link and URL handling configuration

---

## 📂 Project Structure

```
user-authentication/
├─ src/
│  ├─ navigation/              # Navigation configuration
│  │  ├─ index.tsx            # Navigation setup (Auth & Home stacks)
│  │  └─ screens/             # Screen components
│  │     ├─ auth/            # Authentication screens
│  │     │  ├─ WelcomeScreen.tsx    # Welcome/onboarding screen
│  │     │  ├─ LoginScreen.tsx      # Login screen
│  │     │  └─ RegisterScreen.tsx   # Registration screen
│  │     ├─ Home.tsx         # Home screen with recent rides
│  │     └─ NotFound.tsx     # 404 screen
│  ├─ components/             # Reusable React Native components
│  │  └─ common/            # Common components
│  │     └─ CheckBox.tsx    # Checkbox component
│  ├─ store/                 # State management
│  │  └─ auth.ts            # Zustand auth store with persistence
│  ├─ assets/                # Static assets (images, icons)
│  └─ App.tsx                # Root app component
├─ assets/                    # App assets (icon, splash, etc.)
├─ app.json                   # Expo configuration
├─ package.json               # Dependencies and scripts
├─ tsconfig.json              # TypeScript configuration
├─ tailwind.config.js         # Tailwind CSS configuration
├─ metro.config.js            # Metro bundler configuration
├─ babel.config.js            # Babel configuration
├─ global.css                 # Global styles
└─ README.md                  # Project documentation
```

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`) or use `npx expo`
- iOS Simulator (for Mac) or Android Studio (for Android development)
- Expo Development Build (required - cannot run with Expo Go)

### Installation Steps

1️⃣ **Clone the repository:**
```bash
git clone https://github.com/aniltanriverdiler/user-authentication.git
cd user-authentication
```

2️⃣ **Install dependencies:**
```bash
npm install
```

3️⃣ **Start the development server:**
```bash
npm start
# or
npx expo start --dev-client
```

4️⃣ **Run on your device:**
- **iOS:** Press `i` in the terminal or run `npm run ios`
- **Android:** Press `a` in the terminal or run `npm run android`
- **Web:** Press `w` in the terminal or run `npm run web`

### Available Scripts

- `npm start` - Start Expo development server with dev client
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run on web browser

---

## 🏗️ Tech Stack

- ⚛️ **React Native 0.81.4** – Cross-platform mobile framework
- 🟦 **TypeScript ~5.9.2** – Type-safe development
- ⚛️ **React 19.1.0** – Latest React version
- 🚀 **Expo ~54.0.7** – Development platform and tooling
- 🎨 **NativeWind 4.2.1** – Tailwind CSS for React Native
- 🎨 **Tailwind CSS 3.4.19** – Utility-first CSS framework
- 📝 **React Hook Form 7.69.0** – Form state management and validation
- 🗄️ **Zustand 5.0.9** – Lightweight state management
- 💾 **AsyncStorage 2.2.0** – Local data persistence
- 🧭 **React Navigation 7.x** – Navigation library
  - `@react-navigation/native` – Core navigation
  - `@react-navigation/native-stack` – Native stack navigator
  - `@react-navigation/bottom-tabs` – Bottom tab navigator
- 🎯 **React Native Mask Text 0.15.0** – Input masking for phone numbers
- ⚡ **React Native Reanimated ~4.1.1** – High-performance animations
- 📦 **@expo/vector-icons** – Icon library (Feather, FontAwesome5 icons)
- 🛡️ **React Native Safe Area Context ~5.4.0** – Safe area handling

---

## 🎮 How to Use

1️⃣ **Start the App** – Run `npm start` to launch the Expo development server  
2️⃣ **Open on Device** – Use Expo Development Build (iOS/Android) or simulator  
3️⃣ **Welcome Screen** – View the welcome screen with app introduction  
4️⃣ **Login/Register** – Navigate to login or register screens  
5️⃣ **Fill Form Fields** – Enter your credentials (email, password, full name)  
6️⃣ **Form Validation** – Real-time validation with error messages  
7️⃣ **Authenticate** – Login or register to access the home screen  
8️⃣ **Home Screen** – View personalized greeting, book rides, and see recent rides  
9️⃣ **Logout** – Use logout button to return to authentication screens  

---

## 📱 Screens

### 🔐 Authentication Screens

- **Welcome Screen** – Onboarding screen with:
  - Background image
  - App introduction text
  - Continue button to navigate to login

- **Login Screen** – User login with:
  - Email input field with validation
  - Password input field with show/hide toggle
  - Remember me checkbox
  - Forgot password link
  - Social login options (Google, Apple, Facebook)
  - Sign in button
  - Link to registration screen

- **Register Screen** – User registration with:
  - Email input field with validation
  - Full name input field
  - Password input field with show/hide toggle
  - Confirm password field with matching validation
  - Sign up button
  - Link to login screen

### 🏠 Home Screen

- **User Greeting** – Personalized welcome message
- **Book a Ride** – Quick action button
- **Service Options** – Four service type buttons:
  - Ride
  - Package
  - Rentals
  - Intercity
- **Recent Rides** – List of recent rides with:
  - Route information (origin to destination)
  - Distance
  - Date
  - Price
  - Car icon
- **Logout Button** – Sign out functionality

---

## 📌 Technical Notes

- **Cross-Platform** – Built with React Native for iOS and Android support
- **Expo Development Build** – Uses Expo SDK with dev client (cannot run with Expo Go)
- **NativeWind Styling** – Tailwind CSS utilities for React Native components
- **TypeScript** – Full type safety throughout the application
- **Form Management** – React Hook Form for efficient form state and validation
- **State Management** – Zustand with AsyncStorage persistence for authentication
- **Navigation** – React Navigation with static navigation configuration
- **Dark Theme** – Custom dark color scheme for modern UI
- **Performance Optimized** – Uses React Native optimizations and native components
- **Deep Linking** – Automatic deep link and URL handling configuration

---

## 🔮 Future Enhancements

- ✅ **Enhanced Validation** – More comprehensive form validation rules
- 🌐 **API Integration** – Connect to backend authentication API
- 🔒 **Secure Storage** – Enhanced security for stored authentication data
- 📧 **Email Verification** – Email verification flow
- 🔐 **Password Reset** – Forgot password functionality
- 📱 **Biometric Authentication** – Face ID / Touch ID support
- 🎨 **Light Mode** – Light theme support
- 🌍 **Internationalization** – Multi-language support
- 📊 **Analytics** – Track user authentication events
- 🔐 **Password Strength** – Password strength indicator
- 🚗 **Ride Booking** – Full ride booking functionality
- 💳 **Payment Integration** – Payment methods for rides

---

## 🤝 Contributing

💡 Have an idea or found a bug?

- 🍴 **Fork the repository**
- 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
- 💻 **Make your changes** and test thoroughly on both iOS and Android
- 📝 **Commit your changes** (`git commit -m 'Add amazing feature'`)
- 🚀 **Push to the branch** (`git push origin feature/amazing-feature`)
- 🔄 **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear commit messages
- Test on both iOS and Android platforms
- Ensure responsive design for different screen sizes
- Update documentation as needed
- Use TypeScript for type safety
- Follow React Native best practices
- Maintain consistent styling with NativeWind/Tailwind

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Expo Team** – For the amazing React Native development platform
- **React Native Community** – For the incredible cross-platform framework
- **NativeWind** – For bringing Tailwind CSS to React Native
- **React Navigation** – For the powerful navigation solution
- **Zustand** – For the lightweight state management library
- **Open Source Community** – For the amazing libraries and tools
- **All Contributors** – Who help make this project better
