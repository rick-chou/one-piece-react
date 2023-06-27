/**
 * @link https://codepen.io/bsehovac/pen/EMyWVv
 */

const Cube = () => {
  return (
    <>
      <div className="ui">
        <div className="ui__background"></div>

        <div className="ui__game"></div>

        <div className="ui__texts">
          <h1 className="text text--title">
            <span>THE</span>
            <span>CUBE</span>
          </h1>
          <div className="text text--note">Double tap to start</div>
          <div className="text text--timer">0:00</div>
          <div className="text text--complete">
            <span>Complete!</span>
          </div>
          <div className="text text--best-time">
            <icon trophy></icon>
            <span>Best Time!</span>
          </div>
        </div>

        <div className="ui__prefs">
          <range name="size" title="Cube Size" list="2,3,4,5"></range>
          <range
            name="flip"
            title="Flip Type"
            list="Swift&nbsp;,Smooth,Bounce"></range>
          <range
            name="scramble"
            title="Scramble Length"
            list="20,25,30"></range>
          <range
            name="fov"
            title="Camera Angle"
            list="Ortographic,Perspective"></range>
          <range
            name="theme"
            title="Color Scheme"
            list="Cube,Erno,Dust,Camo,Rain"></range>
        </div>

        <div className="ui__theme">
          <range name="hue" title="Hue" color></range>
          <range name="saturation" title="Saturation" color></range>
          <range name="lightness" title="Lightness" color></range>
        </div>

        <div className="ui__stats">
          <div className="stats" name="cube-size">
            <i>Cube:</i>
            <b>3x3x3</b>
          </div>
          <div className="stats" name="total-solves">
            <i>Total solves:</i>
            <b>-</b>
          </div>
          <div className="stats" name="best-time">
            <i>Best time:</i>
            <b>-</b>
          </div>
          <div className="stats" name="worst-time">
            <i>Worst time:</i>
            <b>-</b>
          </div>
          <div className="stats" name="average-5">
            <i>Average of 5:</i>
            <b>-</b>
          </div>
          <div className="stats" name="average-12">
            <i>Average of 12:</i>
            <b>-</b>
          </div>
          <div className="stats" name="average-25">
            <i>Average of 25:</i>
            <b>-</b>
          </div>
        </div>

        <div className="ui__buttons">
          <button className="btn btn--bl btn--stats">
            <icon trophy></icon>
          </button>
          <button className="btn btn--br btn--prefs">
            <icon settings></icon>
          </button>
          <button className="btn btn--bl btn--back">
            <icon back></icon>
          </button>
          <button className="btn btn--br btn--theme">
            <icon theme></icon>
          </button>
          <button className="btn btn--br btn--reset">
            <icon reset></icon>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cube;
