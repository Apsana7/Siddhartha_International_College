import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const events = [
  {
    id: "1",
    title: "Tech Summit 2025",
    description:
      "Join industry leaders for a day of innovation, networking, and insights into emerging technologies.",
    fullDescription:
      "The Tech Summit 2025 brings together top tech professionals, entrepreneurs, and students for a day of talks, panel discussions, and interactive workshops. Topics include AI, blockchain, cloud computing, and sustainable tech. Attendees will have the opportunity to network with recruiters and gain hands‑on experience in cutting‑edge tools.",
    image:
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260",
    date: "April 15, 2025",
    location: "Main Auditorium",
    time: "9:00 AM – 5:00 PM",
    organizer: "Department of Computer Science",
    price: "Free for students, ₹500 for professionals",
  },
  {
    id: "2",
    title: "Alumni Networking Night",
    description:
      "Connect with successful alumni and explore career opportunities in various industries.",
    fullDescription:
      "A premier networking event where current students can interact with distinguished alumni from diverse fields – technology, finance, healthcare, and arts. Gain valuable career insights, mentorship, and potential job referrals. The evening includes a keynote address, panel discussion, and open networking session.",
    image:
      "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1260",
    date: "May 2, 2025",
    location: "College Conference Hall",
    time: "6:00 PM – 10:00 PM",
    organizer: "Alumni Association",
    price: "Complimentary for students",
  },
  {
    id: "3",
    title: "Research Symposium",
    description:
      "Showcase your research projects and learn from peers and faculty mentors.",
    fullDescription:
      "The annual Research Symposium offers students the chance to present their research findings to a panel of experts. It fosters an interdisciplinary exchange of ideas and encourages collaborative projects. Best presentations will be awarded prizes and publication opportunities.",
    image:
      "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260",
    date: "June 10, 2025",
    location: "Science Block, Room 301",
    time: "10:00 AM – 4:00 PM",
    organizer: "Research Cell",
    price: "Free",
  },
  {
    id: "4",
    title: "Entrepreneurship Bootcamp",
    description:
      "A three‑day intensive workshop to develop your business idea and pitch it to investors.",
    fullDescription:
      "This immersive bootcamp is designed for aspiring entrepreneurs. Over three days, you will validate your business idea, build a prototype, refine your pitch, and present to a panel of investors. Teams will receive mentorship from seasoned entrepreneurs and may secure early‑stage funding.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260",
    date: "July 5–7, 2025",
    location: "Incubation Center",
    time: "9:00 AM – 6:00 PM",
    organizer: "Startup Club",
    price: "₹2000 (includes meals and materials)",
  },
  {
    id: "5",
    title: "Cultural Fest 2025",
    description:
      "Celebrate diversity with music, dance, food, and art from around the world.",
    fullDescription:
      "Cultural Fest 2025 is a vibrant celebration of cultural diversity. The day features performances, art exhibitions, food stalls, and interactive workshops. It's a great opportunity to experience different traditions and build community bonds.",
    image:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260",

    date: "August 20, 2025",
    location: "Open Air Amphitheater",
    time: "11:00 AM – 9:00 PM",
    organizer: "Cultural Committee",
    price: "Free entry",
  },
  {
    id: "6",
    title: "Career Fair",
    description:
      "Meet recruiters from top companies, explore internships, and land your dream job.",
    fullDescription:
      "Our annual Career Fair connects students with leading companies across sectors. You can explore job openings, internship opportunities, and attend on‑the‑spot interviews. Career counselors will also be available to review resumes and offer career guidance.",
    image:
      "https://images.pexels.com/photos/301833/pexels-photo-301833.jpeg?auto=compress&cs=tinysrgb&w=1260",
    date: "September 12, 2025",
    location: "Sports Complex",
    time: "10:00 AM – 5:00 PM",
    organizer: "Placement Cell",
    price: "Free for students",
  },
];

function getEvent(id: string) {
  return events.find((event) => event.id === id);
}

export async function generateStaticParams() {
  return events.map((event) => ({
    id: event.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) {
    return { title: "Event Not Found" };
  }
  return {
    title: `${event.title} | Siddhartha College`,
    description: event.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const event = getEvent(id);

  if (!event) {
    notFound();
  }

  const relatedEvents = events.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <>
      <section className="relative h-[70vh] min-h-75 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-4xl font-bold">{event.title}</h1>
            <p className="mt-4 text-lg md:text-lg text-gray-200 max-w-2xl mx-auto">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      <nav className="w-11/12 mx-auto py-4 px-4 text-sm text-gray-500 ">
      <div className="text-orange-500 underline underline-offset-2 mb-6 flex gap-2 items-center">
        <ArrowLeft className="h-4 w-4 "/>
        <Link href='/events'>Back to all events</Link>
      </div>
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/events" className="hover:text-blue-600">Events</Link>
          </li>
          <li>/</li>
          <li className="text-gray-700 font-medium truncate">
            {event.title}
          </li>
        </ol>
      </nav>

      <section className="w-11r/12 mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800  mb-4">
                About This Event
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {event.fullDescription || event.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div className="bg-blue-50  rounded-xl p-4 text-center flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700 ">Date</p>
                <p className="text-xs text-gray-600 ">{event.date}</p>
              </div>
              <div className="bg-green-50  rounded-xl p-4 text-center flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700 ">Location</p>
                <p className="text-xs text-gray-600 ">{event.location}</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 text-center flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700 ">Time</p>
                <p className="text-xs text-gray-600 ">{event.time}</p>
              </div>
              <div className="bg-purple-50  rounded-xl p-4 text-center flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700 ">Organizer</p>
                <p className="text-xs text-gray-600 ">{event.organizer || "TBA"}</p>
              </div>
              <div className="bg-red-50  rounded-xl p-4 text-center col-span-2 flex flex-col gap-2">
                <p className="text-sm font-semibold text-gray-700 ">Price</p>
                <p className="text-xs text-gray-600 ">{event.price || "Free"}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
          
            {relatedEvents.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-gray-800  mb-4">
                  Other Events
                </h4>
                <ul className="space-y-4">
                  {relatedEvents.map((rel) => (
                    <li key={rel.id}>
                      <Link
                        href={`/events/${rel.id}`}
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
                          <p className="text-sm font-medium text-gray-800 ">
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