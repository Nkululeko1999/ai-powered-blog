import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Input from '../components/Input';
import Card from '../components/Card';
import CardContent from '../components/CardContent';
import Button from '../components/Button';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Skeleton from '../components/Skeleton';
import Header from '../components/Header';

const mockBlogs = [
  {
    id: 1,
    title: 'Building AI-Powered Blogs for the Future',
    image: 'https://via.placeholder.com/600x400',
    date: 'February 8, 2025',
    views: 100,
    likes: 48,
    reviews: 30,
  },
  {
    id: 2,
    title: 'Understanding React State Management',
    image: 'https://via.placeholder.com/600x400',
    date: 'January 25, 2025',
    views: 100,
    likes: 48,
    reviews: 30,
  },
  {
    id: 3,
    title: 'Tailwind CSS: Styling Made Easy',
    image: 'https://via.placeholder.com/600x400',
    date: 'January 15, 2025',
    views: 100,
    likes: 48,
    reviews: 30,
  },
];

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBlogs(mockBlogs);
      setLoading(false);
    }, 1000); // Simulate API delay
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
    if (confirmDelete) {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
        <Header />

        <motion.div
      className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-all rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Blogs</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full"
        />
      </div>

      {/* Blog List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-56 w-full rounded-md" />
          ))}
        </div>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="relative shadow-all">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <CardContent className="p-4">
                <h2 className="text-lg font-bold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{blog.date}</p>
                <p className="mb-2">Views: {blog.views} | Likes: {blog.likes} | Reviews: {blog.reviews}</p>

                <div className="flex gap-2">
                  <Button color="purple" className="flex items-center gap-1">
                    <FaEdit size={18} /> Edit
                  </Button>
                  <Button color="red"
                    className="flex items-center gap-1"
                    onClick={() => handleDelete(blog.id)}
                  >
                    <FaTrash size={18} /> Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
    </motion.div>
    </section>
  );
};

export default ManageBlogs;
