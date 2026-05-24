import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react'; // Optional: install lucide-react for icons

const Post = () => {
  const location = useLocation();
  const post = location.state;

  const navigate = useNavigate();

  if (!post) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0c1324] text-white">
        <div className="text-center space-y-4">
          <p className="text-xl">🚫 Post not found.</p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 bg-[#c0b340] text-black font-semibold rounded hover:bg-[#b2a533] transition duration-300"
          >
            <ArrowLeft className="mr-2" size={18} />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c1324] px-4 py-10 text-white">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-[#c0b340] hover:text-white transition duration-200 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" size={20} />
          <span className="text-md font-medium">Back to Home</span>
        </button>

        {/* Post Title */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight uppercase">{post.title}</h1>

        {/* Post Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Post Content */}
        <div className="text-lg leading-relaxed text-gray-200 tracking-wide">
          {post.content || 'No detailed content provided for this post.'}
        </div>
      </div>
    </div>
  );
};

export default Post;
