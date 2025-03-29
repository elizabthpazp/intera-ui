# 📦 InteraUI

Welcome to **InteraUI**!  
🚀 This is a collection of reusable React components designed to enhance UI development efficiently and quickly.


# ✨ Features

✔️ Reusable and modular components.  
✔️ Compatible with any React or Next.js project.  
✔️ Customizable styles using CSS, Styled Components, or Tailwind CSS.  
✔️ Optimized code for performance and accessibility.  


# 📌 Installation

You can install this library in your project using npm or yarn:

```bash
npm install @elizabthpazp/intera-ui
```

Or with yarn:

```bash
yarn add @elizabthpazp/intera-ui
```

Or with pnpm:

```bash
pnpm add @elizabthpazp/intera-ui
```

# 🚀 Usage
Import and use the components in your React application:

```jsx
import "@elizabthpazp/intera-ui/dist/globals.css";
import { ButtonCard } from "@elizabthpazp/intera-ui";

function App() {
 const [userData, setUserData] = useState(null);

 const handleLogin = (email, password, rememberMe) => {
   setUserData({ email, password, rememberMe }); 
 };

 return <ButtonCard title={'Login'} darkMode={true} onLogin={handleLogin}></ButtonCard>;
}

export default App;
```

# 📂 Project Structure
```plaintext 
intera-ui/
│── src/
│   ├── components/  # Individual components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── index.js  # Library entry point
│   ├── styles/       # Global styles (optional)
│── .gitignore
│── package.json
│── README.md
│── tsconfig.json     # (If using TypeScript)
```

# 🛠️ Development

If you want to contribute or modify the components, clone the repository and use the following commands:

Clone the repository

```sh
git clone https://github.com/elizabthpazp/intera-ui.git
cd intera-ui
npm install
```

# ✅ Contributions
Contributions are welcome! To improve this library:

Fork the repository.

Create a new branch (git checkout -b feature/new-component).

Make your changes and commit them (git commit -m "Add new component").

Submit a pull request 🚀.

# 📜 License
This project is licensed under the MIT License. You can use it freely in personal and commercial projects.

# 📬 Contact

If you have any questions or suggestions, contact me at [https://t.me/elijs_dev].
