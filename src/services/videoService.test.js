import assert from "assert";
import VideoService from "../services/videoService.js";
import VideoRepository from "../repositories/videoRepository.js";

const mockVideoRepository = {
  findByTitle: async (title) => {
    const videos = [
      { id: 1, title: "Menamatkan FIFA - Windah" },
      { id: 2, title: "Windah Basudara" },
    ];
    return videos.filter((video) => video.title.match(title));
  },
};

// Positive test: should return videos with matching title
async function positiveTest() {
  const title = "win";
  VideoRepository.findByTitle = mockVideoRepository.findByTitle;
  const result = await VideoService.getVideosByTitle(title);

  assert.deepStrictEqual(result, [
    { id: 1, title: "Menamatkan FIFA - Windah" },
    { id: 2, title: "Windah Basudara" },
  ]);
}

// Negative test: should return an empty array when no videos match the title
async function negativeTestNoMatch() {
  const title = "Mobile";
  VideoRepository.findByTitle = mockVideoRepository.findByTitle;
  const result = await VideoService.getVideosByTitle(title);

  assert.deepStrictEqual(result, []);
}

// Run the tests
(async () => {
  try {
    console.log("Positive Test (Match)...");
    await positiveTest();

    console.log("Negative Test (No Match)...");
    await negativeTestNoMatch();

    console.log("All tests passed.");
  } catch (error) {
    console.error("Test failed:", error.message);
  }
})();
