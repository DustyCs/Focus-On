import { simpleTitle as Header } from "../components/headers/simpleTitle"
import { UserTask } from "../components/UserTask"
import { Timer } from "../components/Timer"
import { ControlButton } from "../components/ControlButton"
import { SessionLog } from "../components/SessionLog"

export const Main = () => {
  return (
    <div className="flex flex-col justify-center mx-auto mt-10 w-[50%] gap-10 border-5 p-10 border-white">
        <Header title="Focus On" />
        <main>
          <UserTask />
          <Timer />
          <ControlButton />
          <SessionLog/>
          <button>Toggle Dark Mode</button>
          <button>Change Task</button>
        </main>
    </div>
  )
}
