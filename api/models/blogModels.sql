-- Create ENUM type for blog status
CREATE TYPE blog_status AS ENUM ('draft', 'published', 'archived');

-- Create tables
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR NOT NULL
);

CREATE TABLE blogs (
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    image_url VARCHAR,
    author_id INTEGER REFERENCES users(user_id),
    category_id INTEGER REFERENCES categories(category_id),
    views INTEGER DEFAULT 0,
    likes INTEGER DEFAULT 0,
    status blog_status DEFAULT 'draft',  -- Using the defined ENUM type here
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tags (
    tag_id SERIAL PRIMARY KEY,
    tag_name VARCHAR NOT NULL
);

CREATE TABLE blog_tags (
    blog_id INTEGER REFERENCES blogs(blog_id),
    tag_id INTEGER REFERENCES tags(tag_id),
    PRIMARY KEY (blog_id, tag_id)
);

CREATE TABLE likes (
    like_id SERIAL PRIMARY KEY,
    blog_id INTEGER REFERENCES blogs(blog_id),
    user_id INTEGER REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
