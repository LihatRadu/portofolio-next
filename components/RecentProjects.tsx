import { project } from "@/data/data"
import { PinContainer } from "./ui/PinContainer"

const RecentProjects = () =>{
  return(
    <div className="py-20">
      <h1 className="text-rose-500">Recent Projects</h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {project.map(({title, id, link, description, img}) =>(
          <div key={id} className="w-[80vw] sm:w-96 items-center justify-center flex h-[25rem] bg-rose-500
            lg:min-h-[32.5rem]">
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]
                lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg-rounded-3xl">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt={title}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                <p>{description}</p>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
