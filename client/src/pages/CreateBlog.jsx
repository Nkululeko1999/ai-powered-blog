import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Blog from '../components/Blog';
import Header from '../components/Header';

function CreateBlog() {
    const [formData, setFormData] = useState({
        title: '',
        image: '',
        content: '',
    });

    const [imagePreview, setImagePreview] = useState(null);

    // Handle input changes for title, image, and content
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle image upload and set the preview
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, image: URL.createObjectURL(file) }); // Store the image URL in state
            setImagePreview(URL.createObjectURL(file));  // Show the image preview
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Blog created:', formData);
        // You can replace this with an API call or state management to store the data
    };

    return (
        <section>
            <Header />

            <div className="max-w-4xl mx-4 lg:mx-auto mt-10 px-4 sm:px-6 lg:px-8 py-6 bg-white shadow-all rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Create a New Blog</h1>
                <form onSubmit={handleSubmit}>
                    {/* Title Input */}
                    <label htmlFor="title" className="block text-gray-700 mb-2">Title</label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder="Enter blog title"
                        required
                        className="mb-4"
                    />

                    {/* Image Upload */}
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-gray-700 mb-2">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                        />
                    </div>

                    {/* Content Textarea */}
                    <div className="mb-4">
                        <label htmlFor="content" className="block text-gray-700">Content</label>
                        <textarea
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            placeholder="Write your blog content here"
                            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                            rows="6"
                            required
                        />
                    </div>

                    {/* Blog Preview */}
                    <div className="mt-8">

                        {formData.title && formData.content && (
                            <div className="w-full sm:w-[340px] lg:w-[400px]">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 w-full">Blog Preview</h2>
                                <Blog
                                    image={imagePreview || formData.image}  // Show the uploaded image or preview image
                                    title={formData.title}
                                    date="February 8, 2025"  // Static for now, could be dynamic
                                    views={0}  // Static, could be dynamic
                                    likes={0}  // Static, could be dynamic
                                    reviews={0}  // Static, could be dynamic
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="mt-4"
                    >
                        Create Blog
                    </Button>
                </form>


            </div>
        </section>
    );
}

export default CreateBlog;
