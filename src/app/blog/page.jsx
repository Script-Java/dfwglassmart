import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/markdown";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import img1 from "../assets/img/blog1.jpg";

export default function Blog() {
    const posts = getSortedPostsData();

    if (!posts || posts.length === 0) {
        console.error("No posts found");
        return <p className="text-center text-xl">No blogs available at the moment.</p>;
    }

    return (
        <div className="">
            <Navbar />

            <div className="">
                <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <Image
                        src={img1}
                        alt="Hero Background"
                        fill
                        className="object-cover z-0"
                        priority
                    />
                    <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <h1 className="text-white text-4xl md:text-5xl font-bold">Blog Posts</h1>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-6 py-24 text-center text-base-content">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6">
                    Glass Repair Blog – Expert Tips & Industry News
                </h1>
                <p className="text-lg mb-12">
                    Welcome to the <strong>Glass Repair Blog</strong> by <strong>DFW Glass Mart</strong>! Whether you need expert
                    <strong> glass maintenance tips</strong>, <strong>repair advice</strong>, or the
                    <strong> latest industry updates</strong>, this blog is your go-to resource. Our goal is to provide homeowners,
                    drivers, and business owners with <strong>practical solutions</strong> for all types of glass-related issues.
                </p>

                <h2 className="text-2xl font-bold mb-4">What You’ll Learn Here</h2>
                <ul className="text-left max-w-2xl mx-auto space-y-4 list-disc pl-6 text-base">
                    <li>
                        <strong>Auto Glass Repair</strong> – Learn how to handle windshield chips, cracks, and replacements.
                    </li>
                    <li>
                        <strong>Home Glass Maintenance</strong> – Find expert advice on keeping residential glass in top condition.
                    </li>
                    <li>
                        <strong>Commercial Glass Solutions</strong> – Discover durable glass options for businesses.
                    </li>
                    <li>
                        <strong>Energy-Efficient Glass</strong> – Explore smart glass innovations and cost-saving tips.
                    </li>
                    <li>
                        <strong>Safety & Prevention</strong> – Get proactive tips to prevent damage before it happens.
                    </li>
                </ul>
            </section>

            <section className="max-w-7xl mx-auto px-6">
                <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-center lg:text-left">
                    All Blogs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <Image
                                    src={post.image || "/assets/tehran.jpg"}
                                    alt={post.title || "blog post image"}
                                    width={400}
                                    height={250}
                                    layout="responsive"
                                />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{post.title || "Untitled Post"}</h2>
                                <p>{post.description || "No description available."}</p>
                                <div className="card-actions justify-end">
                                    <Link className="btn btn-primary" href={`/blog/${post.id}`}>
                                        Read
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="">
                <Footer />
            </div>
        </div>
    );
}
