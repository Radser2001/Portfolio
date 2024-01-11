import Image from "next/image";

const ProjectCard = ({ projectName, image, techStack, projectUrl }) => {
  return (
    <div>
      <div className="card w-72 md:w-[350px] md:h-[250px] bg-base-100 shadow-xl mb-20 ">
        {/* <figure>
          <Image src={image} alt="Shoes" width={600} height={380} />
        </figure> */}
        <div className="card-body">
          <h2 className="card-title">{projectName}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>

          <div className="card-actions justify-end">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="btn bg-sky-500 text-white"
            >
              Buy Now
            </button>
          </div>
          {/* project details model */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">
                Press ESC key or click the button below to close
              </p>
              <div className="card-actions justify-start mt-5">
                {techStack?.map((tech, index) => {
                  return (
                    // <h1
                    //   key={index}
                    //   className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-34 sm:text-sm md:text-sm"
                    // >

                    // </h1>
                    <div key={index} className="badge badge-outline">
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      {/* <div
        id={projectName}
        className="bg-slate-800 p-10 flex flex-col items-center justify-center rounded-xl mb-20 md:ml-0 md:mr-0  sm:max-w-xs m-6 md:max-w-md lg:max-w-none"
      >
        <h1 style={{ fontSize: "25px" }} className="mb-10 text-center">
          {projectName}
        </h1>
        <Image src={image} alt="{projectName}" width={600} height={350} />
        <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
          {techStack?.map((tech, index) => {
            return (
              <h1
                key={index}
                className=" bg-slate-600 font-bold text-sky-500 p-1 md:p-3 rounded-md text-center w-34 sm:text-sm md:text-sm"
              >
                {tech}
              </h1>
            );
          })}
        </div>
        <div className="mt-10">
          <a target="_blank" rel="noopener noreferrer" href={projectUrl}>
            <p className="text-lg bg-sky-500 p-1 px-2 rounded cursor-pointer">
              Check it out!
            </p>
          </a>
        </div>
      </div> */}
    </div>
  );
};
export default ProjectCard;
