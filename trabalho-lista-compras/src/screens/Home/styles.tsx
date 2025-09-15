import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAEAEA",
  },

  topView: {  
    backgroundColor: "#7A4A9E",
    width: "100%",    
    height: 173,
    paddingTop: 76,
    paddingHorizontal: 24,
    alignItems: "center",
  },

  title: {
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },

  newProduct: {
    flexDirection: "row",
    width: "100%",
    marginTop: 42,
    
  },

  input: {
    flex: 1,               
    height: 54,            
    paddingHorizontal: 16,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginRight: 8,
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31C667",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },

  textButton: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 24,
    marginTop: 56,
    marginBottom: 20,
  },

  counter: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  createdText: {
    color: "#31C667", 
    fontSize: 14,
    fontWeight: "700",
  },

  doneText: {
    color: "#7A4A9E", 
    fontSize: 14,
    fontWeight: "700",
  },

  counterNumber: {
    backgroundColor: "#D9D9D9",
    color: "#333",
    fontSize: 12,
    fontWeight: "700",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999, 
    overflow: "hidden",
  },

  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
    marginBottom: 376,
  },

  iconButton: {
    width: 16,
    height: 16,
  },

  icon: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },

  listTitle: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "700", 
    marginBottom: 4,    
  },

  subListText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: "400", 
    textAlign: "center",
  },
});
