import Image from "next/image";
import React from "react";
import about from "../../assets/img/about.svg";

const About = () => {
  return (
    <section className="pt-32 container mx-auto  h-screen">
      <div className="px-4  flex justify-center items-center flex flex-col lg:flex-row">
        <Image src={about} className="h-80" alt="about" />
        <p className="pb-10 ">
          Welcome to [Website Name], your ultimate destination for high-quality
          products and exceptional service. At [Website Name], we&apos;re passionate
          about providing our customers with the best selection of products to
          meet their needs, whether it&apos;s for everyday essentials or special
          occasions. Our journey began with a simple vision: to create a shopping
          experience that is seamless, enjoyable, and reliable. With a dedication
          to quality and a commitment to customer satisfaction, we&apos;ve curated a
          diverse range of products from trusted brands and manufacturers. From
          electronics to fashion, home decor to wellness products, we have
          something for everyone. But [Website Name] is more than just an online
          store. We&apos;re a community of like-minded individuals who share a passion
          for quality, innovation, and value. Our team is dedicated to helping you
          find exactly what you&apos;re looking for and providing personalized support
          every step of the way. Thank you for choosing [Website Name]. We&apos;re
          thrilled to be a part of your shopping journey and look forward to
          serving you for years to come.
        </p>
      </div>
    </section>
  );
};

export default About;
