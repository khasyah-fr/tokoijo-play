import bcrypt from "bcrypt";

import Video from "../models/video.js";
import Product from "../models/product.js";
import User from "../models/user.js";

const seeder = async () => {
  try {
    console.log("Initializing seeder...");

    await Product.deleteMany({});
    await Video.deleteMany({});
    await User.deleteMany({});

    // Insert 5 users
    for (let i = 1; i <= 5; i++) {
      const user = await User.create({
        username: `username${i}`,
        password: await bcrypt.hash(`username${i}`, 10),
      });
    }

    // Insert 5 products and 5 comments to each of the 5 videos

    for (let i = 1; i <= 5; i++) {
      const video = await Video.create({
        title: `Video ${i}`,
        url: `https://youtube.com/videos/${i}`,
        thumbnail: `https://youtube.com/images/${i}`,
        views: 0,
      });

      for (let j = 1; j <= 5; j++) {
        await Product.create({
          video_id: video._id, // Use the ObjectId of the created Video
          title: `Product ${j} for video ${i}`,
          url: `https://tokopedia.com/products/${j}`,
          price: (Math.floor(Math.random() * 500) + 1) * 1000,
        });
      }
    }

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Failed to seed the database:", err);
  }
};

export default seeder;
