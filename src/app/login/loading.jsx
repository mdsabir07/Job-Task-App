export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500">
                <p className="text-center py-8 text-lg">Loading...</p>
            </div>
        </div>
    );
}
