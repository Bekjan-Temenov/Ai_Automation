import React from "react";

type ProjectModalProps = {
  id: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    dexription2: string;
    keys: string[];
    results: {
      title: string;
      hashtags?: {
        id: number;
        number: string;
        title: string;
      }[];
      hashtag?: string[];
      metrics?: {
        id: number;
        title: string;
        number: string;
      }[];
    };
    result?: { title: string; hashtags: string[] };
    button: string;
    percent: string;
    analitic: {
      id: number;
      title: string;
      number: number;
    }[];
  } | null;
};
const ProjectModal = ({ id, onClose, data }: ProjectModalProps) => {
  return (
    <div
      id={`${id}-modal`}
      className="modal active fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="bg-charcoal rounded-2xl p-6 max-w-5xl h-4xl  w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 text-accent-orange"
        >
          ✕
        </button>
        <div className="gap-4 w-[90%] justify-between grid grid-cols-2 border-solid border-red-600">
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-3xl font-bold">{data?.title}</h2>
            <img
              className="w-full h-64 bg-gradient-to-br from-accent-orange/20 to-transparent rounded-lg flex items-center justify-center mb-6"
              src={data?.image}
              alt=""
            />
            <p></p>
          </div>
          <div className="flex flex-col border-solid border-red-600">
            <h3 className="text-xl font-bold mb-4">Project Overview</h3>
            <p className="text-gray-300 mb-6">{data?.description}</p>

            <h4 className="font-bold mb-3">Key Features:</h4>
            <ul className="text-gray-300 space-y-2 mb-6">
              {data?.keys?.map((item, index) => (
                <li key={index}>{item || ""}</li>
              ))}
            </ul>

            <h4 className="font-bold mb-3">{data?.results?.title}:</h4>
            <div className="flex items-center justify-evenly ">
              {data?.results?.hashtags?.map((item, index) => (
                <div key={index} className="flex flex-col gap-2  items-center">
                  <span className="text-2xl font-bold text-accent-orange">
                    {item.number}
                  </span>
                  <span className="text-sm text-gray-400">{item.title}</span>
                </div>
              ))}
              <div className="grid grid-cols-3 gap-2 border-solid">
                {data?.results?.hashtag?.map((item) => (
                  <span className="bg-charcoal px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>

              <div className="space-y-3 w-full">
                {data?.results?.metrics?.map((item, index) => (
                  <div key={index} className="flex justify-between w-full">
                    <span className="text-2xl font-bold text-accent-orange">
                      {item.number}
                    </span>
                    <span className="text-sm text-gray-400">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
