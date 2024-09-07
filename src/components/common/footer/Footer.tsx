import { Facebook,Star, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/4 px-4 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8  mr-2">
                <Star className="w-8 h-8 text-yellow-400 " />
              </div>
              <h2 className="text-2xl font-bold">Starlight University</h2>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Starlight University is a leading institution known for its
              academic excellence, innovative programs, and commitment to
              student success. With modern facilities and a renowned faculty, it
              provides a dynamic environment for learning, research, and
              personal growth, empowering students to excel in a globalized
              world.
            </p>
            <div className="flex space-x-2">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-purple-200 p-2 rounded-full text-purple-600 hover:text-purple-950 hover:bg-purple-400  transition-colors"
                >
                  <Icon className="w-5 h-5 " />
                </a>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Our Services:</h3>
            <ul className="space-y-2">
              {[
                "Academic Programs",
                "Extracurricular Activities",
                "Guidance and Counseling",
                "Library Services",
                "Health and Wellness Services",
                "Parent-Teacher Communication",
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 hover:ml-2 transition-all duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Quick Links:</h3>
            <ul className="space-y-2">
              {[
                "Admissions",
                "Academic Calendar",
                "Parent Portal",
                "Student Login",
                "Contact Us",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-yellow-400 hover:ml-2 transition-all duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div className="w-full lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                "https://picsum.photos/id/1011/200/200",
                "https://picsum.photos/id/1015/200/200",
                "https://picsum.photos/id/1018/200/200",
                "https://picsum.photos/id/1020/200/200",
                "https://picsum.photos/id/1021/200/200",
                "https://picsum.photos/id/1022/200/200",
              ].map((pic, index) => (
                <img
                  src={pic}
                  key={index}
                  className="bg-gray-700 aspect-square rounded-xl"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto text-center py-4">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-yellow-400">Starlight University</span>. All
          Rights Reserved Crated by{" "}
          <span className="text-yellow-400">Team 3</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
