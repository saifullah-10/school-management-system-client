import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsletterSubscription = () => {
  return (
    <div className="bg-purple-700 relative">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/gradient-navy-blue-digital-grid-wallpaper_53876-104785.jpg?w=740&t=st=1725702679~exp=1725703279~hmac=cb9af8a1bcb652644f1c81ad2fc8629e09fb2623f6d610dc4b3814702e2abdce')",
        }}
      />
      <div className="absolute inset-0 bg-purple-700/20  z-10" />

      {/* Content */}
      <div className="container mx-auto relative z-20">
        <div className="p-4 h-52 sm:p-8 rounded-lg flex flex-col sm:flex-row items-center justify-around relative overflow-hidden">
          <div className="flex flex-col w-full sm:w-1/2 sm:space-y-2 sm:mb-0 text-center font-bold ">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">
              Join Our Newsletter
            </h2>
            <p className="text-purple-200 text-sm sm:text-base">
              Subscribe our newsletter to get our latest update & news.
            </p>
          </div>
          <div className="w-full sm:w-1/2 flex items-center">
            <div className="relative w-full max-w-md">
              <Input
                type="email"
                placeholder="Enter your email:"
                className="pr-28 w-full p-6 text-white bg-purple-600 bg-opacity-50 rounded-xl placeholder-purple-300"
              />
              <Button
                className="absolute right-1 hover:bg-pink-700/90 top-[10%] bg-purple-600 rounded-xl"
                variant="newsletterBtn"
              >
                Submit Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
