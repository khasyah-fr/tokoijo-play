import bcrypt from "bcrypt";

import Video from "../models/video.js";
import Product from "../models/product.js";
import User from "../models/user.js";
import Comment from "../models/comment.js";

const seeder = async () => {
  try {
    console.log("Initializing seeder...");

    await Product.deleteMany({});
    await Video.deleteMany({});
    await User.deleteMany({});

    const yt_data = [
      {
        title: "Review realme 11 Pro+ Indonesia",
        url: "https://www.youtube.com/embed/N4rqRd9P4p8",
        thumbnail: "https://img.youtube.com/vi/N4rqRd9P4p8/sddefault.jpg",
      },
      {
        title: "Sony Xperia 1 Mark V",
        url: "https://www.youtube.com/embed/A0p_sc4PGPE",
        thumbnail: "https://img.youtube.com/vi/A0p_sc4PGPE/sddefault.jpg",
      },
      {
        title: "Nyobain Samsung Galaxy Z Flip5 dan Fold5 Indonesia!",
        url: "https://www.youtube.com/embed/COaAOqIwjfw",
        thumbnail: "https://img.youtube.com/vi/COaAOqIwjfw/sddefault.jpg",
      },
      {
        title: "Ngeliat laptop dengan logo ini?",
        url: "https://www.youtube.com/embed/hLXIik8dmdg",
        thumbnail: "https://img.youtube.com/vi/hLXIik8dmdg/sddefault.jpg",
      },
      {
        title: "Oppenheimer",
        url: "https://www.youtube.com/embed/uYPbbksJxIg",
        thumbnail: "https://img.youtube.com/vi/uYPbbksJxIg/sddefault.jpg",
      },
    ];

    // Insert 5 users
    const users = [];
    for (let i = 1; i <= 5; i++) {
      const user = await User.create({
        username: `username${i}`,
        password: await bcrypt.hash(`username${i}`, 10),
      });

      users.push(user);
    }

    // Insert 5 products and 5 comments to each of the 5 videos
    for (let i = 1; i <= 5; i++) {
      const video = await Video.create({
        user_id: users[i - 1]._id,
        title: yt_data[i - 1].title,
        url: yt_data[i - 1].url,
        thumbnail: yt_data[i - 1].thumbnail,
        views: 0,
      });

      for (let j = 1; j <= 5; j++) {
        await Product.create({
          video_id: video._id,
          title: `Product ${j} for video ${i}`,
          url: `https://tokopedia.com/products/${j}`,
          thumbnail: `https://tokopedia.com/images/${j}`,
          price: (Math.floor(Math.random() * 500) + 1) * 1000,
        });
      }

      for (let k = 1; k <= 5; k++) {
        await Comment.create({
          video_id: video._id,
          user_id: users[k - 1]._id,
          message: `Comment ${k} from user ${users[k - 1]._id} for video ${i}`,
        });
      }
    }

    console.log("Database seeded successfully");
  } catch (err) {
    console.error("Failed to seed the database:", err);
  }
};

export default seeder;
