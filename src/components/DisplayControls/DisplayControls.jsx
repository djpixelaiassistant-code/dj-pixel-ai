import "./DisplayControls.css";

export default function DisplayControls(){

  return(

    <>

      {/* TOP TOOLS */}

      <div className="display-tools">

        <button>

          ⛶

        </button>

        <button>

          ✎

        </button>

        <button>

          ⛭

        </button>

        <button className="color-tool">

          ●

        </button>

      </div>

      {/* BOTTOM BAR */}

      <div className="lyrics-bottom-bar">

        {/* LEFT */}

        <div className="bottom-left">

          <span>

            🎵 Lyrics

          </span>

        </div>

        {/* RIGHT */}

        <div className="bottom-right">

          <span>

            Preview

          </span>

          <span>

            Go Live

          </span>

        </div>

      </div>

    </>

  );
}