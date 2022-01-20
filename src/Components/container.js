/** @jsxImportSource @emotion/react */

const Container = ({ children, ...props }) => {
  return (
    <div
      css={{
        backgroundColor: "white",
        width: "100%",
        maxWidth: "800px",
        margin: "0px auto",

        flex: 1,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
