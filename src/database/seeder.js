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
        thumbnail: "https://img.youtube.com/vi/N4rqRd9P4p8/hq720.jpg",
      },
      {
        title: "Sony Xperia 1 Mark V",
        url: "https://www.youtube.com/embed/A0p_sc4PGPE",
        thumbnail: "https://img.youtube.com/vi/A0p_sc4PGPE/hq720.jpg",
      },
      {
        title: "Ngeliat laptop dengan logo ini?",
        url: "https://www.youtube.com/embed/hLXIik8dmdg",
        thumbnail: "https://img.youtube.com/vi/hLXIik8dmdg/hq720.jpg",
      },
      {
        title: "Oppenheimer",
        url: "https://www.youtube.com/embed/uYPbbksJxIg",
        thumbnail: "https://img.youtube.com/vi/uYPbbksJxIg/hq720.jpg",
      },
      {
        title: "Moge Showcase",
        url: "",
        thumbnail: "https://i.ytimg.com/vi/Da3dFwxk_eQ/hq720.jpg",
      },
    ];

    const username_data = ["Anton", "Budi", "Chika", "Dani", "Eka"];

    const products_data = [
      {
        thumbnail:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/7/7/d2638a5b-2c2c-435a-b663-969218e3ae18.jpg",
        url: "https://www.tokopedia.com/eigeradventure/eiger-fiora-2-0-backpack-16l-ws-tosca-bb887",
      },
      {
        thumbnail:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/6/21/7b67647e-0a99-46de-834a-c325889035fb.jpg",
        url: "https://www.tokopedia.com/eigeradventure/eiger-helicon-watch-olive",
      },
      {
        thumbnail:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/8/4/f075b7e2-7ae3-4345-8fed-7fba60897f60.jpg",
        url: "https://www.tokopedia.com/eigeradventure/eiger-kinkajou-pinch-2-0-sandals-terracotta-40",
      },
      {
        thumbnail:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2021/11/22/ad46fa54-4d84-44e5-98ab-a308a13572c5.jpg",
        url: "https://www.tokopedia.com/unilever-food/bango-kecap-manis-pouch-1-52kg",
      },
      {
        thumbnail:
          "https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/7/28/1644ac97-28e0-458c-a36b-fc9bf3075807.jpg",
        url: "https://www.tokopedia.com/moisdemarsbags/tas-bahu-wanita-shoulder-bag-mois-de-mars-marlee-series-tasya-misc",
      },
    ];

    // Insert 5 users
    const users = [];
    for (let i = 1; i <= 5; i++) {
      const user = await User.create({
        username: username_data[i - 1],
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
          url: products_data[j - 1].url,
          thumbnail: products_data[j - 1].thumbnail,
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
