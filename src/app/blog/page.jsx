import BlogList from '@/components/BlogList';

export default async function Page() {
    const res = await fetch('https://api.vercel.app/blog');
    const blogs = await res.json();

    if (!blogs || blogs.length === 0) {
        return <div className="p-6 text-center text-gray-500">No blogs available</div>;
    }

    return <BlogList posts={blogs} />;
}
