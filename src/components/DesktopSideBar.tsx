import { useEffect, useState } from "react"
import useScreen from "@/hooks/useScreen"

type SidebarItem = {
  id: string
  label: string
  isActive?: boolean
}

type SidebarProps = {
  items: SidebarItem[],
  header : string
}

const DeskstopSidebar = ({ items , header }: SidebarProps) => {
  const [activeItem, setActiveItem] = useState<string | null>(items[0].id)

  // Handle smooth scrolling when clicking on sidebar items
  const handleItemClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Set the active item
      setActiveItem(id)

      // Scroll to the element with smooth behavior
      element.scrollIntoView({
        behavior: "smooth",
        block: "center", // Centers the element in the viewport
      })
    }
  }

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 5

      // Find the section that is currently in view
      const sections = items
        .map((item) => {
          const element = document.getElementById(item.id)
          if (element) {
            const rect = element.getBoundingClientRect()
            return {
              id: item.id,
              top: rect.top + window.scrollY,
            }
          }
          return null
        })
        .filter(Boolean)

      // Sort sections by their position
      sections.sort((a, b) => a!.top - b!.top)

      // Find the section that is currently in view
      let currentActive = null
      for (const section of sections) {
        if (section && section.top <= scrollPosition) {
          currentActive = section.id
        } else {
          break
        }
      }

      if (currentActive) {
        setActiveItem(currentActive)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [items])

  const {isLargest} = useScreen()

  return (
    <aside className={`fixed ${isLargest ? 'left-44' : 'left-4'} h-96 w-fit border-r border-gray-200 overflow-y-auto`}>
      <div className="p-6">

        <nav className="space-y-6">
          
              <h2 className="font-semibold text-[#155DFC] text-2xl inter-font">
         {header}
            </h2>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full text-left py-1 outline-0 transition-colors instrument-sans-font text-lg ${
                      activeItem === item.id ? "text-[#1B1B1B] font-medium" : "text-[#A3A3A3] hover:text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          
        </nav>
      </div>
    </aside>
  )
}


export default DeskstopSidebar