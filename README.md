# 🛒 Shopping Cart UI

A simple shopping cart app built with **React**, the **Context API** and **JSON Server**. Users can browse a list of products, add them to a cart, and manage the cart from a dropdown menu. The cart is saved to `localStorage`, so it's still there after a page refresh.

> This is a practice project from the **Modern React From The Beginning** course.

## 🔗 Live Demo

👉 [View the live demo](https://your-demo-link-here.com)

> **Note:** The product data comes from JSON Server, which runs locally. For the live demo, the data must be served from a hosted API or bundled as a static JSON file.

## ✨ Features

- **Product list:** products are fetched from a JSON Server API and displayed in a list
- **Add to cart:** every product has an **Add to cart** button
- **Cart counter:** a cart icon in the header shows how many products are in the cart
- **Cart dropdown:** clicking the cart icon opens a dropdown where you can:
  - remove a single product from the cart
  - clear the whole cart
- **Saved cart:** cart items are stored in `localStorage` and restored when the page is reloaded
- **Global state:** cart state is managed with React's Context API, so there's no prop drilling

## 🛠️ Tech Stack

| Tool | Purpose |
| --- | --- |
| [React 19](https://react.dev/) | UI library |
| [Vite](https://vite.dev/) | Dev server and build tool |
| [Context API](https://react.dev/reference/react/createContext) | Global state management |
| [JSON Server](https://github.com/typicode/json-server) | Mock REST API for products |
| [Tailwind CSS 4](https://tailwindcss.com/) | Styling |
| [React Icons](https://react-icons.github.io/react-icons/) | Icons (e.g. the cart icon) |
| [ESLint](https://eslint.org/) | Linting |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/shopping-cart-ui.git
   cd shopping-cart-ui
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start JSON Server** (in a separate terminal)

   ```bash
   npx json-server db.json --port 8000
   ```

   The products API will be available at `http://localhost:8000/products`.

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Builds the app for production into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint on the project |

## 📁 Project Structure

```
shopping-cart-ui/
├── public/
├── src/
│   ├── components/     # UI components (ProductList, ProductCard, Header, CartDropdown...)
│   ├── context/        # CartContext (cart state and actions)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── db.json             # JSON Server data (products)
├── index.html
├── package.json
└── vite.config.js
```

> The exact structure may change as the project grows.

## 🧠 What I Learned

- **Context API:** creating a context and a provider, and reading shared state with `useContext` instead of passing props through many components
- **Managing cart state:** adding items, removing a single item and clearing the whole cart with immutable state updates
- **Fetching data:** loading products from a REST API (JSON Server) with `fetch` and `useEffect`, and handling loading and error states
- **Saving with `localStorage`:** saving the cart whenever it changes and restoring it when the app loads
- **Derived state:** working out the cart item count from existing state instead of storing it separately
- **UI interactions:** building a dropdown menu that opens and closes and a cart badge counter
- **Tooling:** setting up a React project with Vite, styling with Tailwind CSS and using React Icons

## 🔮 Future Improvements

- Increase or decrease item quantities in the cart
- Show the cart total price
- Add a checkout page
- Add product search and filtering

## 🙏 Acknowledgements

- **Modern React From The Beginning** course, which this project is based on

---

Made with ❤️ while learning React.
