import React from 'react'
import Blog from './Blog'

function BlogList() {
    // Sample blog data
    const blogPosts = [
        {
            id: 1,
            image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
            title: "How to Build a React App",
            date: "February 8, 2025",
            views: 1200,
            likes: 350,
            reviews: 42
        },
        {
            id: 2,
            image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
            title: "Understanding JavaScript Closures",
            date: "February 6, 2025",
            views: 2000,
            likes: 500,
            reviews: 98
        },
        {
            id: 3,
            image: "https://via.placeholder.com/600x400", // Replace with actual image URLs
            title: "Mastering Tailwind CSS",
            date: "February 1, 2025",
            views: 800,
            likes: 150,
            reviews: 30
        }
    ]

    return (
        // Blog List
        <div className="mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((blog) => (
                    <Blog 
                        key={blog.id} 
                        image={blog.image} 
                        title={blog.title} 
                        date={blog.date} 
                        views={blog.views} 
                        likes={blog.likes} 
                        reviews={blog.reviews} 
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogList
