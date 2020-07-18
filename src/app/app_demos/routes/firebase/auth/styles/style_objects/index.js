export default {
  container: {
    width: "100%",
    height: "100%",
    overflow: "scroll",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  },
  examplesContainer: {
    backgroundColor: "rgba(0,0,0,0.55)",
    width: "100%",
    height: "100%",
    overflow: "scroll",
    padding: "20px",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative"
  },
  modalAbs: {
    backgroundColor: "rgba(0,0,0,0.9)",
    position: "absolute",
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: 0
    width: "100%",
    height: "100%"
  },
  modalRel: {
    // border: "solid yellow 3px",
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflowY: "scroll"
  },
  demo: {
    border: "solid black 4px",
    display: "inline-block",
    padding: "10px"
  },
  code: {
    border: "solid white 2px",
    display: "inline-block",
    padding: "6px",
    marginTop: "8px",
    color: "white",
    fontSize: "10px",
    textDecoration: "none"
  },
  button: {
    border: "none",
    width: "200px",
    padding: "15px",
    borderRadius: "50px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "gray",
    fontSize: "12px"
  },
  closeBtn: {
    backgroundColor: "rgba(0,0,0,0)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "50px",
    height: "50px",
    padding: "10px",
    marginBottom: "10px",
    border: "solid white 3px",
    borderRadius: "200px",
    color: "white",
    fontSize: "20px",
    fontWeight: "bold"
  },
  rowCentered: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  columnCentered: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontWeight: "bold",
    color: "black",
    fontSize: "20px",
    marginTop: "80px",
    padding: "5px",
    border: "solid black 1px"
  },
  subheading: {
    fontWeight: "bold",
    color: "rgba(46, 49, 49, 1)",
    fontSize: "16px",
    marginLeft: "10px"
  },
  body: {
    fontWeight: "lighter",
    color: "rgba(189, 195, 199, 1)",
    fontSize: "12px",
    maxWidth: "500px",
    marginBottom: "8px"
  },
  //
  styles: {},
  addStyle: {},
  className: "",
  addClassName: "",
  //
  form: {
    padding: "10px",
    borderRadius: "20px",
    width: "100%",
    minWidth: "300px",
    maxWidth: "300px"
  },
  formHeader: {
    padding: "10px",
    fontFamily: "Verdana, Geneva, sans-serif",
    color: "gray"
  },
  formTitle: { fontSize: "20px", fontWeight: "bold" },
  formSubtitle: { fontSize: "14px" },
  formMainRow: {
    padding: "10px"
  },
  formFooter: {
    padding: "10px"
  },
  inputContainer: { paddingBottom: "5px" },
  input: {
    borderRadius: "20px",
    width: "100%",
    height: "32px",
    border: "none",
    backgroundColor: "lightGray",
    fontFamily: "Verdana, Geneva, sans-serif",
    paddingLeft: "10px"
  },
  submitButton: {
    backgroundColor: "lightGreen",
    borderRadius: "25px",
    width: "100%",
    minWidth: "100px",
    maxWidth: "200px",
    height: "40px",
    color: "white",
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: "14px",
    fontWeight: "bold"
  },
  submitButtonDisabled: {
    backgroundColor: "gray",
    borderRadius: "25px",
    width: "100%",
    minWidth: "100px",
    maxWidth: "200px",
    height: "40px",
    color: "white",
    fontFamily: "Verdana, Geneva, sans-serif",
    fontSize: "14px",
    fontWeight: "bold"
  },
  errorLabel: {
    paddingLeft: "10px",
    color: "red",
    fontSize: "12px"
  },
  formError: {
    marginTop: "10px",
    color: "red",
    fontSize: "12px"
  }
};
