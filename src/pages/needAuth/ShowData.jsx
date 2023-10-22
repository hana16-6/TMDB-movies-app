import React from "react";
import Accordion from "../../components/bootstrap/Accordion";
import MoviesList from "../../components/homepage/MoviesList";

function ShowData() {
  return (
    <div className="content_wrapper mx-4">
      <div className="row">
        <div className="filter_panel col-3">
          <div className="my-3">
            <Accordion
              accordionId="search_filters"
              dataTarget="filters_content"
              title="Filters"
            >
              <p>test</p>
            </Accordion>
          </div>

          <Accordion>
            <p>test</p>
          </Accordion>
        </div>
        <div className="page_wrapper col-9">
          <MoviesList />
        </div>
      </div>
    </div>
  );
}

export default ShowData;
