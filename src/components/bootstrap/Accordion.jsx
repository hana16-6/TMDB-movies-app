import React from "react";

function Accordion(props) {
  return (
    <div class="accordion" id={props.accordionId}>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${props.dataTarget}`}
            aria-expanded="false"
            aria-controls={props.dataTarget}
          >
            {props.title}
          </button>
        </h2>
        <div
          id={props.dataTarget}
          class="accordion-collapse collapse show"
          data-bs-parent={props.accordionId}
        >
          <div class="accordion-body">{props.children}</div>
        </div>
      </div>
    </div>
  );
}
Accordion.defaultProps = {
  title: "Accordion Item",
  accordionId: "accordionExample",
  dataTarget: "panelsStayOpen-collapseOne",
};
export default Accordion;
