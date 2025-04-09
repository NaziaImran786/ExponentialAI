// // src/services/create.ts

// export const myFetch = async (category: string) => {
//     // Simulate fetching blog posts based on category
//     // In a real application, this would involve an API call
//     const mockPosts = [
//       {
//         _id: "1",
//         title: "AI Trends in Enterprise",
//         excerpt: "Explore the latest AI trends.",
//         content: "Detailed content about AI trends.",
//         author: "Sarah Chen",
//         category: "AI Trends",
//         image: "/placeholder.svg",
//         date: "2024-01-01",
//         slug: "ai-trends",
//       },
//       {
//         _id: "2",
//         title: "Case Study: AI Implementation",
//         excerpt: "A case study on AI implementation.",
//         content: "Detailed content about the case study.",
//         author: "Michael Rodriguez",
//         category: "Case Studies",
//         image: "/placeholder.svg",
//         date: "2024-01-05",
//         slug: "ai-case-study",
//       },
//       {
//         _id: "3",
//         title: "Ethical Considerations in AI",
//         excerpt: "Discussing ethical considerations in AI.",
//         content: "Detailed content about AI ethics.",
//         author: "Emily Tanaka",
//         category: "AI Ethics",
//         image: "/placeholder.svg",
//         date: "2024-01-10",
//         slug: "ai-ethics",
//       },
//     ]
  
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const filteredPosts = mockPosts.filter((post) =>
//           category === '"all"' ? true : post.category === category.replace(/"/g, ""),
//         )
//         resolve(filteredPosts)
//       }, 500)
//     })
//   }
  
//   export const createPost = async (newPost: any) => {
//     // Simulate creating a new blog post
//     // In a real application, this would involve an API call
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const mockPosts = [
//           {
//             _id: "1",
//             title: "AI Trends in Enterprise",
//             excerpt: "Explore the latest AI trends.",
//             content: "Detailed content about AI trends.",
//             author: "Sarah Chen",
//             category: "AI Trends",
//             image: "/placeholder.svg",
//             date: "2024-01-01",
//             slug: "ai-trends",
//           },
//           {
//             _id: "2",
//             title: "Case Study: AI Implementation",
//             excerpt: "A case study on AI implementation.",
//             content: "Detailed content about the case study.",
//             author: "Michael Rodriguez",
//             category: "Case Studies",
//             image: "/placeholder.svg",
//             date: "2024-01-05",
//             slug: "ai-case-study",
//           },
//           {
//             _id: "3",
//             title: "Ethical Considerations in AI",
//             excerpt: "Discussing ethical considerations in AI.",
//             content: "Detailed content about AI ethics.",
//             author: "Emily Tanaka",
//             category: "AI Ethics",
//             image: "/placeholder.svg",
//             date: "2024-01-10",
//             slug: "ai-ethics",
//           },
//         ]
//         mockPosts.push(newPost)
//         resolve(mockPosts)
//       }, 500)
//     })
//   }
  
//   export const updatePost = async (postId: string, updatedPost: any) => {
//     // Simulate updating a blog post
//     // In a real application, this would involve an API call
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const mockPosts = [
//           {
//             _id: "1",
//             title: "AI Trends in Enterprise",
//             excerpt: "Explore the latest AI trends.",
//             content: "Detailed content about AI trends.",
//             author: "Sarah Chen",
//             category: "AI Trends",
//             image: "/placeholder.svg",
//             date: "2024-01-01",
//             slug: "ai-trends",
//           },
//           {
//             _id: "2",
//             title: "Case Study: AI Implementation",
//             excerpt: "A case study on AI implementation.",
//             content: "Detailed content about the case study.",
//             author: "Michael Rodriguez",
//             category: "Case Studies",
//             image: "/placeholder.svg",
//             date: "2024-01-05",
//             slug: "ai-case-study",
//           },
//           {
//             _id: "3",
//             title: "Ethical Considerations in AI",
//             excerpt: "Discussing ethical considerations in AI.",
//             content: "Detailed content about AI ethics.",
//             author: "Emily Tanaka",
//             category: "AI Ethics",
//             image: "/placeholder.svg",
//             date: "2024-01-10",
//             slug: "ai-ethics",
//           },
//         ]
//         const updatedPosts = mockPosts.map((post) => (post._id === postId ? { ...post, ...updatedPost } : post))
//         resolve(updatedPosts)
//       }, 500)
//     })
//   }
  
//   export const deletePost = async (postId: string, postTitle: string) => {
//     // Simulate deleting a blog post
//     // In a real application, this would involve an API call
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         const mockPosts = [
//           {
//             _id: "1",
//             title: "AI Trends in Enterprise",
//             excerpt: "Explore the latest AI trends.",
//             content: "Detailed content about AI trends.",
//             author: "Sarah Chen",
//             category: "AI Trends",
//             image: "/placeholder.svg",
//             date: "2024-01-01",
//             slug: "ai-trends",
//           },
//           {
//             _id: "2",
//             title: "Case Study: AI Implementation",
//             excerpt: "A case study on AI implementation.",
//             content: "Detailed content about the case study.",
//             author: "Michael Rodriguez",
//             category: "Case Studies",
//             image: "/placeholder.svg",
//             date: "2024-01-05",
//             slug: "ai-case-study",
//           },
//           {
//             _id: "3",
//             title: "Ethical Considerations in AI",
//             excerpt: "Discussing ethical considerations in AI.",
//             content: "Detailed content about AI ethics.",
//             author: "Emily Tanaka",
//             category: "AI Ethics",
//             image: "/placeholder.svg",
//             date: "2024-01-10",
//             slug: "ai-ethics",
//           },
//         ]
//         const updatedPosts = mockPosts.filter((post) => post._id !== postId)
//         resolve(updatedPosts)
//       }, 500)
//     })
//   }
  
  


// // 'use server'
// // import { client } from "@/sanity/lib/client"

// // // --------------------------------------------------------------fetch blog posts
// // export const myFetch = async (category: string) => {
// //   const posts = await client.fetch(
// //     `*[_type == "blogPost" && category == ${category}] {
// //         _id,
// //         title,
// //         author,
// //         excerpt,
// //         date,
// //         slug,
// //         "image": image.asset->url,
// //         category
// //       }
// //       `
// //   )
// //   return posts
// // }

// // // --------------------------------------------------------------create blog post
// // interface BlogPost {
// //   _id: string
// //   title: string
// //   excerpt: string
// //   content: string
// //   author: string
// //   category: string
// //   image: string
// //   date: string
// //   slug: string
// // }

// // export const createPost = async (newPost: BlogPost) => {
// //   const { _id, title, excerpt, content, author, category, image, date, slug } = newPost

// //   const post = await client.create({
// //     _type: "blogPost",
// //     _id,
// //     title,
// //     excerpt,
// //     content,
// //     author,
// //     category,
// //     image: {
// //       _type: 'image',
// //       asset: { _ref: image }
// //     },
// //     date,
// //     slug: { current: slug }, // Use slug to create SEO-friendly URLs
// //   })

// //   return await myFetch(newPost.category) // Refetch posts for the given category
// // }

// // // --------------------------------------------------------------update blog post
// // export const updatePost = async (_id: string, updatedPost: BlogPost) => {
// //   const { title, excerpt, content, author, category, image, date, slug } = updatedPost

// //   await client
// //     .patch(_id)
// //     .set({
// //       title,
// //       excerpt,
// //       content,
// //       author,
// //       category,
// //       image: {
// //         _type: 'image',
// //         asset: { _ref: image },
// //       },
// //       date,
// //       slug: { current: slug },
// //     })
// //     .commit()

// //   return await myFetch(updatedPost.category)
// // }

// // // --------------------------------------------------------------delete blog post
// // export const deletePost = async (_id: string, title: string) => {
// //   await client.delete(_id)

// //   return await myFetch(title)
// // }
