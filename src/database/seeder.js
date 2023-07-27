import Video from "../models/video.js";

const seeder = async () => {
  try {
    await Video.deleteMany({});

    // Seed 5 Video data
    for (let i = 1; i <= 5; i++) {
      const video = await Video.create({
        title: "Video " + i,
        url: `https://www.youtube.com/watch?v=${i}`,
        thumbnail: `https://img.youtube.com/vi/${i}/maxresdefault.jpg`,
        views: Math.floor(Math.random() * 1000) + 1,
      });
    }
  } catch (err) {
    console.error("Failed seeding the database:", err);
  }
};

export default seeder;
