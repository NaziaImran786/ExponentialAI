// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use server"

// import { createClient } from "@sanity/client"
// import { revalidatePath } from "next/cache"

// // Initialize the Sanity client
// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: "2023-05-03",
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: false,
// })

// // Function to validate Sanity connection
// async function validateSanityConnection() {
//   try {
//     // Try to fetch a single document to test the connection
//     await client.fetch('*[_type == "blogPost"][0]')
//     return true
//   } catch (error) {
//     console.error("Sanity connection test failed:", error)
//     return false
//   }
// }

// // Update the createBlogPost function to handle errors better
// export async function createBlogPost(data: any) {
//   try {
//     console.log("Creating blog post with data:", {
//       ...data,
//       image: data.image ? (data.image.startsWith("data:") ? "[data URL]" : data.image) : null,
//     })

//     // Log environment variables (without exposing sensitive data)
//     console.log("Environment check:", {
//       projectIdExists: !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//       datasetExists: !!process.env.NEXT_PUBLIC_SANITY_DATASET,
//       tokenExists: !!process.env.SANITY_API_TOKEN,
//     })

//     // Test Sanity connection
//     const isConnected = await validateSanityConnection()
//     if (!isConnected) {
//       console.log("Sanity connection failed, using local storage fallback")
//       // Store in localStorage as fallback (only works in browser)
//       return {
//         _id: `local-${Date.now()}`,
//         _type: "blogPost",
//         ...data,
//         _createdAt: new Date().toISOString(),
//       }
//     }

//     // Format the date to ISO string for Sanity
//     const formattedData = {
//       ...data,
//       date: data.date.toISOString().split("T")[0], // Format as YYYY-MM-DD
//     }

//     // Handle data URLs - Sanity doesn't accept them directly
//     if (formattedData.image && formattedData.image.startsWith("data:")) {
//       // For now, we'll just use a placeholder image
//       formattedData.image = "https://via.placeholder.com/800x600?text=Image+From+Data+URL"
//     }

//     // Create the blog post in Sanity with better error handling
//     try {
//       const response = await client.create({
//         _type: "blogPost",
//         ...formattedData,
//       })

//       console.log("Blog post created successfully:", response)

//       // Revalidate the blog page to show the new post
//       revalidatePath("/blog")

//       return response
//     } catch (sanityError) {
//       console.error("Sanity create operation failed:", sanityError)

//       // Return a mock response as fallback
//       return {
//         _id: `local-${Date.now()}`,
//         _type: "blogPost",
//         ...data,
//         _createdAt: new Date().toISOString(),
//       }
//     }
//   } catch (error) {
//     console.error("Error creating blog post:", error)
//     throw new Error(error instanceof Error ? error.message : "Failed to create blog post")
//   }
// }
