function Message() {
  const name = "Philip";
  if (name) {
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
}

export default Message;
