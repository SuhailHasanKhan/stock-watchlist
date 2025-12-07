# 📈 Stock Watchlist App (React Native + Expo)

A simple, clean, Acorns-style React Native application that allows users to track stocks in a personal watchlist. Users can add stocks, update them, delete them, and view their watchlist in a modern, mobile-friendly interface.

This project was built for my final coding assignment and uses **GitHub Copilot** throughout the development process.

---

## 🚀 Features

### ✅ Core Functionality
- Add a stock to your personal watchlist  
- Edit existing stock entries  
- Delete a stock  
- View your full list of tracked stocks  

### 🧭 Navigation
- Uses React Navigation   
- Screens:
  - **WatchlistScreen** (list view)
  - **AddStockScreen**
  - **EditStockScreen**

### 🖥 UI / UX
- Clean Acorns-inspired theme  
- Card-style list items  
- Simple and intuitive form layout  

### 🧠 State Management
- Built entirely with `useState`  
- Parent-level state shared across screens via props  

---

## 📂 Project Structure

```
/components
    StockListItem.js

/screens
    WatchlistScreen.js
    AddStockScreen.js
    EditStockScreen.js

App.js
package.json
assets/
ReadMe.md
```

---

## 📦 Installation & Running the App

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/stock-watchlist.git
cd stock-watchlist
```

2. Install dependencies:
```bash
npm install
```

3. Install Navigation dependencies:
```bash
npm install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

4. Start the development server:
```bash
npm start
```

5. Open Expo Go on your iPhone and scan the QR code.

---

# 🤖 GitHub Copilot Reflection

This project required using GitHub Copilot extensively during the design and coding process. Below is my reflection on how Copilot contributed, what challenges occurred, and how I used it effectively.

---

## 💡 How I Incorporated Copilot Into My Workflow

I used GitHub Copilot as a coding assistant throughout the project. It helped me:

- Generate component and screen scaffolds  
- Suggest handler functions, hooks, and helper utilities  
- Speed up UI creation with auto-generated JSX  
- Reduce repetitive boilerplate  

I treated Copilot as a helper, not an autopilot — always reviewing suggestions and adjusting logic as needed.

---

## ⚠️ Example Where Copilot Gave a Wrong or Unhelpful Suggestion

When setting up navigation, Copilot suggested:

```js
import 'expo-router/entry';
```

This was incorrect because my project uses **React Navigation**, not Expo Router.  
Keeping this line caused the app to fail at startup due to missing routing configuration.

### ✔ How I fixed it:
- Removed the incorrect import  
- Replaced it with:

```js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
```

After this correction, navigation worked properly and the app launched without errors.

---

## ⚡ Example Where Copilot Significantly Sped Up My Work

Copilot was extremely helpful when building the **StockListItem** component.  
After typing just the component name, Copilot auto-generated:

- A well-structured card layout  
- Basic styling  
- A pressable wrapper behavior  
- Nicely formatted text blocks  

This saved a lot of time writing repetitive JSX and styles.  
I only needed small design tweaks to match the Acorns theme.

---

# 📌 Summary

GitHub Copilot greatly improved my development speed and efficiency.  
However, I learned that:

- Copilot sometimes produces incorrect or unrelated code  
- It works best when guided with clear comments or partially written code  
- You must understand and validate its suggestions  

Overall, Copilot was a valuable tool that supported the creation of a clean, functional, and well-structured Stock Watchlist app.

---


