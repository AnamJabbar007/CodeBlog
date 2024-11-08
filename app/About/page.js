import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
        <div className="w-full max-w-xs ">
          <Image
            src="/Kittey.jpg" // Replace with your image path
            alt="Kittey"
            width={250} // You can increase the width to a higher value for better resolution
            height={250} 
            className="w-full h-auto rounded-lg shadow-lg mb-6 md:mb-0" // Responsive classes
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hi, I'm Sushi, a passionate frontend developer with a love for building beautiful and functional user interfaces.
          </p>
          <p className="text-lg">
            This blog is dedicated to sharing knowledge and tutorials on various frontend technologies like React, JavaScript, CSS, and more. Whether you're a beginner or an experienced developer, there's something here for everyone.
          </p>
            {/* Skills Section */}
          <div>
      <h2 className="text-3xl font-bold mt-12 mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center md:justify-normal lg:justify-start gap-8">
        {/* React Logo */}
        <div className="flex flex-col items-center">
          <Image src="/reactlogo.png" alt="React" width={60} height={60} />
          <p className="mt-2 text-lg">React</p>
        </div>
        
        {/* Next.js Logo */}
        <div className="flex flex-col items-center">
          <Image className="bg-white rounded-full" src="/nextjslogo.png" alt="Next.js" width={60} height={60} />
          <p className="mt-2 text-lg">Next.js</p>
        </div>

        {/* Tailwind CSS Logo */}
        <div className="flex flex-col items-center">
          <Image className="pt-6" src="/tailwindlogo.png" alt="Tailwind CSS" width={60} height={60} />
          <p className="mt-2 text-lg">Tailwind CSS</p>
        </div>

        {/* JavaScript Logo */}
        <div className="flex flex-col items-center">
          <Image src="/jslogo.png" alt="JavaScript" width={60} height={60} />
          <p className="mt-2 text-lg">JavaScript</p>
        </div>

        {/* Figma Logo */}
        <div className="flex flex-col items-center">
          <Image src="/figmalogo.png" alt="UI/UX Design" width={60} height={60} />
          <p className="mt-2 text-lg">UI/UX Design</p>
        </div>
        </div>
      </div>
        </div>
        
      </div>

    
     
    </div>
  );
};

export default AboutPage;
