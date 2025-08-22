import Link from 'next/link';

export default function BlogCard({ post }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                    {post.title}
                </Link>
            </h2>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Author:</span> {post.author}
            </p>
            <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Date:</span> {new Date(post.date).toDateString()}
            </p>
            <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Category:</span> {post.category}
            </p>
            <p className="text-gray-700 text-sm line-clamp-3">{post.content}</p>
        </div>
    );
}
