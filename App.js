const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "childbaby1" }, "This is a child 1"),
    React.createElement("h2", { id: "childbaby2" }, "This is a child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "childbaby1" }, "This is a child 2"),
    React.createElement("h2", { id: "childbaby2" }, "This is a child 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
