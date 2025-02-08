import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import ReactPaginate from 'react-paginate'; // For pagination
import Header from '../components/Header';
import Blog from '../components/Blog';

const Blogs = () => {
    const [selectedTab, setSelectedTab] = useState('all');
    const [sortBy, setSortBy] = useState('date');
    const [currentPage, setCurrentPage] = useState(0);
    
    const blogs = [
        {
            id: 1,
            image: "https://via.placeholder.com/600x400",
            title: "How to Build a React App",
            date: "2025-02-08",
            views: 1200,
            likes: 350,
            reviews: 42,
        },
        {
            id: 2,
            image: "https://via.placeholder.com/600x400",
            title: "Understanding JavaScript Closures",
            date: "2025-02-06",
            views: 2000,
            likes: 500,
            reviews: 98,
        },
        {
            id: 3,
            image: "https://via.placeholder.com/600x400",
            title: "Mastering Tailwind CSS",
            date: "2025-02-01",
            views: 800,
            likes: 150,
            reviews: 30,
        },
        {
            id: 4,
            image: "https://via.placeholder.com/600x400",
            title: "How to Build PIC Project",
            date: "2024-02-08",
            views: 12200,
            likes: 1390,
            reviews: 420,
        },
        {
            id: 5,
            image: "https://via.placeholder.com/600x400",
            title: "Understanding Organic Chemistry ",
            date: "2025-02-09",
            views: 2000,
            likes: 200,
            reviews: 989,
        },
        {
            id: 6,
            image: "https://via.placeholder.com/600x400",
            title: "Mastering Physics",
            date: "2025-03-11",
            views: 100,
            likes: 48,
            reviews: 30,
        },
    ];

    // Sort the blogs based on selected sorting option
    const sortedBlogs = [...blogs].sort((a, b) => {
        if (sortBy === 'date') {
            return new Date(b.date) - new Date(a.date); // Sort by date
        } else if (sortBy === 'views') {
            return b.views - a.views; // Sort by views
        } else if (sortBy === 'likes') {
            return b.likes - a.likes; // Sort by likes
        }
        return 0;
    });

    // Paginate the blogs
    const blogsPerPage = 3;
    const displayedBlogs = sortedBlogs.slice(currentPage * blogsPerPage, (currentPage + 1) * blogsPerPage);

    // Handle page change
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <section>
            <Header />

            <div className="max-w-[1500px] mx-auto mt-10 lg:mt-14 px-4 sm:px-6 lg:px-14 py-2">

            {/* Sort By Dropdown */}
            <div className="mb-4">
                <label className="mr-2">Sort By: </label>
                <select
                    className="py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="date">Date</option>
                    <option value="views">Views</option>
                    <option value="likes">Likes</option>
                </select>
            </div>

            {/* Blog List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedBlogs.map((blog) => (
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

            {/* Pagination */}
            <div className="mt-6">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={Math.ceil(sortedBlogs.length / blogsPerPage)}
                    onPageChange={handlePageChange}
                    containerClassName={'flex justify-center space-x-4'}
                    pageClassName={'py-2 px-4 border border-gray-300 rounded-md cursor-pointer'}
                    activeClassName={'bg-blue-500 text-white'}
                    previousClassName={'py-2 px-4 border border-gray-300 rounded-md cursor-pointer'}
                    nextClassName={'py-2 px-4 border border-gray-300 rounded-md cursor-pointer'}
                />
            </div>
        </div>
        </section>
    );
};

export default Blogs;
