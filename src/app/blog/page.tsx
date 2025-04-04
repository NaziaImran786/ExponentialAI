import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of AI Agents in Enterprise",
    excerpt:
      "Explore how intelligent AI agents are transforming business operations and customer experiences across industries.",
    date: "April 2, 2025",
    author: "Dr. Sarah Chen",
    category: "AI Trends",
    image: "/placeholder.svg?height=400&width=600",
    slug: "future-of-ai-agents",
  },
  {
    title: "Building Trust in AI: Transparency and Explainability",
    excerpt:
      "How businesses can develop AI systems that are transparent, explainable, and trustworthy for users and stakeholders.",
    date: "March 28, 2025",
    author: "Michael Rodriguez",
    category: "AI Ethics",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-trust-in-ai",
  },
  {
    title: "Case Study: How Financial Services Firm Reduced Costs by 40%",
    excerpt:
      "A detailed look at how a leading financial services firm implemented AI agents to transform their customer service operations.",
    date: "March 15, 2025",
    author: "Emily Tanaka",
    category: "Case Study",
    image: "/placeholder.svg?height=400&width=600",
    slug: "financial-services-case-study",
  },
  {
    title: "The Role of AI in Healthcare Patient Coordination",
    excerpt:
      "How AI agents are improving patient experiences, reducing administrative burden, and enhancing care coordination.",
    date: "March 10, 2025",
    author: "Dr. James Wilson",
    category: "Healthcare",
    image: "/placeholder.svg?height=400&width=600",
    slug: "ai-in-healthcare",
  },
  {
    title: "Designing Conversational AI That Feels Natural",
    excerpt: "Best practices for creating AI agents that can maintain natural, contextual conversations with users.",
    date: "March 5, 2025",
    author: "Dr. Sarah Chen",
    category: "AI Design",
    image: "/placeholder.svg?height=400&width=600",
    slug: "designing-conversational-ai",
  },
  {
    title: "The Business Case for Intelligent Automation",
    excerpt: "How to build a compelling business case for implementing AI agents in your organization.",
    date: "February 28, 2025",
    author: "Emily Tanaka",
    category: "Business Strategy",
    image: "/placeholder.svg?height=400&width=600",
    slug: "business-case-for-automation",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Exponential AI{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Insights, case studies, and thought leadership on AI innovation and business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-16">
        <div className="container px-2 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Featured blog post"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            <div>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium mb-2">
                AI Strategy • April 3, 2025
              </div>
              <h2 className="text-3xl font-bold mb-4">
                The Next Generation of AI: Beyond Chatbots to Intelligent Agents
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                As AI technology evolves, we&apos;re moving beyond simple chatbots to truly intelligent agents that can
                reason, learn, and take action. This shift represents a fundamental change in how businesses can
                leverage AI for competitive advantage.
              </p>
              <div className="flex items-center mb-6">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <div className="font-medium">Dr. Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">CEO & Co-Founder</div>
                </div>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Read Full Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/30">
        <div className="container px-2 mx-auto">
          <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt={post.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-sm">{post.author}</div>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 font-medium"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Categories section */}
      <section className="py-16">
        <div className="container px-2 mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse by Category</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "AI Trends",
              "Case Studies",
              "AI Ethics",
              "Business Strategy",
              "Healthcare",
              "Financial Services",
              "Retail",
              "Manufacturing",
            ].map((category, index) => (
              <Link
                key={index}
                href="#"
                className="p-4 border rounded-lg text-center hover:bg-purple-50 hover:border-purple-200 dark:hover:bg-purple-900/20 dark:hover:border-purple-800 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container px-2 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 text-white/80">
              Stay updated with the latest insights, case studies, and news on AI innovation and business
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="px-4 py-3 rounded-lg flex-1 text-black" />
              <Button size="lg" variant="secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

