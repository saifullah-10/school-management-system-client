import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
  return (
    <div className="container mx-auto">
      <div className="bg-purple-700 p-4 h-52 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-between relative overflow-hidden">
        <div className="flex flex-col w-full sm:w-1/2 space-y-2 mb-4 sm:mb-0 text-center sm:text-left font-bold ">
          <h2 className="text-white text-2xl sm:text-3xl font-bold">
            Join Our Newsletter
          </h2>
          <p className="text-purple-200  text-sm sm:text-base">
            Subscribe our newsletter to get our latest update & news.
          </p>
        </div>
        <div className="w-full sm:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <Input
              type="email"
              placeholder="Enter your email:"
              className="pr-28 w-full"
            />
            <Button
              className="absolute  right-0 top-0 rounded-l-none"
              variant="secondary"
            >
              Submit Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
