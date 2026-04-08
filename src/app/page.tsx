import PostsTable from "./components/PostsTable";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Posts</h1>
      <PostsTable />
    </div>
  );
}
