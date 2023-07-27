import Video from "../models/video.js";
import Product from "../models/product.js";

const seeder = async () => {
  try {
    console.log("Initializing seeder...");

    await Product.deleteMany({});
    await Video.deleteMany({});

    // Insert 5 products and 5 comments to each of the 5 videos

    for (let i = 1; i <= 5; i++) {
      const video = await Video.create({
        title: "Video " + i,
        url: `https://www.youtube.com/watch?v=${i}`,
        thumbnail: `https://img.youtube.com/${i}`,
        views: 0,
      });

      for (let j = 1; j <= 5; j++) {
        await Product.create({
          video_id: video._id, // Use the ObjectId of the created Video
          title: "Product " + j,
          url: `https://tokopedia.com/${j}`,
          price: (Math.floor(Math.random() * 500) + 1) * 1000,
        });
      }
    }

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Failed seeding the database:", err);
  }
};

export default seeder;
