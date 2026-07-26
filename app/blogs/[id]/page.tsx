import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const allBlogs = [
  {
    id: "1",
    title: "10 Tips for Successful Remote Learning",
    description:
      "Learn how to stay productive and engaged while studying from home.",
    content: `
      <p>Remote learning has become the new normal. Here are ten strategies to help you focus, stay motivated, and make the most of your online classes.</p>
      <h2>1. Create a Dedicated Study Space</h2>
      <p>Designate a quiet, clutter-free area for your studies. This helps your brain associate that space with focus and productivity.</p>
      <h2>2. Stick to a Routine</h2>
      <p>Set a daily schedule that mimics a typical school day. Wake up at the same time, take breaks, and log off at a reasonable hour.</p>
      <h2>3. Minimize Distractions</h2>
      <p>Turn off notifications, use noise-canceling headphones, and keep your phone in another room during study blocks.</p>
      <h2>4. Participate Actively</h2>
      <p>Engage in discussions, ask questions, and collaborate with peers – it makes learning more interactive and memorable.</p>
      <h2>5. Take Breaks</h2>
      <p>Use the Pomodoro technique: 25 minutes of focused work followed by a 5-minute break. Longer breaks (15-30 min) after every 2 hours.</p>
    `,
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 15, 2025",
    author: "Dr. Anjali Sharma",
    authorAvatar:
      "https://i.pravatar.cc/150?img=1",
    authorBio: "Dr. Anjali Sharma is an education consultant with 15 years of experience.",
    category: "Study Tips",
  },
  {
    id: "2",
    title: "The Future of AI in Education",
    description:
      "How artificial intelligence is transforming learning and teaching.",
    content: `
      <p>AI-powered tools are personalizing education, automating grading, and providing real-time feedback. Explore the potential and challenges.</p>
      <h2>Personalized Learning</h2>
      <p>AI adapts content to each student's pace and style, making learning more effective.</p>
      <h2>Automated Admin</h2>
      <p>Teachers can offload routine tasks like grading and attendance, freeing time for instruction.</p>
      <h2>Ethical Considerations</h2>
      <p>Data privacy and bias are key concerns – we must ensure AI is used responsibly.</p>
    `,
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 10, 2025",
    author: "Prof. Rohan Mehta",
    authorAvatar:
      "https://i.pravatar.cc/150?img=2",
    authorBio: "Prof. Rohan Mehta is an AI researcher and professor at BuildCo.",
    category: "Technology",
  },
  {
    id: "3",
    title: "Campus Life: A Student's Perspective",
    description:
      "What it's really like to be a student at BuildCo – from academics to social life.",
    content: `
      <p>From late-night study sessions to weekend fests, campus life is a blend of hard work and fun. Hear from a student who has experienced it all.</p>
      <h2>Academics</h2>
      <p>Classes are rigorous but engaging. Professors are approachable and always ready to help.</p>
      <h2>Social Scene</h2>
      <p>There are clubs for every interest – from coding to drama. The annual cultural fest is a highlight.</p>
      <h2>Support Systems</h2>
      <p>Counseling services, peer mentoring, and career guidance are readily available.</p>
    `,
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Feb 5, 2025",
    author: "Sneha Patel",
    authorAvatar:
      "https://i.pravatar.cc/150?img=3",
    authorBio: "Sneha Patel is a third-year student and campus ambassador.",
    category: "Campus Life",
  },
  {
    id: "4",
    title: "How to Build a Stunning Portfolio",
    description:
      "Showcase your skills and land your dream job with a professional portfolio.",
    content: `
      <p>Your portfolio is your calling card. Learn the key elements of a great portfolio and how to present your work effectively.</p>
      <h2>Choose Your Best Work</h2>
      <p>Quality over quantity. Include only projects that demonstrate your strongest skills.</p>
      <h2>Tell a Story</h2>
      <p>For each project, describe the problem, your role, the process, and the outcome.</p>
      <h2>Make it Visual</h2>
      <p>Use images, videos, and live demos to make your portfolio engaging.</p>
    `,
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 28, 2025",
    author: "Aisha Khan",
    authorAvatar:
      "https://i.pravatar.cc/150?img=4",
    authorBio: "Aisha Khan is a career coach and design mentor.",
    category: "Career",
  },
  {
    id: "5",
    title: "Mental Health Matters: Managing Exam Stress",
    description:
      "Simple techniques to stay calm and focused during exam season.",
    content: `
      <p>Exam stress is real. Discover effective mindfulness practices, time management tips, and self-care routines to keep your mental well-being in check.</p>
      <h2>Mindfulness</h2>
      <p>Practice deep breathing and meditation for 5-10 minutes daily.</p>
      <h2>Time Management</h2>
      <p>Break your study plan into manageable chunks and avoid cramming.</p>
      <h2>Self-Care</h2>
      <p>Get enough sleep, eat well, and take time to relax.</p>
    `,
    image:
      "https://images.pexels.com/photos/4386463/pexels-photo-4386463.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 20, 2025",
    author: "Dr. Meera Iyer",
    authorAvatar:
      "https://i.pravatar.cc/150?img=5",
    authorBio: "Dr. Meera Iyer is a psychologist and student wellness expert.",
    category: "Wellness",
  },
  {
    id: "6",
    title: "Top 5 Programming Languages to Learn in 2025",
    description:
      "Stay ahead of the curve by learning the most in-demand languages.",
    content: `
      <p>From Python to Rust, we break down the languages that are shaping the future of software development and where to start.</p>
      <h2>1. Python</h2>
      <p>Versatile, beginner-friendly, and used everywhere – from web to AI.</p>
      <h2>2. JavaScript</h2>
      <p>Essential for web development; Node.js and React make it a full-stack powerhouse.</p>
      <h2>3. Rust</h2>
      <p>Systems programming with safety and performance – growing rapidly.</p>
      <h2>4. Go</h2>
      <p>Simple, fast, and great for cloud and microservices.</p>
      <h2>5. Kotlin</h2>
      <p>The modern choice for Android development.</p>
    `,
    image:
      "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "Jan 15, 2025",
    author: "Karan Joshi",
    authorAvatar:
      "https://i.pravatar.cc/150?img=6",
    authorBio: "Karan Joshi is a senior software engineer and tech educator.",
    category: "Technology",
  },
];

