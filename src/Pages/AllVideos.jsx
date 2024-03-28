import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

const AllVideos = () => {
  const [videoFiles, setVideoFiles] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setVideoFiles([...videoFiles, ...files]);
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <input
        type="file"
        accept="video/*"
        multiple
        onChange={handleFileChange}
        className="block  text-sm my-6 mx-4 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:cursor-pointer"
      />
      <h2 className="my-4 text-4xl font-bold text-center">Video List</h2>
      {videoFiles.length > 0 && (
        <div>
          <div className="flex items-center max-w-[90%] mx-auto justify-center py-8 flex-wrap gap-4 bg-gray-100 rounded-xl">
            {videoFiles.map((file, index) => (
              <div key={index}>
                <video
                  className="w-[25rem] aspect-video cursor-pointer rounded-lg"
                  onClick={() => handleVideoClick(file)}
                >
                  <source src={URL.createObjectURL(file)} type={file.type} />
                </video>
              </div>
            ))}
          </div>
        </div>
      )}
      {selectedVideo && (
        <div className="fixed inset-0 backdrop-blur-xl bg-opacity-30 flex justify-center items-center">
          <div className="flex flex-col gap-3 ">
            <button className="place-self-end">
              <XMarkIcon className="w-6 h-6" onClick={handleCloseModal} />
            </button>
            <video controls autoPlay className="w-[65rem] aspect-video">
              <source
                src={URL.createObjectURL(selectedVideo)}
                type={selectedVideo.type}
              />
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllVideos;
