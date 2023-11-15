import MenuItem from "./MenuItem";

function Menu() {
  return (
    <>
      <MenuItem />
      <MenuItem />
      <MenuItem available={false} />
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </>
  );
}

export default Menu;
