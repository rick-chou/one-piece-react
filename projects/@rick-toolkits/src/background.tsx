const Background = () => {
  return (
    <div className="absolute top-0 right-0 h-screen overflow-hidden">
      <video className="h-full" autoPlay muted loop>
        <source src="/aniya.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Background;
