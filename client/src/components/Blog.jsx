import React from 'react'

function Blog({ image, title, date, views, likes, reviews }) {
    return (
        <div className="bg-white rounded-lg shadow-all overflow-hidden cursor-pointer hover:shadow-indigo-300">
            <img src={image} alt={title} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">
                    {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                    {title.length > 50 && (
                        <span className="text-blue-500 cursor-pointer ml-1">See More</span>
                    )}
                </h2>

                <div className="mt-2 text-gray-500 text-sm">
                    <p>Published on: {date}</p>
                    <p>Views: {views} | Likes: {likes} | Reviews: {reviews}</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
