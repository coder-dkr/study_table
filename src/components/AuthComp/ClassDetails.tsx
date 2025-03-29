import { ChevronDown } from "lucide-react"

const ClassDetails = () => {
  return (
    <div className="space-y-10">
          {/* 10th Class Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">10th class details</h2>

            <div className="space-y-6">
              <div>
                <p className="mb-2">Marks in 10th Class</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>

              <div>
                <p className="mb-2">Marks in maths</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>

              <div>
                <p className="mb-2">Marks in science</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>

          {/* 11th Class Section */}
          <div>
            <h2 className="text-xl font-semibold mb-6">11th class details</h2>

            <div className="space-y-6">
              <div>
                <p className="mb-2">Marks in 11th Class</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>

              <div>
                <p className="mb-2">Marks in maths</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>

              <div>
                <p className="mb-2">Marks in science</p>
                <div className="flex items-center justify-between border-b border-gray-300 pb-2">
                  <span>Above 90%</span>
                  <ChevronDown className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ClassDetails
