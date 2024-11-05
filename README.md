# Simple Blog Application

This project is a basic blog application that utilizes public APIs to display a list of posts, fetch user information, and show comments. Built using **React**, this app demonstrates core web development concepts, including routing, state management, and API integration.

## Features

1. **Home Page** - Displays a list of blog posts (title and content). For each post, it also shows the name of the user who created it.
2. **Post Details Page** - When a user clicks on a post, they are redirected to the post's detailed view, where they can see:
   - Full post content
   - Details about the user who created the post
   - Comments related to the post

## Technologies Used

- **Frontend Framework:** React
- **State Management:** Redux
- **Routing:** React Router
- **CSS Styling:** Custom CSS
- **APIs Used:**
  - [Posts API](https://jsonplaceholder.typicode.com/posts): To fetch a list of posts.
  - [Users API](https://jsonplaceholder.typicode.com/users): To fetch information about users.
  - [Comments API](https://jsonplaceholder.typicode.com/posts/1/comments): To fetch comments for a particular post.

## API Endpoints

- **Get list of posts:** `https://jsonplaceholder.typicode.com/posts`
- **Get list of users:** `https://jsonplaceholder.typicode.com/users`
- **Get details of a user:** `https://jsonplaceholder.typicode.com/users/{id}`
- **Get comments of a post:** `https://jsonplaceholder.typicode.com/posts/{postId}/comments`

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/simple-blog-app.git
   cd simple-blog-app
2. **Install Dependencies**
   npm install
3. **Run the Application**
   npm start

## Folder Structure
  src/ - Main source code directory
  components/ - React components (HomePage, PostDetails)
  store/ - Redux store setup and slices for state management
  App.js - Main app component with routing
  index.js - Entry point of the app

## Usage
    Home Page
    Displays a grid of posts. Each post shows:
    
    Title
    A preview of the content
    The name of the author
    Users can click on any post to view its details.
    
    Post Details Page
    When a post is clicked, users are taken to a page showing:
    
    Full post content
    Author details
    Comments on the post
