"use client";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Maintenance from "../components/Maintenance";

const MaintenancePage = () => {
  const [loop, setLoop] = useState(Array.from({ length: 1 }));

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (loop.length < 3) {
      setTimeout(() => {
        setLoop(loop.concat(Array.from({ length: 1 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };
  return (
    <div style={{ padding: "50px 100px" }}>
      <InfiniteScroll
        dataLength={loop.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h2 style={{ color: "white" }}>載入中...</h2>}
        endMessage={
          <div>
            <h2 style={{ fontSize: "46px", color: "white" }}>唔好再碌啦!~</h2>
          </div>
        }
        key={loop.length}
      >
        {loop.map((item, i) => (
          <div key={i}>
            <Maintenance />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default MaintenancePage;
