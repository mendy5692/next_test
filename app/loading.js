import { Skeleton } from "@mui/material";

export default function Loading() {
  return (
    <div className="pageSkeleton">
      <div className="searchSkeleton column">
        <Skeleton animation="wave" width={"900px"} height={"200px"} sx={{ borderRadius: '28px' }}/>
      </div>
      <div className="gridSkeleton row">
        <Skeleton animation="wave" width={"300px"} height={"600px"} sx={{ borderRadius: '16px' }}/>
        <Skeleton animation="wave" width={"300px"} height={"600px"} sx={{ borderRadius: '16px' }}/>
        <Skeleton animation="wave" width={"300px"} height={"600px"} sx={{ borderRadius: '16px' }}/>
      </div>
    </div>
  );
}
