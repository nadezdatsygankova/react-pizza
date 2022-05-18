import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={505}
    viewBox="0 0 280 505"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="111" y="159" rx="3" ry="3" width="52" height="6" />
    <rect x="-2" y="261" rx="12" ry="12" width="280" height="27" />
    <circle cx="137" cy="131" r="110" />
    <rect x="1" y="306" rx="12" ry="12" width="274" height="107" />
    <rect x="-1" y="427" rx="12" ry="12" width="280" height="65" />
  </ContentLoader>
)

export default Skeleton;