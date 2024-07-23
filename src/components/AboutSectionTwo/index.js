import { aboutImg } from "@/assets/images";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 px-20 md:py-20 lg:py-28 ">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
          <div
          className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
          data-wow-delay=".15s"
        >
          <Image
            src="/images/about/aboutimg.jpg"
            alt="about image"
            fill
            className="drop-shadow-three dark:hidden dark:drop-shadow-none"
          />
          <Image
            src="/images/about/aboutimg.jpg"
            alt="about image"
            fill
            className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
          />
        </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Subject-Specific Tutoring
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Personalized tutoring sessions tailored to the needs of O-level and A-level students in various subjects including Mathematics, Physics, Chemistry, Biology, and English LanguagePersonalized tutoring sessions tailored to the needs of O-level and A-level students in various subjects including Mathematics, Physics, Chemistry, Biology, and English Language
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Exam Preparation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Comprehensive preparation for O-level and A-level exams through mock exams, practice tests, and detailed reviews of past papers.Comprehensive preparation for O-level and A-level exams through mock exams, practice tests, and detailed reviews of past papers.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Interactive Learning
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Engaging and interactive learning experiences through virtual whiteboard sessions, live tutoring, and group study sessions. Our approach is designed to enhance understanding and retention in a dynamic learning environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
