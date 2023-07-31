const Album = () => {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}album/index.html`}
      style={{ width: '100%', height: screen.height * 0.6 }}
    />
  );
};

export default Album;
