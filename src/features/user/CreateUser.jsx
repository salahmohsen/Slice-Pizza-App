function CreateUser({ username, setUserName }) {
  return (
    <input
      type="text"
      placeholder="Your Name"
      defaultValue={username ? `${username}` : null}
      form="StartOrdering"
      autoComplete="cc-name"
      onChange={(e) => setUserName(e.target.value)}
      style={{ width: `${username.length}ch` }}
      className={`m-auto min-w-[5rem] max-w-[10rem]  rounded-md bg-bg-input px-2 py-1 text-center capitalize text-yellow outline-none placeholder:text-center placeholder:font-thin sm:min-w-[11rem] sm:max-w-[15rem] lg:min-w-[20rem]`}
    />
  );
}

export default CreateUser;
