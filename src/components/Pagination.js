import { Button } from "@mui/material";

function Pagination({ howManyPages, setPageNow, pageNow }) {
  const pages = new Array(howManyPages).fill("page");
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <Button
            key={`${page}${index}`}
            onClick={() => setPageNow(index)}
            style={
              pageNow === index
                ? { color: "black", backgroundColor: "yellow", margin: "3px" }
                : { color: "white", backgroundColor: "black", margin: "3px" }
            }
          >
            {index + 1}
          </Button>
        );
      })}
    </div>
  );
}

export default Pagination;