function getBlog(id: string) {
  return allBlogs.find((blog) => blog.id === id);
}

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = getBlog(id);
  if (!blog) {
    return { title: "Blog Not Found" };
  }
  return {
    title: `${blog.title} | BuildCo`,
    description: blog.description,
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = getBlog(id);

  if (!blog) {
    notFound();
  }

  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">{blog.title}</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              {blog.description}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="w-11/12 mx-auto py-4  text-sm text-gray-500  bg-white">
      <div className="mb-4">
        <Link href='/blogs' className="text-orange-600 underline underline-offset-2">Back to blogs</Link>
      </div>
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blogs" className="hover:text-blue-600">Blogs</Link>
          </li>
          <li>/</li>
          <li className="text-gray-700  font-medium truncate">
            {blog.title}
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <section className="w-10/12 mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <article className="bg-white rounded-2xl shadow-lg p-6 md:p-8 prose prose-lg max-w-none">
              <div className="flex items-center gap-4 mb-6 border-b border-gray-100 pb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={blog.authorAvatar}
                    alt={blog.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 ">{blog.author}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
                <span className="ml-auto bg-blue-100  text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {blog.category}
                </span>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: blog.content || blog.description }}
                className="text-gray-700  leading-relaxed"
              />
            </article>
          </div>

          <div className="space-y-6">
            {blog.authorBio && (
              <div className="bg-white  rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800  mb-3">
                  About the Author
                </h4>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={blog.authorAvatar}
                      alt={blog.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 ">{blog.author}</p>
                    <p className="text-sm text-gray-500">{blog.authorBio}</p>
                  </div>
                </div>
              </div>
            )}

            {relatedBlogs.length > 0 && (
              <div className="bg-white  rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800  mb-4">
                  Related Posts
                </h4>
                <ul className="space-y-4">
                  {relatedBlogs.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={`/blogs/${rel.id}`}
                        className="flex items-center space-x-3 hover:bg-gray-50  p-2 rounded-lg transition"
                      >
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-gray-200 ">
                          <Image
                            src={rel.image}
                            alt={rel.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-800  line-clamp-2">
                            {rel.title}
                          </p>
                          <p className="text-xs text-gray-500 ">
                            {rel.date}
                          </p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}