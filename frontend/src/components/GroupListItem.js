const GroupListItem = ({ id, name }) => {
  return (
    <div style={styles.componentMainblockStyle}>
      <p>{name}</p>
    </div>
  );
};

const styles = {
  componentMainblockStyle: {
    border: "solid black 1px",
  },
};

export default GroupListItem;
