export default async function BlogDetailPage({ params }) {
    const { id } = params;

    try {
        const res = await fetch(`https://api.vercel.app/blog/${id}`);

        if (!res.ok) {
            throw new Error('Failed to fetch blog post');
        }

        const post = await res.json();

        if (!post?.id) {
            return <div className="p-6 text-center text-gray-500">Blog post not found.</div>;
        }

        return (
            <div className="max-w-3xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                <div className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold">Author:</span> {post.author}
                </div>
                <div className="text-sm text-gray-600 mb-4">
                    <span className="font-semibold">Date:</span> {new Date(post.date).toDateString()}
                </div>
                <div className="text-sm text-gray-600 mb-6">
                    <span className="font-semibold">Category:</span> {post.category}
                </div>
                <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                    {post.content}
                </p>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div className="p-6 text-center text-red-500">Error loading blog post.</div>;
    }
}