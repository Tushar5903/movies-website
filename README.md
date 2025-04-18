# 🎬 Movie Watchlist App :-  https://movies-website-mu-eight.vercel.app/

The **Movie Watchlist App** is a dynamic, responsive, and user-friendly web application built with **React** and styled with **custom CSS**. This project leverages the **TMDB (The Movie Database) API** to deliver live data on trending and popular movies, allowing users to explore, sort, and manage their own personalized watchlist—all stored in-browser using `localStorage`.

Whether you’re a movie enthusiast or just browsing what’s hot, this app offers a clean UI, intuitive navigation, and interactive controls that enhance the movie discovery experience.

---

## 📖 What This App Does

Here’s what makes the Movie Watchlist App a fun and practical tool for film lovers:

### ✅ Explore Trending Movies
The homepage automatically fetches data from TMDB's trending movie API. Each movie is displayed as a visually engaging card that includes the movie poster, title, and a toggle button to add or remove it from your watchlist.

### ✅ Create & Maintain a Watchlist
Clicking the “+” button on a movie card adds it to your personal watchlist. This watchlist is persisted using the browser’s `localStorage`, meaning your data remains even after the page reloads or the browser closes.

### ✅ Sort & Filter with Ease
Users can interact with sorting buttons that allow them to reorder the movie list based on:

- **IMDb Rating** – to bring highly-rated titles to the top.
- **Popularity** – to focus on what’s trending right now.
- **Genre Selection** – (if implemented in extension) to filter movies based on user’s favorite categories.

### ✅ Search in Real-Time
A live search input enables users to quickly locate movies by name. As the user types, the displayed results dynamically filter, offering a fast and fluid search experience.

### ✅ Pagination Controls
Pagination buttons (Next / Previous) allow users to browse through pages of movie data. This is especially useful when dealing with large datasets fetched from the API.

### ✅ Responsive Layout
Thanks to custom CSS and media queries, the layout adapts beautifully across screen sizes—from widescreen desktops to compact mobile phones. Cards resize, text adjusts, and spacing contracts or expands accordingly.

---

## 🛠️ Technologies Used

This project uses the following tech stack and libraries:

| Technology | Description |
|------------|-------------|
| **React JS** | Component-based JavaScript framework for building UIs |
| **TMDB API** | Source for movie data |
| **CSS** | Custom styles and responsive design |
| **Media Queries** | Responsive behavior across screen sizes |
| **LocalStorage** | Persistent client-side data storage |
| **Flexbox** | CSS layout model for positioning items |
| **React Hooks** | `useState`, `useEffect`, etc. for managing state and side effects |

---

## 🧠 App Architecture

The app is structured with a clear component-based approach, making it modular and maintainable.

### 🧩 Key Components

- **Navbar**: A top navigation bar with branding, styled using spacing and shadows for clean UI.
- **Banner**: A hero section using a background image (manually selected for now) with an overlaid strip to provide a visual entry point.
- **MovieCard**: Represents each movie; displays the poster, title, and action button.
- **WatchlistTable**: Displays saved movies in a table format with poster, title, rating, popularity, and delete functionality.
- **Sorting & Pagination Controls**: Provides tools for reordering and navigating between sets of movie results.

---

## 🎨 CSS & Styling Breakdown

The app includes a clean and modern design with smooth hover effects, styled buttons, and responsive behaviors.

### Navbar
- Uses `flexbox` for alignment.
- Font scaling with media queries (`x-large`, `bolder`).
- Color-specific `p` tag inside anchor for emphasis.

### Banner
- Full-width background image.
- `rgba()` overlay with white text for contrast.
- Responsive height and centering.

### Movie Cards
- `div` with dynamic background image (poster).
- Rounded corners (`border-radius: 12px`) and hover zoom (`transform: scale(1.05)`).
- Movie title overlay strip with translucent dark background.

### Watchlist Table
- Custom-styled table (`border-collapse`, custom padding).
- Aligned image thumbnails and text.
- Red hover effect on delete button for intuitive feedback.

### Buttons
- Two types: gray (neutral sort) and blue (active sort).
- `Next` and `Previous` buttons have spacing and border-radius.
- Buttons adjust with screen size and wrap as needed.

### Search Bar
- Rounded input with gray translucent background.
- Center-aligned with responsive margin and padding.

### Responsive Design
Media queries cover:

- Tablets (`max-width: 1024px`)
- Small devices (`max-width: 575px`)
- Phones (`max-width: 425px`)

Each section adjusts `margin`, `width`, or layout logic to ensure optimal viewing.

---

## 📁 Folder Structure (Suggested)

```bash
movie-watchlist-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Banner.js
│   │   ├── MovieCard.js
│   │   ├── Sorting.js
│   │   ├── Pagination.js
│   │   ├── WatchlistTable.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Watchlist.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── style.css
├── .env
├── README.md
```

---

## 🚀 Getting Started

Here’s how to set up the project locally:

### 1️⃣ Prerequisites

Ensure you have:

- [Node.js](https://nodejs.org/en/download/) (v14+)
- npm (v6+)

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/movie-watchlist-app.git
cd movie-watchlist-app
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure TMDB API Key

- Sign up at [TMDB](https://www.themoviedb.org/)
- Create a `.env` file in the root folder:

```bash
REACT_APP_TMDB_API_KEY=your_api_key_here
```

### 5️⃣ Run the App

```bash
npm start
```

Your development server will launch at `http://localhost:3000`.

---

## 🧪 Future Scope & Enhancements

Here are some enhancements you can implement in the future:

- 🔄 **Auto-refresh watchlist when sorting/filtering**
- 🌐 **Add Genre Filter dropdown with live filter**
- 💾 **Export watchlist to file (CSV/JSON)**
- 🌙 **Add Dark Mode toggle**
- 🔍 **Detailed Movie Page** with overview, cast, trailer, etc.
- ⚙️ **User authentication** to save watchlists across devices
- 🔁 **Infinite Scroll** instead of pagination

---

## 🙏 Acknowledgments

- **[TMDB API](https://www.themoviedb.org/)** for providing comprehensive movie data.
- React and open-source contributors for building the tools that power this project.
- Inspiration drawn from streaming platforms like **Netflix**, **IMDb**, and **Letterboxd**.
