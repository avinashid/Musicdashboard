import React, { useRef } from "react";
import MusicCard from "./MusicCard";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const MusicContainer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 250;
    }
  };
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 250;
    }
  };

  return (
    <div className="musicContainer">
      <div className="musicContainerHead">
        <div className="musicContainerHeadTitle">TItle</div>
        <div className="musicContainerHeadRight">
          <div className="musicContainerHeadShowAll">Show all</div>
          <div className="musicContainerHeadScrollBtn">
            <div className="scrollBtnLeft">
              <BsFillArrowLeftCircleFill onClick={handleScrollLeft} />
            </div>
            <div className="scrollBtnRight">
              <BsFillArrowRightCircleFill onClick={handleScrollRight} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="musicContainerCard"
        ref={containerRef}
        style={{ overflowX: "scroll", scrollBehavior: "smooth" }}
      >
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
};

export default MusicContainer;
