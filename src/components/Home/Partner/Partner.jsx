import Marquee from "react-fast-marquee";

const Partner = () => {
  const imgLink = [
    "assets/image/company1.jpg",
    "assets/image/company2.jpg",
    "assets/image/company3.jpg",
    "assets/image/company4.jpg",
    "assets/image/company5.jpg",
    "assets/image/company6.jpg",
  ];

  return (
    <div className="text-center">
      <h2 className="mb-10 text-3xl font-bold">Our Partner Companies</h2>
      <p className="text-xl">
      Discover our restaurant's partners – the heartbeat of our culinary excellence. We collaborate closely with international companies. This synergy produces a harmonious blend of flavors that exude authenticity.
      </p>
      <Marquee className="lg:grid grid-cols-7 gap-5 mt-10 ">
        {imgLink.map((item, index) => (
          <div key={index} className="avatar mx-2">
            <div className="w-72 rounded">
              <img src={item} />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Partner;
